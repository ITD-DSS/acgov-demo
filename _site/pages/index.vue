<template>
  <main class="flex flex-col">
    <story-section
      v-for="section in storySections"
      :key="section._id"
      :section-name="section.sectionName"
      :stories="section.related"
    >
    </story-section>

    <!--PAGEWATCH CODE="CAALAME_1_20080723_151631_en"-->

    <!-- <story-section>
      <template v-slot:left>
        <story>
          <img-link
            img-src="/acvote/images/Election_11202.png"
            img-alt="november 3, 2020 general election"
            link-to="https://www.acvote.org/index"
          />
        </story>
      </template>

      <template v-slot:right>
        <story>
          <news-story
            :category="'Elections'"
            :headline="'November 3 General Election'"
          >
            <p>
              Quick links for the November 3 General Election. For full election
              information, visit:
              <a href="https://www.acvote.org/index" target="_blank"
                >acvote.org</a
              >.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.acgov.org/rovmvp_app/mvp.do"
                  target="_blank"
                  >My Voter Profile</a
                >
              </li>
              <li>
                <a
                  href="https://www.acgov.org/rovapps/maps/avl/"
                  target="_blank"
                  >Accessible Voting Locations</a
                >
              </li>
              <li>
                <a href="https://acvote.ballottrax.net/voter/" target="_blank"
                  >Track Your Ballot</a
                >
              </li>
              <li>
                <a href="https://www.acvote.org/covid" target="_blank"
                  >Coronavirus Voting Updates</a
                >
              </li>
              <li>
                <a
                  href="https://www.acgov.org/rovapps/maps/ballotdropbox_map.htm"
                  target="_blank"
                  >Ballot Drop Box Locations</a
                >
              </li>
            </ul>
          </news-story>
        </story>
      </template>
    </story-section> -->

    <!-- <story-section>
      <template v-slot:full>
        <story>
          <img-link
            img-src="img/coronavirus-updates.png"
            img-alt="Alameda County Coronavirus COVID-19 Updates"
            link-to="http://www.acphd.org/2019-ncov.aspx"
          />
        </story>
      </template>

      <template v-slot:left>
        <story>
          <img-link
            img-src="img/mask-on-alameda-county-ad.png"
            img-alt="Mask On Alameda County. Show your mask pride! Tweet a photo of you in your mask. Tag @Dare2BWell and use MaskOnAlamedaCounty."
          />
        </story>

        <story>
          <img-link
            img-src="/img/covid-thank-you2.png"
            img-alt="Alameda County Board of Supervisors and County Administrator Susan S. Muranishi offer thanks to our health care workers, first responders, and County employees. They express their appreciation for all their dedication and commitment."
          />
        </story>

        <story>
          <img-link
            img-src="/img/covid19-staff-ad-rectangle.png"
            img-alt="Alameda County Employees Stay Connect and Informed"
            link-to="/government/news/covid-19-county-staff.htm"
          />
        </story>

        <story>
          <news-story category="Videos" headline="COVID-19 PSAs"
            >Our Health Care Services Agency and Public Health Department have
            produced several public service announcements (PSAs).
            <a
              href="https://www.youtube.com/playlist?list=PLtCRVnIRI3TX5M5VFsrFr9Kz0j7-hsmOk"
              target="_blank"
              >View all PSAs.</a
            ></news-story
          >
        </story>

        <story>
          <video-story
            :youtube-embed="'https://www.youtube.com/embed/rknwVVTtbeQ?rel=0'"
          ></video-story>
        </story>

        <story>
          <img-link
            img-src="/img/coronavirus-businesses.png"
            img-alt="COVID-19 Resources for Businesses"
            link-to="http://eastbayeda.org/default.page"
          />
        </story>

        <story>
          <img-link
            img-src="/img/coronavirus-compliance-concern.png"
            img-alt="Send email to our Sheriff's Office if you have a concern about COVID-19 compliance."
            link-to="https://www.acgov.org/form_app/feedback/feedback.jsp?id=SHRFcovid"
          />
        </story>

        <story>
          <news-story
            category="Public Safety"
            headline="Online Services Available 24/7"
          >
            Our agencies and departments have been closely monitoring advice
            from the County's Public Health Department related to the
            Coronavirus Disease (COVID-19) outbreak. We are committed to
            providing our essential services to the public, and all County
            agencies and departments remain open for business. We also recognize
            the newfound importance of social distancing and individual
            preferences for avoiding public spaces; therefore, we highly
            recommend the utilization of our many online and mobile services.
            Through these services you will be able to pay your property taxes,
            order vital records, and access many other essential services. We
            provide the following online and mobile services:
            <ul>
              <li>
                Ordering copies of
                <a href="http://acgov.org/auditor/clerk/bdm/index.htm"
                  >vital records</a
                >
                (birth, death, and marriage certificates)
              </li>
              <li>
                Searching for and ordering copies of
                <a href="http://acgov.org/auditor/clerk/opr/index.htm"
                  >real estate/official public records</a
                >
                and
                <a href="http://acgov.org/auditor/clerk/fbn/index.htm"
                  >fictitious business names</a
                >
              </li>
              <li>
                Making online payments for
                <a
                  href="https://www.acgov.org/ms/ccoll/stage1.aspx"
                  target="_blank"
                  >central collections' accounts</a
                >
              </li>
              <li>
                Making online payments for your
                <a href="http://acgov.org/propertytax/online.htm"
                  >property taxes</a
                >
              </li>
              <li>
                Applying for and obtaining permits/licenses through our
                <a href="http://permit.acgov.org/">permit portal</a>
              </li>
              <li>
                Viewing
                <a href="http://acgov.org/MS/prop/index.aspx"
                  >property assessment</a
                >
                information
              </li>
              <li>
                Submitting applications for
                <a href="http://acgov.org/clerk/assessment.htm"
                  >assessment appeals</a
                >
              </li>
              <li>
                Finding information on
                <a href="https://www.acgov.org/sheriff_app/docket/"
                  >criminal dockets</a
                >
                and
                <a href="https://www.acgov.org/sheriff_app/">jail inmates</a>
              </li>
              <li>
                Accessing your County
                <a href="https://guides.aclibrary.org/accounts" target="_blank"
                  >library account</a
                >
              </li>
              <li>
                Logging into your
                <a
                  href="https://www.acgov.org/rovmvp_app/mvp.do"
                  target="_blank"
                  >voter profile</a
                >
              </li>
              <li>
                Make online
                <a
                  href="https://childsupport.ca.gov/state-disbursement-unit/"
                  target="_blank"
                  >payments</a
                >
                for child support
              </li>
              <li>
                <a
                  href="https://childsupport.ca.gov/application-for-child-support-services/"
                  target="_blank"
                  >Apply</a
                >
                for child support services
              </li>
              <li>
                Access your child support case information
                <a
                  href="https://www.cse.ca.gov/CustomerConnect/login"
                  target="_blank"
                  >online</a
                >
              </li>
              <li>
                <a href="https://guides.aclibrary.org/accounts" target="_blank"
                  >Sign-up</a
                >
                for a library eCard
              </li>
              <li>
                <a href="https://guides.aclibrary.org/az.php" target="_blank"
                  >Online</a
                >
                borrowing, learning, research, entertainment, and more with your
                library card
              </li>
              <li>
                <a href="https://www.aclibrary.org/" target="_blank"
                  >Live chat</a
                >
                with library staff
              </li>
              <li>
                Submit questions to library staff
                <a href="https://answers.aclibrary.org/" target="_blank"
                  >online</a
                >
              </li>
              <li>
                <a href="https://www.getcalfresh.org/" target="_blank">Apply</a>
                for food stamps
              </li>
              <li>
                <a href="https://www.mybenefitscalwin.org/" target="_blank"
                  >Create an account</a
                >
                to get medical, food and cash assistance
              </li>
              <li>
                <a href="https://www.coveredca.com/medi-cal/" target="_blank"
                  >Apply</a
                >
                for Medi-Cal
              </li>
              <li><a href="" target="_blank"></a></li>
    				<li><a href="" target="_blank"></a></li>
    				<li><a href="" target="_blank"></a></li>
            </ul>
          </news-story>
        </story>
      </template>
      

      <template v-slot:right>
        <story>
        
          <gov-delivery-link />
         
          <news-story category="Public Safety" headline="Health Officer Orders"
            >Updated Alameda County Health Officer orders and other COVID-19
            information is available on our COVID-19 website. Learn more about
            the
            <a href="https://covid-19.acgov.org/sip.page?" target="_blank"
              >shelter-in-place order</a
            >
            and the
            <a href="https://covid-19.acgov.org/reopening.page?" target="_blank"
              >reopening plan</a
            >.</news-story
          >
          <news-story
            category="Public Safety"
            headline="Safe & Accessible Voting"
            >The Golden State Warriors and the County of Alameda are honored to
            announce a unique partnership that will provide a safe and
            accessible voting location in downtown Oakland. The Warriors, in
            collaboration with the County of Alameda, will open the doors of the
            team’s Oakland Facility at 1011 Broadway for the November 3, 2020
            General Election. The use of the Warriors’ Oakland Facility as an
            accessible voting location ensures that social distancing measures
            are put in place and that County health guidelines are followed.
            <a
              href="http://www.acgov.org/news/pressreleases/GSWarriorsVotePlacePressReleaseSept42020.pdf"
              target="_blank"
              >Press release...</a
            ></news-story
          >
          <news-story
            category="Public Safety"
            headline="TTC's Offices Remain Closed"
          >
            As we continue our efforts to ensure the health and safety of the
            public and our staffs, The Treasurer-Tax Collector's offices in
            Oakland and Hayward will remain closed until further notice. They
            are not conducting in-person visits to collect property taxes; any
            attempts to collect in-person payments are fraudulent. The TTC
            accepts payments online, by mail, or over the telephone. Also, you
            can place your check payment in the drop box located at the lobby of
            the County Administration Building at 1221 Oak St. Oakland or
            through the mail slot at the Business License Tax Office at 224 W.
            Winton Ave., Room 169, Hayward. PLEASE HAVE YOUR CHECK COMPLETELY
            FILLED OUT AND SEALED IN THE ENVELOPE WHEN PLACING IN THE DROP BOX
            TO AVOID A LARGE GATHERING OF PEOPLE WHILE YOU COMPLETE YOUR CHECK
            IN THE LOBBY.
            <a href="http://www.acgov.org/propertytax/"
              >Pay your property taxes...</a
            ></news-story
          >
          <news-story
            category="Public Assistance"
            headline="COVID-19 Economic Relief"
          >
            The Alameda County Social Services Agency, in partnership with the
            County’s Health Care Services and Auditor-Controller Agencies,
            launched an economic resiliency program on August 24, 2020 to
            address the COVID-19 public health crisis. The Alameda County
            Responsibility to Community Health-Pilot Stipend Program, or ARCH,
            is aimed at curbing the spread of the COVID-19 virus in Alameda
            County by providing financial assistance to self-isolating County
            residents who have tested positive for COVID-19. <br /><br />

            The ARCH-Pilot Stipend Program targets COVID positive residents
            living in designated high-risk neighborhoods that include: South
            Hayward, Ashland/Cherryland, East Oakland, West Oakland, and
            Fruitvale/San Antonio. It is believed that many eligible County
            residents are essential workers not able to work remotely, thereby
            placing them at greater risk of contracting COVID-19. Vulnerable
            residents testing positive for COVID-19 will be connected to the
            ARCH-Pilot Stipend Program through HCSA’s community medical provider
            network of Community-Based Case Investigation/Contact Tracing
            services. For more information, see our
            <a
              aria-label="Link to FAQ"
              href="https://alamedasocialservices.org/public/docs/AlamedaCountyResponsibilityToCommunityHealthFAQ_SAS.pdf"
              target="_blank"
              >FAQ</a
            >
            and our
            <a
              aria-label="Link to press release"
              href="http://www.acgov.org/news/pressreleases/ARCHPressReleaseAug2020-FINAL.pdf"
              target="_blank"
              >press release</a
            >.</news-story
          >
          <news-story
            category="Interactive Map"
            headline="COVID-19 Services Map"
            >The map includes food distribution sites, testing sites, and other
            essential services which are currently open under the COVID-19
            Shelter-In-Place Order. The map will be updated regularly and remain
            active for the duration of the Shelter-In-Place Order. The map was a
            collaborative effort between the Alameda County Emergency Operations
            Center (EOC) Care & Shelter Branch, Alameda County Community Food
            Bank, 211, and cities.<br />
            <a href="https://www.acgov.org/maps/food-services.htm"
              >Open Interactive Map</a
            ></news-story
          >
          <news-story category="Food Program" headline="Great Plates Delivered"
            >The Alameda County Social Services Agency is pleased to offer
            nutritional meals to eligible older adults impacted by the COVID-19
            pandemic through the Great Plates Delivered Program (GPD). We
            encourage all eligible County residents (except for the City of
            Oakland) to take full advantage of this nutritional food resource by
            completing the below registration form. Restaurants who are
            interested in participating should complete the
            <a
              href="https://state-of-california-agency.forms.fm/great-plates-delivered-food-provider-interest-form/forms/7917"
              target="_blank"
              >state interest form</a
            >. Restaurants that have already registered are currently being
            reviewed and do not need to resubmit their form. <br /><br />
            <b>Oakland residents</b>
            can apply to
            <a
              href="https://www.oaklandca.gov/resources/great-plates-delivered-city-of-oakland"
              target="_blank"
              >City of Oakland Great Plates Delivered</a
            >
            or call 510-238-3663 or email
            <a href="mailto:greatplates@oaklandca.gov" target="_blank"
              >greatplates@oaklandca.gov</a
            >
            <br /><br />
            We have designed a program that is inclusive and provides the
            highest quality nutritious food and service to eligible adults 60
            and older at high risk from COVID 19 to stay home and remain
            healthy.
            <br /><br /><a
              class="btn btn-success"
              role="button"
              href="https://acgreatplates.acgov.org"
              target="_blank"
              >APPLY ONLINE</a
            ><br /><br />
            To contact us, email
            <a href="mailto:ACGreatPlates@acgov.org">ACGreatPlates@acgov.org</a
            >, or call (925) 803-7943.<br /><br />
            Please note the Great Plates Delivered program is currently approved
            through November 9, 2020. Any extensions of the program beyond that
            date are handled by the California Office of Emergency Services (Cal
            OES) in consultation with the Federal Emergency Management Agency
            (FEMA). Please consult this website for updates as
            necessary.</news-story
          >
          <news-story
            category="Public Safety"
            headline="County Meetings & Events"
            >Several County meetings and events have been postponed or cancelled
            due to health concerns.
            <a href="/government/news/event-changes.htm"
              >Meeting/Event Changes</a
            ></news-story
          >
          <news-story category="Donations" headline="Help Us Fight COVID-19"
            >Our Board of Supervisors has reactivated the Disaster Relief Fund.
            Due to the enormous and varied needs facing the community and the
            health care systems at this time, the county has established two
            separate funds. The Emergency Fund will provide needed services to
            those directly affected by the pandemic. The Recovery Fund will be
            used to purchase personal protective equipment and other supplies to
            assist those fighting the pandemic. You can also donate personal
            protective equipment.<br /><br />
            <a
              class="btn btn-success"
              role="button"
              href="/government/news/disaster.htm"
              >Learn More / Donate</a
            ></news-story
          >
          <news-story
            category="Public Safety"
            headline="Social Services Agency COVID-19 Guidelines"
          >
            Our Social Services Agency has published important notices to
            provide guidance for their clients. Lobbies at their facilities are
            temporarily closed. Get more details on their
            <a
              href="https://www.alamedasocialservices.org/public/contact_us/Covid19.cfm"
              target="_blank"
              >website</a
            >.
            <ul>
              <li>
                <a
                  href="/government/news/AAS Aging & Adults Guidance to Coronavirus.pdf"
                  target="_blank"
                  >Guidance for Seniors & Adults With Disabilities</a
                >
              </li>
              <li>
                Clients of Adult Protective Services, Senior Information and
                Assistance, Veterans Services, Area Agency on Aging, Public
                Administrators, Public Conservators, Public Guardian, Providers
                of In-Home Support Services and Public Authority:
                <a
                  href="https://www.alamedasocialservices.org/staff/docs/CORONAVIRUS_2019_AAS_3.18.20.pdf"
                  target="_blank"
                  >What You Need to Know</a
                >
              </li>
              <li>
                <a
                  href="https://www.alamedasocialservices.org/public/docs/Attention_All_Alameda_County.pdf"
                  target="_blank"
                  >All Alameda County CalWORKs, CalFresh, Medi-Cal and General
                  Assistance Recipients</a
                >
              </li>
            </ul>
          </news-story>
        </story>
      </template>

      <template v-slot:full>
          <story full>
            <div>
              <div class="twitterfeeds">
                <a
                  class="twitter-timeline"
                  data-width="90%"
                  data-height="400"
                  data-theme="light"
                  href="https://twitter.com/Dare2BWell?ref_src=twsrc%5Etfw"
                  >Tweets by Dare2BWell</a
                >
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </div>
              <div class="twitterfeeds">
                <a
                  class="twitter-timeline"
                  data-width="90%"
                  data-height="400"
                  data-theme="light"
                  href="https://twitter.com/AlamedaCoAlert?ref_src=twsrc%5Etfw"
                  >Tweets by AlamedaCoAlert</a
                >
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </div>
              <div class="twitterfeeds">
                <a
                  class="twitter-timeline"
                  data-width="90%"
                  data-height="400"
                  data-theme="light"
                  href="https://twitter.com/AlamedaCoFire?ref_src=twsrc%5Etfw"
                  >Tweets by AlamedaCoFire</a
                >
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </div>
              <div class="twitterfeeds">
                <a
                  class="twitter-timeline"
                  data-width="90%"
                  data-height="400"
                  data-theme="light"
                  href="https://twitter.com/ACSOSheriffs?ref_src=twsrc%5Etfw"
                  >Tweets by ACSOSheriffs</a
                >
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </div>
            </div>
            <div style="clear: both"></div>
          </story>
        </template>
    </story-section> 
