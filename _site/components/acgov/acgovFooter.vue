<template>
  <!-- 
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  box-sizing: border-box;
  background-color: rgba(255,255,255,1);
  margin: 0px;
  padding: 0px;
  width: 100%;
  z-index: 10;
  box-shadow: #000 0px 2px 15px;
   -->
  <footer class="w-full bg-white z-10 shadow-banner">
    <div class="py-6 flex flex-col items-center">
      <div>
        <a href="/government/contactus.htm">Contact Us</a> |
        <a href="/government/accessibility.htm">Accessibility</a>
        | <a href="/government/legal.htm">Legal / Disclaimers</a> |
        <a href="/government/legal.htm">Privacy Statement</a> |
        <a href="/government/guidelines.htm">Website Guidelines</a>
        | <a href="/government/sb272.htm"> SB 272 </a> |
        <a href="/sitemap.htm">Site Map</a>
      </div>

      <div class="flex flex-row justify-evenly py-4">
        <!-- {
          id: 0,
          alt: 'Facebook - Alameda County',
          linkTo: 'https://www.facebook.com/AlamedaCounty',
          imgSrc: '/img/facebook200x200.png',
        }, -->
        <a
          v-for="link in socialLinks"
          :key="link.id"
          :href="link.linkTo"
          target="_blank"
          class="px-4 inline-block"
          ><img class="w-12" :src="link.imgSrc" :alt="link.alt"
        /></a>
        <!-- <a href="https://www.facebook.com/AlamedaCounty" target="_blank"
          ><img
            class="social-icon"
            src="/img/facebook200x200.png"
            alt="facbook icon"
        /></a>

        <a href="https://twitter.com/AlamedaCounty" target="_blank"
          ><img
            class="social-icon"
            src="/img/twitter200x200.png"
            alt="Twitter icon"
        /></a>

        <a href="https://www.youtube.com/user/AlamedaCountyCA" target="_blank"
          ><img
            class="social-icon"
            src="/img/youtube200x200.png"
            alt="YouTube icon"
        /></a>

        <a href="https://www.flickr.com/photos/alamedacounty" target="_blank"
          ><img
            class="social-icon"
            src="/img/flickr200x200.png"
            alt="Flickr icon"
        /></a>

        <a href="/government/connected/rss.htm" target="_blank"
          ><img class="social-icon" src="/img/rss200x200.png" alt="RSS icon"
        /></a>

        <a
          href="https://public.govdelivery.com/accounts/CAALAME/subscriber/new" target="_blank"
          ><img
            class="social-icon"
            src="/img/govdelivery200x200.png"
            alt="GovDelivery icon"
        /></a> -->
      </div>

      <div>
        <a href="http://www.adobe.com/go/getreader" target="_blank">
          <img
            alt="Get Adobe Reader"
            style="padding: 10px"
            src="/img/get-reader.png"
        /></a>
      </div>

      <div>
        <span class="material-icons float-left mr-2">&#xE90C;</span>
        <p class="whitespace-no-wrap">{{ currentYear }} Alameda County</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AcgovFooter',
  data() {
    return {
      currentDate: new Date(),
      socialLinks: [
        {
          id: 0,
          alt: 'Facebook - Alameda County',
          linkTo: 'https://www.facebook.com/AlamedaCounty',
          imgSrc: '/img/facebook200x200.png',
        },
        {
          id: 0,
          alt: 'Twitter - Alameda County',
          linkTo: 'https://twitter.com/AlamedaCounty',
          imgSrc: '/img/twitter200x200.png',
        },
        {
          id: 0,
          alt: 'Youtube - Alameda County',
          linkTo: 'https://www.youtube.com/user/AlamedaCountyCA',
          imgSrc: '/img/youtube200x200.png',
        },
        {
          id: 0,
          alt: 'Flickr - Alameda County',
          linkTo: 'https://www.flickr.com/photos/alamedacounty',
          imgSrc: '/img/flickr200x200.png',
        },
        {
          id: 0,
          alt: 'RSS Feeds - Alameda County',
          linkTo: '/government/connected/rss.htm',
          imgSrc: '/img/rss200x200.png',
        },
        {
          id: 0,
          alt: 'GovDelivery Subscriptions - Alameda County',
          linkTo:
            'https://public.govdelivery.com/accounts/CAALAME/subscriber/new',
          imgSrc: '/img/govdelivery200x200.png',
        },
      ],
    }
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear()
    },
  },
}
</script>

<style></style>
