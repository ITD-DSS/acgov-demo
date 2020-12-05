<template>
  <div :class="componentData.layout">
    <news-story
      v-if="getStoryFormat === 'textStory'"
      :key="format._key"
      :category="componentData.tag"
      :headline="format.headline"
    >
      <SanityContent :blocks="format.body" />
    </news-story>
    <img-link
      v-else-if="getStoryFormat === 'imageLink'"
      :key="format._key"
      :link-to="format.linkTo"
      :img-src="format.imgSrc"
      :img-alt="format.alt"
    />
    <video-story
      v-else-if="getStoryFormat === 'videoStory'"
      :key="format._key"
      :youtube-embed="format.url"
      :vid-alt-text="format.alt"
    />
    <span v-else class="invisible"></span>
  </div>
</template>

<script>
// const storyPropValidator = (propValue) => {
//   const keys = Object.keys(propValue)

//   const hasDefaults = ['_key', '_type'].includes(...keys)
//   const isNews = ['headline', 'storyBody'].includes(...keys)
//   debugger
//   const isImage = ['linkImage', 'linkTo'].includes(...keys)
//   const isVideo = ['altText', 'youtubeUrl'].includes(...keys)

//   const oneValid = [isNews, isImage, isVideo].find((format) => format === true)

//   if (!hasDefaults) {
//     return false
//   }

//   if (oneValid) {
//     return true
//   }

//   return false
// }

export default {
  name: 'StoryFormatSelector',
  props: {
    // categoryTag: {
    //   type: String,
    //   default: '',
    // },
    componentData: {
      type: Object,
      default: () => {},
      //   validator: (prop) => storyPropValidator(prop),
    },
    // storyLayout: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      format: {},
    }
  },
  computed: {
    getStoryFormat() {
      return this.componentData.format._type
    },
  },
  created() {
    this.getFormat()
  },
  methods: {
    getFormat() {
      if (this.componentData.format) {
        return (this.format = this.componentData.format)
      }
    },

    // parseFormats() {
    //   const formatType = this.getStoryFormat
    //   switch (formatType) {
    //     case 'textStory':
    //       this.newsStory.category = this.formatData.storyTag
    //       this.newsStory.keyId = this.formatData._key
    //       this.newsStory.headline = this.formatData.headline
    //       this.newsStory.body = this.formatData.storyBody
    //       break
    //     // case 'imageLink':
    //     //   if (this.formatData.linkTo !== undefined) {
    //     //     this.imageLink.destLink = this.formatData.linkTo
    //     //     this.imageLink.alt = this.formatData.linkImage.altText
    //     //     this.imageLink.src = this.formatData.linkImage.asset._ref
    //     //     this.imageLink.keyId = this.formatData._key
    //     //   }
    //     //   this.imageLink.alt = this.formatData.linkImage.altText
    //     //   this.imageLink.src = this.formatData.linkImage.asset._ref
    //     //   this.imageLink.keyId = this.formatData._key
    //     //   break
    //     case 'videoStory':
    //       this.video.url = this.formatData.youtubeUrl
    //       this.video.alt = this.formatData.altText
    //       this.video.keyId = this.formatData._key
    //       break
    //     default:
    //       break
    //   }
    // },
  },
}
</script>

<style>
.full {
  /* grid-column: span 1 / span 3; */
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: 1.75rem;
}
.left {
  /* grid-column: span 1 / span 2; */
  /* grid-column-end: 2; */
  grid-column-start: 1;
  grid-column-end: 2;
}
.right {
  /* grid-column: span 2 / span 3; */
  /* grid-column-end: 2; */
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
