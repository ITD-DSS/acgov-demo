<template>
  <div
    class="visible-xs"
    style="padding: 5px 15px 0px 15px; text-align: center"
  >
    <a
      href="#"
      data-toggle="modal"
      data-target="#modal-trans"
      class="translate"
    >
      <i
        class="material-icons md-48"
        style="display: inline-block; padding-top: 5px"
        >&#xE927;</i
      >
      <span
        style="
          vertical-align: middle;
          display: inline-block;
          padding-bottom: 20px;
          font-size: 20px;
        "
      >
        Translate</span
      >
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TranslateModal',
})
</script>

<style scoped></style>
