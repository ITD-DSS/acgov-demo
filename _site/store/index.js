import { groq } from '@nuxtjs/sanity'
export const state = () => ({
  showDrafPreviewBanner: false,
  user: {
    authenticated: false,
    id: null,
  },
  urlValidationMap: {
    main: {},
    pages: [],
  },
  site: {},
})

export const getters = {
  newsContent(state) {
    return state.urlValidationMap.main.index.sections
  },
  getNewsSection: (state) => (params) => {
    return new Promise((resolve, reject) => {
      if (params.section) {
        resolve(
          state.urlValidationMap.main.index.sections.find(
            (section) => section.slug === params.section
          )
        )
        reject(console.error(`No section matching params: ${params.section} `))
      }
    })
  },
}

export const mutations = {
  showBanner(state) {
    state.showDrafPreviewBanner = true
  },
  SET_INDEX(state, payload) {
    state.urlValidationMap.main = { ...payload }
  },
  SET_PAGE(state, payload) {
    state.urlValidationMap.pages.push(payload)
  },
  INIT(state, payload) {
    state.site = { ...payload }
  },
}

const indexQuery = groq`
*[_type == "siteSettings" && _id == "acgov"][0]{
    // ...
    url,
    title,
    lang,
    _updatedAt,
    "index": frontpage->{
        // ...,
      _id,
      _rev,
    //   routeLabel,
      "slug": slug_custom_format.current,
      "page-id": page->_id,
      "page-label": page->title,
      "sections": page->content[]->{
          // ...,
          _id,
          // _type,
          _createdAt,
          _updatedAt,
          "label": sectionName,
          "slug": slug.current,
          "sectionContent": *[_type=="story" && references(^._id)]{
            //   ...
                _id,
                // _type,
                _createdAt,
                _updatedAt,
                "slug": slug.current,
                // "type": _type,
                "tag": storyTag,
                "layout": storyLayout,
                "format": storyFormat[0]{
                    _key,
                    "componentType": _type,
                    _type == "textStory" => {
                        headline,
                        "body": storyBody[]
                    },
                    _type == "imageLink" => {
                        linkTo,
                        "alt": select(imageLink.altText),
                        "imgSrc": linkImage.asset._ref
                    },
                    _type == "videoStory" => {
                        "headline": videoText.headline,
                        "body": videoText.storyBody,
                        altText,
                        "url": youtubeUrl
                    },
              }
            } | order(_createdAt asc),
        } | order(_createdAt asc)
    }
}
`

const randomPages = groq`
  *[_type == "route" && slug_custom_format.current != "index"]{
    // ...,
    _id,
    routeLabel,
    "slug": slug_custom_format.current,
    page->{...}
  }
`

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const indexPage = await $sanity.fetch(indexQuery)
    const pages = await $sanity.fetch(randomPages)

    commit('SET_INDEX', indexPage)
    pages.forEach((page) => {
      commit('SET_PAGE', page)
    })
  },
  validateSection({ getters }, payload) {
    const sections = getters.newsContent
    const isSection = (section) => section.slug === payload
    return new Promise((resolve, reject) => {
      if (typeof payload === 'string') {
        resolve(sections.some(isSection))
      }
      reject(console.error('No section slug!'))
    })
  },
  validateIndex({ state }) {},
  validateAgency({ state }) {},
  validateDept({ state }) {},
  validateService({ state }) {},
  validateSlug({ state }) {},
}
