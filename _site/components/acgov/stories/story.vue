<template>
  <div :id="storyData.slug" :class="storyData.layout">
    <article
      v-if="
        getComponentType === 'textStory' || getComponentType === 'videoStory'
      "
      class="text-black box-content my-4 pt-2"
    >
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
