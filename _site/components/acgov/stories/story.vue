<template>
  <div :class="storyGridClass">
    <!-- <div class="flex flex-col"> -->
    <newsStory
      v-if="storyFormat._type === 'textStory'"
      :key="storyFormat._key"
      :category="storyCategory"
      :headline="storyFormat.headline"
    >
      <SanityContent :blocks="storyFormat.storyBody" />
    </newsStory>
    <img-link
      v-else-if="storyFormat._type === 'imageLink'"
      :key="storyFormat._key"
      :link-to="storyFormat.linkTo"
      :img-src="storyFormat.linkImage.asset._ref"
    />
    <video-story
      v-else-if="storyFormat._type === 'videoStory'"
      :key="storyFormat._key"
      :youtube-embed="storyFormat.youtubeUrl"
    />
    <!-- <slot /> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    storyFormat: {
      type: Object,
      default: () => {},
    },
    storyLayout: {
      type: String,
      default: '',
    },
    storyCategory: {
      type: String,
      default: '',
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
