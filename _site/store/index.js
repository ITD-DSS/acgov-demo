import { groq } from '@nuxtjs/sanity'
export const state = () => ({
  showDrafPreviewBanner: false,
  user: {
    authenticated: false,
    id: null,
  },
  site: {},
})

export const getters = {
  //   getSections(state) {
  //     const storySection = state.site.content
  //     return storySection
  //   },
}

export const mutations = {
  showBanner(state) {
    state.showDrafPreviewBanner = true
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

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    const result = await $sanity.fetch(siteQuery)
    commit('INIT', result)
  },
  validateSlug({ state }, slug) {
    const newsSectionSlug = /^\Wgovernment\Wnews\W/g
    const pageContent = state.site.frontpage.page.pageContent
    if (typeof slug === 'string' && slug.match(newsSectionSlug)) {
      const slug = slug.split('/')[0]
    }
    const isSlug = (sectionSlug) => sectionSlug.slug === slug
    return pageContent.some(isSlug)
  },
}
