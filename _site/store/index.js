import { groq } from '@nuxtjs/sanity'
export const state = () => ({
  site: {},
})

export const getters = {
  //   getSections(state) {
  //     const storySection = state.site.content
  //     return storySection
  //   },
}

export const mutations = {
  INIT(state, payload) {
    state.site = { ...payload }
  },
}

const siteQuery = groq`
*[_type == "page"][0]{
    _updatedAt,
    title,
    content[]->{
        // ...,
        _id,
        "name": sectionName,
        "slug": sectionSlug.current,
        "related": *[_type=="story" && references(^._id)]{
                _createdAt,
                _id,
                _updatedAt,
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
    },
}`

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const result = await $sanity.fetch(siteQuery)
    commit('INIT', result)
  },
}