-->

    <!--<story-section>
      <template v-slot:left>
        <story>
          <img-link
            img-src="/img/acgovcares-promo.jpg"
            img-alt="ACGOV Cares volunteer opportunites, employee stories, donation options and more."
            link-to="https://acgovcares.org"
          />
        </story>
        <story>
          <img-link
            img-src="/government/news/images/2020ALWphotos.jpg"
            img-alt="2020 Alameda County Arts Leadership Awards"
            link-to="/government/news/artsawards.htm"
          />
        </story>
      </template>

      <template v-slot:right>
        <story>
          <gov-delivery-link />
          <news-story
            category="Local"
            headline="SRJ ADA Self-Evaluation & Transition Plan"
            >The County of Alameda is committed to providing seamless access to
            all its programs, services and activities for qualified individuals
            with disabilities. To ensure appropriate access exists, as well as
            compliance with State and Federal disability rights laws, a
            Self-Evaluation and Transition Plan (SRJ SETP) for Santa Rita Jail
            has been prepared to fulfill the requirements set forth in Title II
            of the ADA.
            <a href="/government/news/srjada.htm">Learn more...</a></news-story
          >
        </story>

        <story>
          <news-story category="Local" headline="Census 2020">
            We are gearing up for Census 2020. We are committed to counting all
            members of our community. Learn more about what we are doing and why
            the Census is so important.
            <a href="/census2020/">Learn more...</a>
          </news-story>
        </story>

        <story>
          <news-story category="Newsletter" headline="Community Connection"
            >Download our bi-monthly newsletter to learn more about the County.
            <a href="/government/connections.htm">Check it out...</a>
          </news-story>
        </story>

        <story>
          <news-story
            category="Official Announcements"
            headline="Press Releases"
            >View of list of official press releases issued by the County.
            <a href="/government/pressreleases.htm">View...</a>
          </news-story>
        </story>

        <story>
          <news-story category="Video" headline="What We've Been Up To"
            >Check out this video that describes what we're working on and
            celebrates our recent accomplishments.</news-story
          >
        </story>

        <story>
          <video-story
            :youtube-embed="'https://www.youtube.com/embed/v8PPCl10Zoc?rel=0'"
          ></video-story>
        </story>
        <br />
      </template>
    </story-section> 
