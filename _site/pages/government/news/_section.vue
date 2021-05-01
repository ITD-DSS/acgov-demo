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
export default {
  layout: 'acgov-news',
  validate({ params, query, store }) {
    const isValid = () => store.dispatch('validateSection', params.section)
    return query.preview === true || isValid()
  },
  async asyncData({ store, params }) {
    return { section: await store.getters.getNewsSection(params) }
  },
}
</script>

<style lang="scss" scoped></style>
