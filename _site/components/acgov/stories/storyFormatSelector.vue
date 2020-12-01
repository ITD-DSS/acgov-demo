<template>
  <div>
    <news-story
      v-if="getStoryFormat === 'textStory'"
      :key="newsStory.keyId"
      :category="categoryTag"
      :headline="newsStory.headline"
    >
      <SanityContent :blocks="newsStory.body" />
    </news-story>
    <img-link
      v-else-if="getStoryFormat === 'imageLink'"
      :key="imgLink.keyId"
      :link-to="imgLink.destLink"
      :img-src="imgLink.src"
      :img-alt="imgLink.alt"
    />
    <video-story
      v-else-if="getStoryFormat === 'videoStory'"
      :key="video.keyId"
      :youtube-embed="video.url"
      :vid-alt-text="video.alt"
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
    categoryTag: {
      type: String,
      default: '',
    },
    formatData: {
      type: Object,
      default: () => {},
      //   validator: (prop) => storyPropValidator(prop),
    },
  },
  data() {
    return {
      newsStory: {
        category: '',
        headline: '',
        body: [],
        keyId: '',
      },
      imgLink: {
        destLink: '',
        alt: '',
        src: '',
        keyId: '',
      },
      video: {
        url: '',
        alt: '',
        keyId: '',
      },
    }
  },
  computed: {
    getStoryFormat() {
      return this.formatData._type
    },
  },
  mounted() {
    this.parseFormats()
  },
  methods: {
    parseFormats() {
      const formatType = this.getStoryFormat

      switch (formatType) {
        case 'textStory':
          this.newsStory.category = this.formatData.storyTag
          this.newsStory.keyId = this.formatData._key
          this.newsStory.headline = this.formatData.headline
          this.newsStory.body = this.formatData.storyBody
          break
        // case 'imageLink':
        //   if (this.formatData.linkTo !== undefined) {
        //     this.imageLink.destLink = this.formatData.linkTo
        //     this.imageLink.alt = this.formatData.linkImage.altText
        //     this.imageLink.src = this.formatData.linkImage.asset._ref
        //     this.imageLink.keyId = this.formatData._key
        //   }
        //   this.imageLink.alt = this.formatData.linkImage.altText
        //   this.imageLink.src = this.formatData.linkImage.asset._ref
        //   this.imageLink.keyId = this.formatData._key
        //   break
        case 'videoStory':
          this.video.url = this.formatData.youtubeUrl
          this.video.alt = this.formatData.altText
          this.video.keyId = this.formatData._key
          break

        default:
          break
      }
    },
  },
}
</script>

<style></style>
