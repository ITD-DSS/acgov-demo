<template>
  <!-- id="newacgovheader" -->
  <header class="acgov-header" aria-labelledby="newacgovheader">
    <div>
      <a href=""
        ><img
          style="margin: 3px"
          src="/images/new-acgov-logo-standard-header.png"
          alt="Alameda County, CA, acgov.org"
          width="180"
          height="44"
      /></a>
    </div>
    <!-- SHOW IF ON TEST SERVER -->

    <div class="env-tag">TEST SERVER</div>

    <div style="grid-area: right; justify-self: center">
      <a href="#main">Skip County Header</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
}
</script>

<style lang="scss">
header.acgov-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'left center right';
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  width: 100%;
  background-color: #dddddd;
  background-image: none;
  text-align: left;
  min-width: 970px;
  border-bottom: 1px solid #333;
}
div.env-tag {
  color: #fff;
  font-weight: bold;
  font-size: 150%;
  // top: 5px;
  // left: 600px;
  // position: absolute;
  visibility: visible;
  z-index: 100;
  padding: 0px 40px;
  background-color: red;
  // text-align: center;
  grid-area: center;
  justify-self: center;
}
/* ************************************************************************
HEADER
*************************************************************************** */
body {
  margin: 0px;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
}
img {
  border: 0px;
}
/* HEADER *************************************************************/
/*CSS RESET Limited to header elements as not to reformat apps that include the header ********************************************/
#newacgovheader div,
#newacgovheader span,
#newacgovheader p,
#newacgovheader img,
#newacgovheader ol,
#newacgovheader ul,
#newacgovheader li,
#newacgovheader form,
#newacgovheader label,
#newacgovheader input,
#newacgovheader legend {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  font-family: Arial, Helvetica, sans-serif;
}
/*END CSS RESET ********************************************/
#newacgovheader {
  width: 100%;
  // background-color: #8fadca;
  background-image: url(@static/images/banner/deptheaderbg.jpg);
  text-align: left;
  min-width: 970px;
  /*position: relative;*/
  border-bottom: 1px solid #333;
}
#skipheader {
  float: right;
  padding: 0px;
  margin: 0px;
  height: 52px;
  width: 411px;
  background-image: url(@static/images/banner/deptheaderbgright.jpg);
  background-repeat: no-repeat;
  background-position: top right;
  text-align: right;
}
#skipheader a {
  color: #fff;
  font-size: 70%;
  padding: 10px;
}
#server {
  color: #fff;
  font-weight: bold;
  font-size: 100%;
  top: 5px;
  left: 800px;
  position: absolute;
  visibility: visible;
}
#newacgovbanner {
  height: 52px;
  width: 410px;
  background-image: url(@static/images/banner/deptheaderbgleft.jpg);
  background-repeat: no-repeat;
  background-position: top left;
}
#newacgovheader #newacgovheaderlogo {
  margin: 3px;
}

#newacgovheader #googlemenu {
  position: absolute;
  padding: 0px;
  margin: 0px;
  z-index: 5;
  height: 20px;
  width: 110px;
  top: 5px;
  left: 380px;
}
#newacgovheader #googlemenu #searchbutton {
  position: absolute;
  z-index: 70;
  top: 5px;
  left: 0px;
}
#newacgovheader #googlemenu #searchbutton2 {
  position: absolute;
  z-index: 100;
  top: 5px;
  left: -9999px;
}
#newacgovheader #googlemenu #acgovsearchbox {
  z-index: 90;
  background-color: #e5e5e5;
  /*background-image: url(@static/images/banner/navbarbg.jpg);
	background-repeat:repeat-x;
	background-position:bottom left;*/
  height: 5.5em;
  width: 454px;
  position: absolute;
  top: 34px;
  left: -9999px;
  border: 1px solid #c4c4c4;
  -moz-border-radius: 0px 10px 10px 10px;
  -webkit-border-radius: 0px 10px 10px 10px;
  border-radius: 0px 10px 10px 10px; /* future proofing */
  -moz-box-shadow: 5px 5px 10px #333333;
  -webkit-box-shadow: 5px 5px 10px #333333;
  box-shadow: 5px 5px 10px #333333; /* future proofing */
  padding: 10px 10px 10px 10px;
}
#newacgovheader #googlemenu #acgovsearchbox p {
  color: #666;
  padding: 0px 0px 10px 0px;
  font-size: 90%;
  font-weight: bold;
}
#newacgovheader #googlemenu:hover #acgovsearchbox {
  left: 0px;
}

#newacgovheader #googlemenu:hover #searchbutton2 {
  left: 0px;
}
#newacgovheader #acgovsearchbox #googlebox {
  width: 454px;
  height: 35px;
  background-image: url(@static/images/banner/searchbg.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: transparent;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px; /* future proofing */
  border: solid 1px #c3c3c3;
}

