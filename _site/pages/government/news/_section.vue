<template>
  <main class="flex flex-col">
    <StorySection :section-data="section" :section-slug="section.slug">
      <template v-slot="{ content }">
        <Story
          v-for="story in content"
          :key="story._id"
          :story-data="story"
        ></Story>
      </template>
    </StorySection>
  </main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const sectionQuery = groq`
*[_type == 'storySection' && _id == $sectionId ][0]{
  "sectionContent": *[_type=="story" && references(^._id)]{
        _id,
        _createdAt,
        _updatedAt,
        "slug": slug.current,
        "type": _type,
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
`

export default {
  layout: 'acgov-news',
  validate({ params, query, store }) {
    const isValid = () => store.dispatch('validateSection', params.section)
    return query.preview === true || isValid()
  },
  async asyncData({ $sanity, store, params }) {
    const sectionMeta = store.state.urlValidationMap.sections.find(
      (section) => section.slug === params.section
    )
    const queryOptions = { sectionId: sectionMeta._id }
    const sectionContent = await $sanity.fetch(sectionQuery, queryOptions)
    return { section: { ...sectionMeta, ...sectionContent } }
  },
}
</script>

<style lang="scss" scoped></style>
