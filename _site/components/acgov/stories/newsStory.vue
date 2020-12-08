<template>
  <article class="text-black box-content my-4 pt-2">
    <h3 class="text-sm font-medium pb-2">{{ category }}</h3>
    <h4 class="text-2xl pb-2">{{ headline }}</h4>
    <p class="text mb-3">
      <slot />
    </p>
    <span v-if="videoUrl || videoAlt">
      <video-story :vid-alt-text="videoAlt" :youtube-embed="videoUrl" />
    </span>
  </article>
</template>

<script>
import videoStory from './videoStory.vue'
export default {
  name: 'NewsStory',
  components: { videoStory },
  props: {
    category: {
      type: String,
      default: '',
    },
    headline: {
      type: String,
      default: '',
    },
    videoUrl: {
      type: String,
      default: '',
    },
    videoAlt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
p > a[role='button'] {
  color: white;
  background-color: #5cb85c;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>
