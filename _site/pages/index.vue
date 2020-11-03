<template>
  <div>ACGOV</div>
</template>

<script>
// TODO: Google Tag Manager Module

//          <!-- Google Tag Manager -->
// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MW6VWCK');
// <!-- End Google Tag Manager -->
export default {
  methods: {
    submitsearch() {
      document.getElementById('search-form').submit()
    },
    goback() {
      window.history.back()
    },
  },
  head() {
    return {
      // <title>ACGOV.org | Alameda County Government</title>
      title: 'ACGOV.org | Alameda County Government',
      meta: [
        // {
        //   name: 'google-site-verification',
        //   content: 'IbsI4I84KNfBVhGugciXGiu2v2wBwKB_Kju-x9j6uYI',
        // },
        {
          hid: 'description',
          name: 'Description',
          content:
            "Homepage for Alameda County's government website. Portal for all government information.",
        },
        {
          hid: 'keywords',
          name: 'Keywords',
          content:
            'Alameda County, government, local government, Bay Area, California, county government, county services, news',
        },
        {
          hid: 'location',
          name: 'Location',
          content: 'Alameda County, Bay Area, California, United States',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'acgov-css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'acgov-css/ie10-viewport-bug-workaround.css',
        },
        {
          rel: 'stylesheet',
          href: 'acgov-css/custom.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    }
  },
}
/* NEW TEMP SEARCH BOX */
// (function() {
//   var cx = '002986915478428468373:0muhvevs3v0';
//   var gcse = document.createElement('script');
//   gcse.type = 'text/javascript';
//   gcse.async = true;
//   gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//   var s = document.getElementsByTagName('script')[0];
//   s.parentNode.insertBefore(gcse, s);
// })();
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* NEW TEMP SEARCH BOX */
td.gsc-search-button {
  padding-right: 5px;
}
td.gsib_a {
  padding: 10px;
}
.gsc-search-button-v2 {
  padding: 11px 25px !important;
  margin: 15px;
  border-radius: 3px !important;
}
.gsc-search-button-v2 svg {
  width: 18px;
  height: 18px;
}
/*Media Querry*/
@media (max-width: 767px) {
  td.gsc-input {
    width: 20%;
  }
}

.content {
  background: transparent;
  padding: 0px;
}

/* ICONS */

.row.icons .col-sm-3 {
  margin: 20px 0px;
}

.icons {
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 0);
  /*border-radius: 10px;*/
  padding: 20px 0px;
  min-height: 230px;
}

.material-icons.settings,
.material-icons.business_center,
.material-icons.forum,
.material-icons.thumbs_up_down {
  text-shadow: #000 2px 2px;
  transition-property: width, height, transform, background, font-size, opacity;
  transition-duration: 0.25s, 0.25s, 0.25s, 0.25s, 0.25s, 0.25s;
}

.icon-title {
  font-size: 30px;
  color: #fff;
  text-shadow: #000 2px 2px;
}

.iconlink:hover {
  text-decoration: none;
}

.stories,
.gov {
  margin: 20px auto 40px auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0px;
}

/* NEWS STORIES */

.stories .ads {
  margin: 15px auto;
}

.news-stories {
  padding: 20px 0px 0px 0px;
}

.category {
  font-size: 1.3rem;
  color: #000;
  text-transform: uppercase;
}

.headline {
  font-size: 2.5rem;
  color: #000;
}

.story {
  font-size: 1.5rem;
  color: #000;
}

div.col-sm-6.secondary-stories ul {
  margin-top: 20px;
}

div.col-sm-6.secondary-stories ul li {
  margin-bottom: 10px;
}

.board-photo {
  margin: 15px auto;
}

.gov-links {
  margin-top: 20px;
}

.gov-links ul {
  list-style-type: none;
  padding-left: 0px;
}

.gov-links ul li {
  padding-bottom: 20px;
}

.govd-news {
  float: right;
  padding: 10px 0px 10px 10px;
  max-width: 125px;
}

@media (min-width: 769px) {
  .material-icons.settings:hover,
  .material-icons.business_center:hover,
  .material-icons.forum:hover,
  .material-icons.thumbs_up_down:hover {
    font-size: 100px;
  }
}

@media (max-width: 767px) {
  .icons {
    background-color: #336699;
    padding: 0px;
  }
  .icon-button {
    border: 1px solid #fff;
  }
  .row.icons .col-sm-3 {
    padding: 20px 0px;
    margin: 0px;
  }
  .stories,
  .gov {
    margin: 0px auto 0px auto;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0px;
  }
  .stories {
    padding-bottom: 20px;
  }
  .primary-stories,
  .secondary-stories {
    padding-left: 0px;
    padding-right: 0px;
  }
  .news-stories {
    padding: 20px 10px 0px 10px;
  }
  .govd-news {
    float: none;
    padding: 10px;
    max-width: none;
    width: 100%;
  }
  .content {
    margin-bottom: 0px;
  }
  .gov {
    background-color: #0080ff;
    padding: 0px;
  }
  .gov a {
    color: #fff;
    text-transform: uppercase;
  }
  .board-photo,
  .board-photo img {
    padding: 0px;
    margin: 0px;
  }
  div.col-sm-6.gov-links {
    margin: 0px;
    padding: 0px;
  }
  div.col-sm-6.gov-links ul {
    margin: 0px;
    padding: 0px;
    background: #337ab7;
  }
  div.col-sm-6.gov-links ul li {
    list-style-type: none;
    border-bottom: 1px solid #fff;
    text-align: center;
    margin: 0px;
    padding: 20px 10px;
  }
  .icon-title {
    font-size: 24px;
  }
  /*.material-icons.settings, .icon-services .icon-title {
color: #EA7500;
text-shadow:none;
}
.material-icons.business_center, .icon-careers .icon-title {
color: #960;
text-shadow:none;
}
.material-icons.forum, .icon-connect .icon-title {
color: #69C;
text-shadow:none;
}
.material-icons.thumbs_up_down, .icon-participate .icon-title {
color: #690;
text-shadow:none;
}*/
}

.translate {
  color: white;
}

.trans_button {
  display: inline-block;
  padding-top: 3px;
  padding-right: 10px;
  float: right;
  bottom: -20px;
}

/* No greater than 900px, no less than 400px */

@media (max-width: 850px) and (min-width: 768px) {
  .trans_button {
    display: inline-block;
    padding-top: 25px;
    padding-right: 15px;
    float: right;
    bottom: -20px;
  }
}
</style>
