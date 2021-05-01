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
    sections: [],
  },
})

export const getters = {
  indexContent(state) {
    return state.urlValidationMap.main.index.sections
  },
  sections(state) {
    return state.urlValidationMap.sections
  },
  getNewsSection: (state) => (params) => {
    if (params.section !== undefined || params.section !== '') {
      return state.urlValidationMap.sections.find(
        (section) => section.slug === params.section
      )
    }
    return console.error(`No section matching params: ${params.section} `)
  },
  siteTitle(state) {
    return state.urlValidationMap.main.title
  },
  siteUrl(state) {
    return state.urlValidationMap.main.url
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
  SET_SECTION(state, payload) {
    state.urlValidationMap.sections.push(payload)
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
    page->{
      // ...,
      _createdAt,
      _id,
      _type,
      _updatedAt,
      content[]{
        // ...,
        _type  == 'hero' => {
          _key,
          _type,
          backgroundImage,
          heading,
          tagline,
          "cta": ctas[0]{
            // ...,
            _key,
            title,
            route->{
              _id,
              routeLabel,
              "slug": slug_custom_format.current
            },
          }
        },
        _type == 'textSection' => {
          _key,
          _type,
          heading,
          text
        },
        _type == 'imageSection' => {
          _key,
          _type,
          heading,
          image,
          text
        },
        _type == 'reference' => {
          // ...,
          _type,
          "section": *[_type == 'storySection' && _id == ^._ref ][0]{
            _id,
            _type,
            _createdAt,
            _updatedAt,
            sectionName,
            "slug": slug.current,
            "sectionContent": *[_type=="story" && references(^._id)]{
              // ...
                _id,
                _createdAt,
                _updatedAt,
                "slug": slug.current,
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
          }          
        }
      }
    }
  }
`
const sectionQuery = groq`
  *[_type == 'storySection']{
      _id,
      _createdAt,
      _updatedAt,
      "label": sectionName,
      "slug": slug.current,
      "sectionContent": *[_type=="story" && references(^._id)]{
          // ...
            _id,
            _createdAt,
            _updatedAt,
            "slug": slug.current,
            "type": _type,
            "tag": storyTag,
            "layout": storyLayout,
            "format": storyFormat[0]{
                // ...
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
  }
`

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const indexPage = await $sanity.fetch(indexQuery)
    const pages = await $sanity.fetch(randomPages)
    const sections = await $sanity.fetch(sectionQuery)

    commit('SET_INDEX', indexPage)
    pages.forEach((page) => {
      commit('SET_PAGE', page)
    })
    sections.forEach((section) => {
      commit('SET_SECTION', section)
    })
  },
  validateSection({ getters }, payload) {
    const sections = getters.sections
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
