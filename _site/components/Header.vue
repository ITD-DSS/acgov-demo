<template>
    <header id="newacgovheader" aria-labelledby="newacgovheader" style="width: 100%;background-color: #dddddd;background-image:none;text-align: left;min-width: 970px;border-bottom: 1px solid #333;"><ul id="acgovheadermenu" style="display:none;"><li class="acquick"></li></ul>
	<!-- SHOW IF ON TEST SERVER -->
	<!--#include virtual="/ssi/server.htm"-->
	<div style="color:#fff;font-weight:bold;font-size:150%;top:5px;left:600px;position:absolute;visibility: visible;z-index: 100;padding: 0px 40px;background-color: red;">TEST SERVER</div>
	<div style="float: right;padding:0px;margin:0px;height:52px;width:411px;text-align:right;"><a href="#mainsite" style="font-size: 70%;padding: 10px;">Skip County Header</a><br>
		
		<!-- <div id="google_translate_element"></div>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> -->
	
	</div>
	
    <!-- <div style="float: right;padding:0px;margin:0px;height:52px;width:411px;text-align:right;"><a href="#mainsite" style="font-size: 70%;padding: 10px;">Skip County Header</a></div> -->
	<div><a href="<!--#include virtual="/ssi/internet_server.htm"-->index.htm"><img style="margin: 3px;" src="/img/new-acgov-logo-standard-header.png" alt="Alameda County, CA, acgov.org" width="180" height="44" /></a>
	<!--<span style="display:block;text-align: center;margin: 10px; color:red; padding: 10px 0px;font-size: 18px;background-color: #ffffcc;">Alameda County websites may experience intermittent down times this Sunday, July 26, from 6:00 a.m. to 12:00 p.m. due to maintenance.</span></div>-->
  	
	<div style="clear:both;padding:0px;margin:0px;"></div>
    <div id="mainsite" aria-labelledby="mainsite" style="clear: both;padding-top: 0px;">
</header>	
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>

</style>