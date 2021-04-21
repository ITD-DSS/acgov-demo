<template>
  <main class="flex flex-col">
    <StorySection :stories-data="section">
      <template v-slot:default="stories">
        <Story
          v-for="story in stories.content"
          :key="story._id"
          :story-data="story"
          :section-slug="stories.storySlug"
        ></Story>
      </template>
    </StorySection>
  </main>
</template>

<script>
export default {
  layout: 'acgov-news',
  validate({ params, query, store }) {
    const isValid = () => store.dispatch('validateSection', params.section)
    if (isValid) {
      return query.preview === true || params.section
    }
  },
  async asyncData({ store, params }) {
    return { section: await store.getters.getNewsSection(params) }
  },
}
</script>

<style lang="scss" scoped></style>
