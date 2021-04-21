import { groq } from '@nuxtjs/sanity'
export const state = () => ({
  showDrafPreviewBanner: false,
  user: {
    authenticated: false,
    id: null,
  },
  urlValidationMap: {
    mainIndex: {},
    pages: [],
  },
  site: {},
})

export const getters = {
  newsContent(state) {
    return state.urlValidationMap.mainIndex.content
  },
  getNewsSection: (state) => (params) => {
    return new Promise((resolve, reject) => {
      if (params.section) {
        resolve(
          state.urlValidationMap.mainIndex.content.find(
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
    state.urlValidationMap.mainIndex = { ...payload }
  },
  SET_PAGE(state, payload) {
    state.urlValidationMap.pages.push(payload)
  },
  INIT(state, payload) {
    state.site = { ...payload }
  },
}

const siteQuery = groq`
*[_type == "siteSettings" && _id == "acgov"][0]{
    url,
    title,
    lang,
    _updatedAt,
    frontpage->{
      _id,
      routeLabel,
      "slug": slug_custom_format.current,
      page->{
        _id,
        title,
        "pageContent": content[]->{
          title,
          _id,
          _createdAt,
          _updatedAt,
          "name":sectionName,
          "slug": slug.current,
          "sectionContent": *[_type=="story" && references(^._id)]{
                _id,
                _createdAt,
                _updatedAt,
                "slug": slug.current,
                _type,
                "tag": storyTag,
                "layout": storyLayout,
                "format": storyFormat[0]{
                    _key,
                    _type,
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
          } | order(_createdAt asc),
        }
      },
}`

const randomPages = groq`
  *[_type == "route" && slug_custom_format.current != "index"]{
    // ...,
    _id,
    routeLabel,
    "slug": slug_custom_format.current,
    page->
  }
`

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const result = await $sanity.fetch(siteQuery)
    const pages = await $sanity.fetch(randomPages)

    const { frontpage } = result

    const indexPage = {
      slug: frontpage.slug,
      label: frontpage.routeLabel,
      content: frontpage.page.pageContent,
    }
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
