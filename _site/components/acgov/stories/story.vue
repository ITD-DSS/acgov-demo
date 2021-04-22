<template>
  <!-- <story-format-selector v-if="storyData" :component-data="storyData" /> -->
  <story-format-selector v-if="storyData" />
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
  created() {
    this.checkTypes(this.storyData)
  },
  methods: {
    checkTypes(data) {
      console.log(data)
    },
  },
}
</script>

<style scoped></style>
