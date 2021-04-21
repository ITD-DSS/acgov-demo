<template>
  <story-format-selector
    v-if="storyData"
    :id="storyData.slug"
    :component-data="storyData"
  />
</template>

<script>
export default {
  name: 'Story',
  props: {
    storyData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isFull: false,
      isLeft: false,
      isRight: false,
    }
  },
  computed: {
    storyGridClass() {
      return {
        'col-span-full': this.isFull,
        'col-start-1 col-end-2': this.isLeft,
        'col-start-2 col-end-3': this.isRight,
      }
    },
  },
}
</script>

<style scoped></style>
