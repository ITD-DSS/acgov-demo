import { groq } from '@nuxtjs/sanity'
export const state = () => ({
  // showDrafPreviewBanner: false,
  // user: {
  //   authenticated: false,
  //   id: null,
  // },
  meta: {},
  urlValidationMap: {
    index: {},
    pages: [],
    sections: [],
  },
})

export const getters = {
  indexRouteId(state) {
    return state.urlValidationMap.index._id
  },
  allPageSlugs(state) {
    return state.urlValidationMap.pages
  },
  sections(state) {
    return state.urlValidationMap.sections
  },
  siteTitle(state) {
    return state.meta.title
  },
  siteUrl(state) {
    return state.meta.url
  },
}

export const mutations = {
  showBanner(state) {
    state.showDrafPreviewBanner = true
  },
  SET_INDEX(state, payload) {
    state.urlValidationMap.index = payload
  },
  SET_MAIN_META(state, payload) {
    state.meta = payload
  },
  SET_PAGE(state, payload) {
    state.urlValidationMap.pages.push(payload)
  },
  SET_SECTION(state, payload) {
    state.urlValidationMap.sections.push(payload)
  },
}

const siteMeta = groq`
*[_type == "siteSettings" && _id == "acgov"][0]{
    _id,
    _updatedAt,
    title,
    url,
    lang
}
`
const indexPageRouteSlug = groq`
*[_type == "siteSettings" && _id == "acgov"][0]{
    ...frontpage->{
      _id,
      _updatedAt,
      routeLabel,
      "slug": slug_custom_format.current
    }
}
`

const allOtherPageSlugs = groq`
  *[_type == "route" && slug_custom_format.current != "index"]{
    routeLabel,
    "slug": slug_custom_format.current,
    ...page->{
      _createdAt,
      "pageId": _id,
      _type,
      _updatedAt,
    }
  }
`
const sectionSlugs = groq`
  *[_type == 'storySection']{
      _id,
      _createdAt,
      _updatedAt,
      "label": sectionName,
      "slug": slug.current,
  }
`

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    // REQUEST MINIMAL DATA FROM SANITY
    const indexRoute = await $sanity.fetch(indexPageRouteSlug)
    const mainMeta = await $sanity.fetch(siteMeta)
    const pages = await $sanity.fetch(allOtherPageSlugs)
    const sections = await $sanity.fetch(sectionSlugs)
    // ADD DATA TO VUEX STORE
    commit('SET_INDEX', indexRoute)
    commit('SET_MAIN_META', mainMeta)
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
  validPage({ getters }, payload) {
    const pages = getters.allPageSlugs
    const isPage = (page) => page.slug === payload
    return new Promise((resolve, reject) => {
      if (typeof payload === 'string') {
        resolve(pages.some(isPage))
      }
      reject(console.error('No Page Slug!'))
    })
  },
}
