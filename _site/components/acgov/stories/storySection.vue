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
  <section
    class="grid grid-cols-2 w-4/5 bg-white bg-opacity-90 mt-4 mb-8 mx-auto p-5"
  >
    <header class="sr-only">
      <h2>Story Section Name</h2>
    </header>
    <!-- <slot /> -->
    <div class="col-span-2"><slot name="full" /></div>
    <div class="col-start-1 col-end-2"><slot name="left" /></div>
    <div class="col-start-2 col-end-3"><slot name="right" /></div>
  </section>
</template>

<script>
export default {
  name: 'StorySection',
}
</script>

<style></style>
