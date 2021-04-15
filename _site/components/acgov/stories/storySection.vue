<template>
  <section
    class="news-grid w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4"
  >
    <header class="sr-only">
      <h2>{{ sectionName }}</h2>
    </header>

    <slot v-bind="storiesData" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'StorySection',
  props: {
    sectionName: {
      type: String,
      default: 'Story section name',
    },
    storiesData: {
      type: Array,
      default: () => [],
    },
  },
})
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