-->

    <!--<story-section>
      <template v-slot:left>
        <story>
          <div class="col-sm-6 board-photo">
            <a href="#" data-toggle="modal" data-target="#modal-bos">
              <img
                id="bos"
                class="img-responsive center-block"
                src="/img/bos.jpg"
                alt="Photo collage of the Board of Supervisors showing: Scott Haggerty-District 1, Richard Valle-District 2, Wilma Cha-District 3, Nate Miley-District 4, Keith Carson-District 5. "
              />
            </a>
          </div>
        </story>
      </template>
      <template v-slot:right>
        <story>
          <div class="col-sm-6 gov-links">
            <ul>
              <li>
                <a href="government/departments.htm"
                  >Agencies &amp; Departments</a
                >
              </li>
              <li>
                <a href="/board/broadcast.htm"
                  >Board of Supervisors Meetings / Broadcasts / Current Meeting
                  Agenda</a
                >
              </li>
              <li>
                <a href="/cda/planning/meetings/broadcast.htm"
                  >Planning Department Meeting Broadcasts</a
                >
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#modal-cao"
                  >County Administrator's Office</a
                >
              </li>
              <li>
                <a href="government/elected.htm">Elected Officials</a>
              </li>
              <li>
                <a href="government/programs.htm">Programs &amp; Initiatives</a>
              </li>
            </ul>
          </div>
        </story>
      </template>
    </story-section>
     -->
  </main>
