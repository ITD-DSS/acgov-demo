<template>
  <a v-if="linkTo" target="_blank" :href="linkTo">
    <img class="w-full my-2" :src="imgSrc" :alt="imgAlt" />
  </a>
  <img v-else class="w-full my-2" :src="imgSrc" :alt="imgAlt" />
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
