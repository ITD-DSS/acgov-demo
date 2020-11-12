<template>
  <!-- 
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  box-sizing: border-box;
  margin: 20px auto 40px auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0px; 
-->
  <section class="w-4/5 bg-white bg-opacity-90 mt-4 mb-8 mx-auto">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'StorySection',
}
</script>

<style></style>
