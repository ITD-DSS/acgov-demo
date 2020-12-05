<template>
  <div :class="componentData.layout">
    <news-story
      v-if="getStoryFormat === 'textStory'"
      :key="format._key"
      :category="componentData.tag"
      :headline="format.headline"
      :video-url="format.url"
      :video-alt="format.alt"
    >
      <SanityContent :blocks="format.body" />
    </news-story>
    <news-story
      v-else-if="getStoryFormat === 'videoStory'"
      :key="format._key"
      :headline="format.headline"
      :video-url="format.url"
      :video-alt="format.alt"
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
    <span v-else class="hidden"></span>
  </div>
</template>

<script>
export default {
  name: 'StoryFormatSelector',
  props: {
    componentData: {
      type: Object,
      default: () => {},
    },
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
  },
}
</script>

<style>
.full {
  grid-column-start: 1;
  grid-column-end: 3;
}
.left {
  grid-column-start: 1;
  grid-column-end: 2;
}
.right {
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
