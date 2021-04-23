<template>
  <!-- <story-format-selector v-if="storyData" :component-data="storyData.format" /> -->
  <!-- <div :class="storyData.layout"> -->
  <div :class="storyData.layout">
    <article
      v-if="
        getComponentType === 'textStory' || getComponentType === 'videoStory'
      "
      class="text-black box-content my-4 pt-2"
    >
      <!-- <h3 class="text-sm font-medium pb-2"><slot name="category" /></h3> -->
      <h3 class="text-sm font-medium pb-2">{{ storyData.tag }}</h3>
      <h4 v-if="getFormatHeadline !== ''" class="text-2xl pb-2">
        {{ getFormatHeadline }}
      </h4>
      <p class="text mb-3">
        <SanityContent :blocks="format.body" />
      </p>
      <slot name="video" />
      <span v-if="format.videoUrl || format.videoAlt">
        <video-story
          :vid-alt-text="format.videoAlt"
          :youtube-embed="format.videoUrl"
        />
      </span>
    </article>
    <ImgLink
      v-if="getComponentType === 'imageLink'"
      :img-src="format.imgSrc"
      :img-alt="format.imgAlt ? format.imgAlt : 'No Alt Tag!'"
      :link-to="format.linkTo ? format.linkTo : '#'"
    />
    <!-- <news-story
      v-if="getFormatType() === 'textStory'"
      :key="storyData.format._key"
      :category="storyData.tag"
      :headline="storyData.format.headline"
      :video-url="storyData.format.url"
      :video-alt="storyData.format.alt"
    >
      <SanityContent :blocks="storyData.format.body" />
    </news-story> -->
    <!-- <news-story
      v-else-if="getFormatType() === 'videoStory'"
      :key="storyData.format._key"
      :headline="storyData.format.headline"
      :video-url="storyData.format.url"
      :video-alt="storyData.format.alt"
    >
      <SanityContent :blocks="storyData.format.body" />
    </news-story> -->
    <!-- <img-link
      v-else-if="getFormatType() === 'imageLink'"
      :key="storyData.format._key"
      :link-to="storyData.format.linkTo"
      :img-src="storyData.format.imgSrc"
      :img-alt="storyData.format.alt"
    /> -->
    <!-- <span v-else class="hidden"></span> -->
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
  },
  data() {
    return {
      format: this.storyData.format,
      // isFull: false,
      // isLeft: false,
      // isRight: false,
      // format: {},
    }
  },
  computed: {
    getFormatHeadline() {
      if (this.format !== undefined) {
        return this.format.headline === undefined ? '' : this.format.headline
      }
      return ''
    },
    getComponentType() {
      if (this.format !== undefined) {
        return this.format.componentType
      }
      return undefined
    },
    // storyGridClass() {
    //   return {
    //     'col-span-full': this.isFull,
    //     'col-start-1 col-end-2': this.isLeft,
    //     'col-start-2 col-end-3': this.isRight,
    //   }
    // },
  },
  methods: {},
}
</script>

<style scoped>
.full {
  grid-column-start: 1;
  grid-column-end: 3;
}
.left {
  grid-column-start: 1;
  grid-column-end: 2;
  align-self: center;
}
.right {
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
