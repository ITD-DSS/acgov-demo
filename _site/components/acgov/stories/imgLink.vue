<template>
  <a v-if="linkTo" target="_blank" :href="linkTo">
    <SanityImage :asset-id="imgSrc">
      <!-- <template #default="{ src }"> -->
      <!-- <img class="w-full my-2" :src="src" :alt="imgAlt" /> -->
      <!-- <img :src="src" /> -->
      <!-- </template> -->
    </SanityImage>
  </a>
  <SanityImage v-else :asset-id="imgSrc">
    <!-- <template #default="{ src }"> -->
    <!-- <img class="w-full my-2" :src="src" :alt="imgAlt" /> -->
    <!-- <img :src="src" /> -->
    <!-- </template> -->
  </SanityImage>
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
