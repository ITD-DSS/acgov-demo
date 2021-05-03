<template>
  <a v-if="linkTo" target="_blank" :href="linkTo">
    <!-- <SanityImage :asset-id=""></SanityImage> -->
    <img :src="$urlFor(imgSrc).url()" alt="" />
  </a>
  <!-- <SanityImage v-else :asset-id="imgSrc"> </SanityImage> -->
  <div v-else><img :src="$urlFor(imgSrc).url()" alt="" /></div>
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
    // imgAlt: {
    //   type: String,
    //   default: '',
    // },
    linkTo: {
      type: String,
      default: '',
    },
  },
})
</script>

<style></style>
