<template>
  <div class="w-full block">
    <!-- https://www.youtube.com/embed/rknwVVTtbeQ?rel=0 -->
    <div class="relative w-full">
      <iframe
        :src="youtubeEmbed"
        class="absolute"
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
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
