<template>
  <a v-if="linkTo" target="_blank" :href="linkTo">
    <img class="img-responsive center-block ads" :src="imgSrc" :alt="imgAlt" />
  </a>
  <img
    v-else
    class="img-responsive center-block ads"
    :src="imgSrc"
    :alt="imgAlt"
  />
</template>

<script>
export default {
  name: 'ImgLink',
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
    linkTo: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
