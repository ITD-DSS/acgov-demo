<template>
  <div
    class="hidden-xs"
    style="width: 100%; height: 0px; float: right; background-color: red"
  >
    <!--text-align:center;">-->
    <div style="top: 5px; position: relative">
      <a
        class="trans_button"
        href="#"
        data-toggle="modal"
        data-target="#modal-trans"
      >
        <i class="material-icons md-36 translate" style="color: #336699"
          >&#xE927;</i
        >
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TranslateButton',
})
</script>

<style scoped></style>
