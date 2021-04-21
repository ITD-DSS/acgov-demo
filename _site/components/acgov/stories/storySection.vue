<template>
  <section
    class="news-grid w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4"
  >
    <header class="">
      <NuxtLink :to="getSlug">
        <h2>{{ sectionName }}</h2>
      </NuxtLink>
    </header>

    <slot v-bind="getContent" />
  </section>
</template>

<script>
export default {
  name: 'StorySection',
  props: {
    storiesData: {
      type: Object,
      default: () => [],
    },
  },
  computed: {
    sectionName() {
      return this.storiesData.name
    },
    getSlug() {
      return `/government/news/${this.storiesData.slug}`
    },
    getContent() {
      return this.storiesData.sectionContent
    },
  },
}
</script>

<style>
/* Partial Override */
.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  grid-auto-flow: row dense;
  column-gap: 1.25rem;
  row-gap: 0.75rem;
}
</style>
