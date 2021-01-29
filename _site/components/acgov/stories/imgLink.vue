<template>
  <a v-if="linkTo" target="_blank" :href="linkTo">
    <SanityImage :asset-id="imgSrc"> </SanityImage>
  </a>
  <SanityImage v-else :asset-id="imgSrc"> </SanityImage>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
})
</script>

<style></style>
