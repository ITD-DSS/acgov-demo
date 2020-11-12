<template>
  <!-- 
  -webkit-tap-highlight-color: rgba(0,0,0,0);
font-size: 14px;
line-height: 1.42857143;
color: #333;
font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
box-sizing: border-box;
margin: 0 0 10px;
padding: 20px 0px 0px 0px; 
-->
  <article class="text-black">
    <!--
       -webkit-tap-highlight-color: rgba(0,0,0,0);
    line-height: 1.42857143;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    box-sizing: border-box;
    font-size: 1.3rem;
    color: #000;
    text-transform: uppercase; 
    -->
    <span class="">{{ category }}</span>
    <br />
    <!-- 
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      line-height: 1.42857143;
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      box-sizing: border-box;
      font-size: 2.5rem;
      color: #000; 
-->
    <span class="">{{ headline }}</span>
    <br />

    <!-- 
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      line-height: 1.42857143;
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      box-sizing: border-box;
      font-size: 1.5rem;
      color: #000; 
-->
    <span class="">
      <slot />
    </span>
  </article>
</template>

<script>
export default {
  name: 'NewsStory',
  props: {
    category: {
      type: String,
      default: '',
    },
    headline: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
