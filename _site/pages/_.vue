<template>
  <main class="flex flex-col items-center">
    <template v-if="getSections !== undefined">
      <div v-for="section in getSections" :key="section._key">
        <component
          :is="getComponent(section)"
          v-bind="section"
          :section-data="section.section"
        >
          <template v-slot="{ content }">
            <Story
              v-for="story in content"
              :key="story._id"
              :story-data="story"
            />
          </template>
        </component>
      </div>
    </template>
  </main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
// const PREVIEW_QUERY = `*[_type == "page" && _id == $pageId]`
const pageQuery = groq`
  *[_type == "page" && _id == $pageId]{
      _id,
      _createdAt,
      _updatedAt,
      content[]{
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
            link,
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
          text,
          "cta": ctas[0]{
            // ...,
            _key,
            title,
            link,
            title,
            route->{
              _id,
              routeLabel,
              "slug": slug_custom_format.current
            },
          }
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
`

export default {
  layout: 'acgov-news',
  validate({ store, query, params }) {
    const isValid = () => store.dispatch('validPage', params.pathMatch)
    return query.preview === 'true' || isValid()
  },
  async asyncData({ store, query, params, $sanity, error }) {
    // Page Content that was prefetched by the vuex store
    const page = store.state.urlValidationMap.pages.find(
      (page) => page.slug === params.pathMatch
    )
    const queryOptions = { pageId: page.pageId }

    if (query.preview === 'true' || page.pageId.startsWith('drafts.')) {
      console.log('USING PREVIEW CLIENT----->>>')
      try {
        const previewPageContent = await $sanity.previewClient.fetch(
          pageQuery,
          queryOptions
        )
        return { meta: page, [page._type]: previewPageContent[0] }
      } catch (error) {
        error(error)
      }
    } else if (page.pageId.startsWith('drafts.')) {
      error({ statusCode: 404, message: `REQUEST REFUSED` })
    } else {
      try {
        const pageContent = await $sanity.fetch(pageQuery, queryOptions)
        return { meta: page, [page._type]: pageContent[0] }
      } catch (error) {
        error(error)
      }
    }
  },
  computed: {
    getSections() {
      return this.page.content
    },
  },
  methods: {
    getComponent(section) {
      let componentType = ''
      switch (section._type) {
        case 'hero':
          componentType = 'PageHero'
          break
        case 'textSection':
          componentType = 'PageTextSection'
          break
        case 'imageSection':
          componentType = 'PageImageTextSection'
          break
        case 'reference':
          componentType = 'StorySection'
          break
        default:
          return console.error(`NO MATCHING COMPONENTS--->>> ${section._type}`)
      }
      return componentType
    },
  },
  head() {
    return {
      title: this.$route.params.pathMatch,
    }
  },
}
</script>

<style lang="scss" scoped></style>
