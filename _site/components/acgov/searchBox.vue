<template>
  <div class="container searchbox">
    <!--<div class="container urgent">
    <div class="row">
      <p><span class="material-icons md-48 md-vertical-middle">warning</span>Alameda County websites may experience intermittent down times this Sunday, July 26, from 6:00 a.m. to 12:00 p.m. due to maintenance.</p>
    </div>
</div>-->
    <div class="row">
      <form
        id="search-form"
        style="margin: auto; width: 90%"
        method="get"
        action="https://acsearch.acgov.org/s/search.html?"
        target="_parent"
        type="external"
      >
        <div class="input-group">
          <label
            for="funnelbackinput"
            style="visibility: hidden; position: absolute"
            class="sr-only"
            >Search</label
          >

          <input
            id="funnelbackinput"
            type="search"
            name="query"
            class="form-control search-input"
            placeholder="What can we help you find today?"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-addon">
            <button
              type="submit"
              class="btn search-button"
              name="btnG"
              value="Search"
            >
              <span class="material-icons md-36 md-dark search">&#xE8B6;</span>
            </button>
          </span>
        </div>
        <input type="hidden" name="collection" value="acgov" />
        <input type="hidden" name="profile" value="acgov" />
        <input type="hidden" name="form" value="acgov" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
}
</script>

<style></style>
