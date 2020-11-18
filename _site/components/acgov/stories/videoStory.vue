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
  </div>
</template>

<script>
export default {
  name: 'VideoStory',
  props: {
    youtubeEmbed: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
