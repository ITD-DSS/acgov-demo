<template>
  <div>
    <global-header />
    <div id="bodysection">
      <!--#include virtual="/ece/banner.htm"-->
      <ece-banner />
      <div style="clear: both"></div>

      <div id="main">
        <div id="sidebar">
          <!--#include virtual="/ece/sidebar.htm"-->
          <ece-sidebar />
        </div>
        <!-- RIGHT COLUMN -->
        <ece-sidebar-right />

        <Nuxt />
      </div>
    </div>
    <global-footer />
  </div>
</template>
<script>
export default {}
</script>

<style></style>
