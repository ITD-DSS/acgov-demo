<template>
  <div class="flex flex-col">
    <slot v-bind="storyData" />
  </div>
</template>

<script>
export default {
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
    storyGridClass() {
      return {
        'col-span-full': this.isFull,
        'col-start-1 col-end-2': this.isLeft,
        'col-start-2 col-end-3': this.isRight,
      }
    },
  },
  mounted() {
    this.isLayout()
  },
  methods: {
    isLayout() {
      const layout = this.storyLayout
      if (layout) {
        // Check format _type
        switch (layout) {
          case 'full':
            this.isFull = true
            break
          case 'left':
            this.isLeft = true
            break
          case 'right':
            this.isRight = true
            break
          default:
            console.error(`No recognized storyFormat's !!!`)
            break
        }
      }
    },
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
}
</script>

<style scoped></style>
