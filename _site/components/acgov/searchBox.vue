<template>
  <section class="w-full mt-32 flex flex-row justify-center">
    <!--<div class="container urgent">
    <div class="row">
      <p><span class="material-icons md-48 md-vertical-middle">warning</span>Alameda County websites may experience intermittent down times this Sunday, July 26, from 6:00 a.m. to 12:00 p.m. due to maintenance.</p>
    </div>
</div>-->
    <!-- 
line-height: 1.42857143;
color: #333;
font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
box-sizing: border-box;
margin: auto;
width: 90%; -->
    <form
      id="search-form"
      class="border-box w-3/5"
      method="get"
      action="https://acsearch.acgov.org/s/search.html?"
      target="_parent"
      type="external"
    >
      <!-- <form
        id="search-form"
        style="margin: auto; width: 90%"
        method="get"
        action="https://acsearch.acgov.org/s/search.html?"
        target="_parent"
        type="external"
      > -->
      <div class="w-full relative table border-separate">
        <!-- <div class="input-group"> -->
        <label for="funnelbackinput" class="sr-only">Search</label>
        <!-- <label
            for="funnelbackinput"
            style="visibility: hidden; position: absolute"
            class="sr-only"
            >Search</label
          > -->

        <input
          id="funnelbackinput"
          type="search"
          name="query"
          class="text-2xl w-full h-20 text-gray-500"
          placeholder="What can we help you find today?"
          aria-describedby="basic-addon2"
        />
        <!-- <input
            id="funnelbackinput"
            type="search"
            name="query"
            class="form-control search-input"
            placeholder="What can we help you find today?"
            aria-describedby="basic-addon2"
          /> -->
        <!-- 
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        border-collapse: separate;
        box-sizing: border-box;
        display: table-cell;
        width: 1%;
        white-space: nowrap;
        vertical-align: middle;
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: #555;
        text-align: center;
        background-color: #eee;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
   -->
        <span
          class="border-separate box-border table-cell whitespace-no-wrap align-middle leading-4 text-gray-500 text-center bg-gray-300 rounded"
        >
          <!-- <span class="input-group-addon"> -->
          <!-- 
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          border-collapse: separate;
          box-sizing: border-box;
          margin: 0;
          font: inherit;
          color: inherit;
          overflow: visible;
          text-transform: none;
          font-family: inherit;
          display: inline-block;
          padding: 6px 12px;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.42857143;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          touch-action: manipulation;
          cursor: pointer;
          user-select: none;
          background-image: none;
          border: 1px solid transparent;
          border-radius: 4px;
          height: 73px; 
          -->

          <button
            type="submit"
            class="inline-block border-separate border-box text-base font-normal leading-5 text-center whitespace-no-wrap align-middle cursor-pointer select-none border border-transparent"
            name="btnG"
            value="Search"
          >
            <!-- <button
            type="submit"
            class="btn search-button"
            name="btnG"
            value="Search"
          > -->
            <span class="material-icons md-36 md-dark search">&#xE8B6;</span>
          </button>
        </span>
      </div>
      <input type="hidden" name="collection" value="acgov" />
      <input type="hidden" name="profile" value="acgov" />
      <input type="hidden" name="form" value="acgov" />
    </form>
  </section>
</template>

<script>
export default {
  name: 'SearchBox',
}
</script>

<style></style>
