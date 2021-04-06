import { groq } from '@nuxtjs/sanity'
export const state = () => {
  index: []
}

export const mutations = {
  INIT(state, payload) {
    state.index = [...payload]
  },
}

const siteQuery = groq`
*[_type == "page"][0]{
    _updatedAt,
    title,
    content[]->{
        ...
    },
}`

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { $sanity }) {
    const result = await $sanity.fetch(siteQuery)
    commit('INIT', result)
  },
}
