<template>
  <section
    class="grid grid-cols-2 w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4 gap-x-12"
  >
    <header class="sr-only">
      <h2>{{ sectionName }}</h2>
    </header>
    <!-- <slot /> -->
    <div class="col-span-full"><slot name="full" /></div>
    <div class="col-start-1 col-end-2"><slot name="left" /></div>
    <div class="col-start-2 col-end-3"><slot name="right" /></div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "storySection"]`

export default {
  name: 'StorySection',
  props: {
    sectionName: {
      type: String,
      default: 'Story section name',
    },
  },
  async fetch() {
    // JavaScript
    const result = await this.$sanity.fetch(query)
    this.storySections = result
  },
  data() {
    return {
      storySections: [],
    }
  },
}
</script>

<style></style>
