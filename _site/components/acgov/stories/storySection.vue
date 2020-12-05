<template>
  <section
    class="news-grid w-8/12 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-4"
  >
    <header class="sr-only">
      <h2>{{ sectionName }}</h2>
    </header>

    <!-- <slot name="full" v-bind="full" />

    <slot name="left" v-bind="left" />

    <slot name="right" v-bind="right" /> -->

    <slot v-bind="storiesData" />
  </section>
</template>

<script>
export default {
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
  data() {
    return {
      full: [],
      left: [],
      right: [],
    }
  },
  created() {
    // this.bindToSlot()
  },
  methods: {
    bindToSlot() {
      const stories = this.storiesData
      stories.forEach((story) => {
        switch (story.layout) {
          case 'full':
            this.full.push(story)
            break
          case 'left':
            this.left.push(story)
            break
          case 'right':
            this.right.push(story)
            break

          default:
            console.error('No recognized story layouts')
            break
        }
      })
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
  align-content: start;
  /* grid-auto-flow: row; */
  /* grid-template-areas:
    'full full'
    'left right'; */
}
</style>