</template>

<script>
// TODO: Integrate Google Translate

//  TODO: Implement interactions stylings

// TODO: Implement Google Analytics
//     ga('create', 'UA-48660008-1', 'acgov.org')
//     ga('send', 'pageview')

//   <!-- UserSnap Code -->
// TODO: Implement User Snap
//
//         '//api.usersnap.com/load/' + '4331c1dc-9b6c-418d-ac74-3574f46db338.js'
//

//   Siteimprove Analytics Code
//  TODO: implement SiteImprove analytics
//
//       sz.src = '//siteimproveanalytics.com/js/siteanalyze_10984.js'

//
// TODO: BOS AGENDA JS
//   src="/js/bos-agenda-update.js"

// TODO: Implement Chatbot
//   Chatbot Code
//   <div id="togglebutton" style="display: none">
//     <button id="beginwebchat" onclick="toggleWebChat()">
//       <img
//         src="/img/covid-chat.png"
//         alt="Click this chat icon to open a chat window about COCID-19."
//       />
//     </button>
//   </div>

//
//     crossorigin="anonymous"
//     src="https://cdn.botframework.com/botframework-webchat/latest/webchat-es5.js"
//
//    src="/chatbot/wchat.js?v=18"
//   <link href="/chatbot/wchat.css?v=18" rel="stylesheet" />
//   Chatbot Code End

import { groq } from '@nuxtjs/sanity'

export default {
  layout: 'acgov-home',
  async fetch() {
    const query = groq`
    *[_type=="storySection"]{
      _id,
      _createdAt,
      sectionName,
      "related": *[_type=="story" && references(^._id)]
    } | order(_createdAt asc)
    `
    // JavaScript
    const sections = await this.$sanity.fetch(query)
    this.storySections = sections
  },
  data() {
    return {
      storySections: [],
    }
  },
  methods: {
    // Storyitsearch() {
    //   document.getElementById('search-form').submit()
    // },
    // goback() {
    //   window.history.back()
    // },
  },
  head() {
    return {
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
        // {
        //   rel: 'stylesheet',
        //   href: 'acgov-css/bootstrap.min.css',
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'acgov-css/ie10-viewport-bug-workaround.css',
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'acgov-css/custom.css',
        // },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    }
  },
  // TODO: Implement Validation for Preview mode
  // validate({ params, store, query }) {
  //   // If FALSE redirect to 404 page
  //   return (
  //     query.preview === 'true' || store.state.moviesSlugs.includes(params.slug)
  //   )
  // },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
