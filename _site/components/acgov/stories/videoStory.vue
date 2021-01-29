<template>
  <!-- https://www.youtube.com/embed/rknwVVTtbeQ?rel=0 -->
  <div class="relative pb-16/9">
    <iframe
      :src="youtubeEmbed"
      class="absolute w-full h-full"
      frameborder="0"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>
    <span class="sr-only">{{ vidAltText }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VideoStory',
  props: {
    youtubeEmbed: {
      type: String,
      default: '',
    },
    vidAltText: {
      type: String,
      default: '',
    },
  },
})
</script>

<style></style>
