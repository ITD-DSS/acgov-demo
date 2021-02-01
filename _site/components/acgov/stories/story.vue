<template>
  <story-format-selector v-if="storyData" :component-data="storyData" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Story',
  props: {
    storyData: {
      type: Object,
      default: () => {},
    },
    // storyFormat: {
    //   type: Object,
    //   default: () => {},
    // },
    // storyLayout: {
    //   type: String,
    //   default: '',
    // },
    // storyCategory: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      isFull: false,
      isLeft: false,
      isRight: false,
    }
  },
  computed: {
    storyGridClass(): Object {
      return {
        'col-span-full': this.isFull,
        'col-start-1 col-end-2': this.isLeft,
        'col-start-2 col-end-3': this.isRight,
      }
    },
  },
  mounted() {
    // this.isLayout()
  },
  methods: {
    // isLayout(): boolean {
    //   const layout = this.storyLayout
    //   if (layout) {
    //     // Check format _type
    //     switch (layout) {
    //       case 'full':
    //         return (this.isFull = true)
    //       case 'left':
    //         return (this.isLeft = true)
    //       case 'right':
    //         return (this.isRight = true)
    //       default:
    //         console.error(`No recognized storyFormat's !!!`)
    //         break
    //     }
    //   }
    // },
    // whichStoryFormat() {
    //   const format = this.storyFormat
    //   if (format) {
    //     // Check format _type
    //     switch (format.storyFormat) {
    //       case 'textStory':
    //         return 'newsStory'
    //       case 'imageLink':
    //         return 'imgLink'
    //       case 'videoStory':
    //         return 'videoStory'
    //       default:
    //         console.error(`No recognized storyFormat's !!!`)
    //         break
    //     }
    //   }
    // },
  },
})
</script>

<style scoped></style>
