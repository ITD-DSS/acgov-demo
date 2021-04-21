<template>
  <div class="fixed mx-auto bg-white h-20 w-screen shadow-banner z-10">
    <!-- <div v-once class="fixed bg-white w-full h-20 shadow-banner z-10"> -->
    <!-- <div class="container-fluid branding"> -->
    <div class="flex flex-row justify-around items-center pt-3">
      <!-- <div class="row container resp"> -->

      <!-- <div class="col-sm-6 col-xs-12 logo"> -->
      <div class="mr-8">
        <NuxtLink to="/"
          ><img class="w-logo" src="/img/brandingPROD.png"
        /></NuxtLink>
      </div>
      <!-- <img class="img-responsive acgov-logo" src="/img/brandingPROD.png" /> -->

      <div class="ml-5 text-banner">County of Alameda, CA</div>
      <!-- <div class="col-sm-6 col-xs-12 tagline">County of Alameda, CA</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NameBanner',
})
</script>

<style>
/*
-webkit-tap-highlight-color: rgba(0,0,0,0);
font-size: 14px;
line-height: 1.42857143;
color: #333;
font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
box-sizing: border-box;
background-color: #fff;
margin: 0px;
padding: 0px;
opacity: 1;
position: fixed;
top: 0px;
width: 100%;
z-index: 10;
box-shadow: #000 0px 2px 15px;
*/
</style>
