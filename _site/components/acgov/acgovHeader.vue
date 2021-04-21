<template>
  <header class="w-screen flex flex-col justify-start items-center">
    <name-banner />
    <search-box />
    <slot></slot>
    <!-- Google Translate the Pages --------------------------------->
    <!-- <google-translate /> -->
    <!--CHATBOT CODE-->

    <!-- <covid-chatbot /> -->

    <!--CHATBOT CODE END-->

    <!-- <translate-modal /> -->
  </header>
</template>

<script>
export default {
  name: 'AcgovHeader',
}
</script>

<style scoped></style>
