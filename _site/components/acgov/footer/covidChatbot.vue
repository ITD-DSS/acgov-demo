<template>
  <div id="maincontainer" style="display: none">
    <div id="headingpanel">
      <div id="togglebuttonx" style="display: none">
        <button id="endwebchat" onclick="toggleWebChat()">
          <img
            src="/img/close-button.png"
            alt="Click this button to close the chat window about COCID-19."
          />
        </button>
      </div>
      <span class="name">CACHe</span><br />
      <span class="title">County of Alameda Community Helper</span>
    </div>
    <div id="webchat" role="main"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CovidChatbot',
})
</script>

<style></style>
