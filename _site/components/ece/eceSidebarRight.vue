<template>
  <div id="column3" role="region" aria-labelledby="col3-content">
    <div id="col3-content">
      <div id="btn-ad1" style="padding-top: 10px">
        <img src="/images/ChildCare.svg" alt="How to find Child Care Logo" />
        <p>Have a question about child care or afterschool resources?</p>
        <a
          class="btn-action"
          href="../ece/askangie.htm"
          aria-label="How to find Child Care"
          >Learn more</a
        >
      </div>

      <!-- <div>
						<a href="/ece/learn_the_signs.htm">
							<img src="/images/Learns_the_signs.gif" width="220" height="291" alt="Learn the Signs Ad" /> </a>
					</div> -->

      <br />
      <h1>Opening A Child Care Business</h1>
      <p>
        If you are interested in opening your own child care business, please
        contact Community Care Licensing at (510) 622-2602, or one of the child
        care resource and referral services listed under "Child Care Referral
        Services" at right.
      </p>

      <h1>Child Care Referral Services</h1>
      <p>
        If you are looking for child care in Alameda County, please contact one
        of the following child care resource and referral services:
      </p>
      <ul>
        <li>
          <strong>North County:</strong>
          <br />
          BANANAS <br />
          (510) 658-7353
          <br />
          <a href="http://www.bananasbunch.org" target="_blank"
            >http://www.bananasbunch.org</a
          >
        </li>
        <li>
          <strong>South County:</strong>
          <br />
          Alameda Co. 4C's <br />
          (510) 582-2182
          <br />
          <a href="http://www.4c-alameda.org" target="_blank"
            >http://www.4c-alameda.org</a
          >
        </li>

        <li>
          <strong>East County:</strong>
          <br />
          Hively <br />
          (925) 417-8733
          <br />
          <a href="https://behively.org/ " target="_blank"
            >https://behively.org/
          </a>
          <br />
        </li>
      </ul>

      <div id="twitter-stream">
        <a
          class="twitter-timeline"
          href="https://twitter.com/AlaCoChildCare"
          data-widget-id="349601872815980545"
          >Tweets by @AlaCoChildCare</a
        >
        <script>
          !(function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0],
              p = /^http:/.test(d.location) ? 'http' : 'https'
            if (!d.getElementById(id)) {
              js = d.createElement(s)
              js.id = id
              js.src = p + '://platform.twitter.com/widgets.js'
              fjs.parentNode.insertBefore(js, fjs)
            }
          })(document, 'script', 'twitter-wjs')
        </script>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EceSidebarRight',
}
</script>

<style></style>