#newacgovheader #acgovsearchbox #googlebox input#googleinput {
  color: #999;
  font-size: 18px;
  height: 26px;
  width: 400px;
  border: 0;
  margin: 4px 0px 0px 10px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  float: left;
}
#newacgovheader #acgovsearchbox #googlebox input#googlesubmit {
  border: 0;
  color: #ffffff;
  float: right;
  font-size: 1px;
  height: 35px;
  margin: 0;
  width: 40px;
  text-indent: -9999px;
  background-image: url(@static/images/banner/searchbg.png);
  background-position: bottom right;
  background-color: transparent;
}
#newacgovheader #acgovsearchbox #googlebox input#googlesubmit:hover {
  background-position: top right;
}
#newacgovheader #acgovsearchbox #popularsearches {
  border: 0;
  float: right;
  margin: 0;
  width: 400px;
}
#newacgovheader #acgovsearchbox #popularsearches p {
  color: #666;
  font-size: 70%;
  padding-top: 3px;
  text-align: right;
}
#newacgovheader #acgovsearchbox #popularsearches p .label {
  color: #000;
  font-size: 100%;
}
/* QUICK MENU **************************************************************************** */
#newacgovheader #newacgovquickmenu {
  position: absolute;
  padding: 0px;
  margin: 0px;
  z-index: 5;
  height: 24px;
  width: 110px;
  top: 5px;
  left: 250px;
}
#newacgovheader #newacgovquickmenu #quickbutton {
  position: absolute;
  z-index: 70;
  top: 5px;
  left: 0px;
}
#newacgovheader #newacgovquickmenu #quickbutton2 {
  position: absolute;
  z-index: 100;
  top: 5px;
  left: -9999px;
}

#newacgovheader #newacgovquickmenu #newacgovquicklinks {
  z-index: 90;
  background-color: #e5e5e5;
  /*background-image: url(@static/images/banner/navbarbg.jpg);
	background-repeat:repeat-x;
	background-position:bottom left;*/
  height: 17em;
  width: 25em;
  position: absolute;
  top: 34px;
  left: -9999px;
  border: 1px solid #c4c4c4;
  -moz-border-radius: 0px 10px 10px 10px;
  -webkit-border-radius: 0px 10px 10px 10px;
  border-radius: 0px 10px 10px 10px; /* future proofing */
  padding: 10px;
  -moz-box-shadow: 5px 5px 10px #333333;
  -webkit-box-shadow: 5px 5px 10px #333333;
  box-shadow: 5px 5px 10px #333333; /* future proofing */
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks #column1 {
  width: 12em;
  float: left;
  border-right: 1px solid #999;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks #column2 {
  width: 12.5em;
  float: right;
  text-align: center;
}
#newacgovheader #newacgovquickmenu:hover #newacgovquicklinks {
  left: 0px;
}
#newacgovheader #newacgovquickmenu:hover #quickbutton2 {
  left: 0px;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.sections {
  margin: 2px 15px 0px 0px;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.sections li {
  list-style-type: none;
  color: #999;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.sections li a {
  text-transform: uppercase;
  font-size: 70%;
  text-decoration: none;
  padding: 5px;
  border-top: 1px dotted #999;
  display: block;
  color: #333;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.sections li.last a {
  border-bottom: 1px dotted #999;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.sections li a:hover {
  background-color: #ccc;
  padding-left: 6px;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.more {
  margin: 10px 5px 10px 20px;
}
#newacgovheader #newacgovquickmenu #newacgovquicklinks ul.more li {
  font-size: 70%;
  color: #999;
}
/* #newacgovheader #newacgovquickmenu #newacgovquicklinks ul.more li a {
} */
#newacgovheader #newacgovquickmenu #column2 h1 {
  font-size: 90%;
  font-style: italic;
  color: #666;
  margin: 0px 5px 10px 5px;
  letter-spacing: 1px;
  font-weight: lighter;
  text-align: left;
}
#newacgovheader #newacgovquickmenu #column2 img.ad {
  border: 1px solid #666;
  padding: 1px;
}
#newacgovheader #newacgovquickmenu #column2 ul.featuredlinks {
  margin: 10px 5px 10px 20px;
  text-align: left;
}
#newacgovheader #newacgovquickmenu #column2 ul.featuredlinks li {
  font-size: 70%;
  margin-bottom: 5px;
  color: #999;
}
/* #newacgovheader #newacgovquickmenu #column2 ul.featuredlinks li a {
} */
/* FOOTER *****************************************************/
#newacgovfooter {
  width: 100%;
  text-align: center;
  float: left;
  font-size: 70%;
  font-weight: normal;
  font-style: normal;
  padding: 0px;
  margin: 10px;
}
#newacgovfooter ul {
  margin: 0px;
  padding: 5px;
}
#newacgovfooter ul li {
  display: inline;
  list-style: none;
  border-right: 1px #000 solid;
  margin: 0px;
  padding: 0px;
}
#newacgovfooter a {
  padding: 0px;
  margin: 0px;
}
#newacgovfooter a:hover {
  text-decoration: underline;
}
#newacgovfooter p {
  padding: 0px;
  margin: 0px;
  display: inline;
}
#newacgovfooter ul li.last {
  border-right: 0;
}
#mainsite {
  clear: both;
  padding-top: 0px;
}
/* ************************************************************************
END HEADER
*************************************************************************** */
a {
  color: #0000ee;
}
</style>
