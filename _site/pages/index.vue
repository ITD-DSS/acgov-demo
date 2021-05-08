<template>
  <main class="flex flex-col">
    <AcgovNews :news="sections" news-index="government/news/" />
  </main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const indexQuery = groq`*[_type == "route" && _id == $routeId][0]{
  ...page->{
    "sections": content[]->{
        _id,
        _createdAt,
        _updatedAt,
        "label": sectionName,
        "slug": slug.current,
        "sectionContent": *[_type=="story" && references(^._id)]{
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
          }
      }
  }
}
`

export default {
  layout: 'acgov-home',
  fetchKey: 'acgov-index',
  fetchOnServer: true,
  async asyncData({ $sanity, query, store, error }) {
    const queryOptions = { routeId: store.getters.indexRouteId }
    let sections
    if (query.preview === 'true') {
      console.log('USING PREVIEW CLIENT----->>>')
      try {
        const previewSections = await $sanity.previewClient.fetch(
          indexQuery,
          queryOptions
        )
        sections = previewSections
        return sections
      } catch (error) {
        error(error)
      }
    } else if (store.getters.indexRouteId.startsWith('drafts.')) {
      error({ statusCode: 404, message: `REQUEST REFUSED` })
    } else {
      try {
        sections = await $sanity.fetch(indexQuery, queryOptions)
        return sections
      } catch (error) {
        error(error)
      }
    }
    sections = await $sanity.fetch(indexQuery, queryOptions)
    return sections
  },
  head() {
    return {
      title: this.$store.getters.siteTitle,
      meta: [
        {
          hid: 'description',
          name: 'Description',
          content:
            "Homepage for Alameda County's government website. Portal for all government information.",
        },
        {
          hid: 'keywords',
          name: 'Keywords',
          content:
            'Alameda County, government, local government, Bay Area, California, county government, county services, news',
        },
        {
          hid: 'location',
          name: 'Location',
          content: 'Alameda County, Bay Area, California, United States',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: this.$store.getters.siteUrl,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    }
  },
  // TODO: Implement Validation for Preview mode
  validate({ route, query, store }) {
    // Check that routeLabel in store matches
    return (
      query.preview === 'true' ||
      store.state.urlValidationMap.index.slug === route.name ||
      route.path === '/index'
    )
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
