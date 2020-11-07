<template>
  <div>
    <name-banner />

    <search-box />

    <!-- Google Translate the Pages --------------------------------->
    <google-translate />

    <!--CHATBOT CODE-->
    <covid-chatbot />
    <!--CHATBOT CODE END-->

    <div class="container content">
      <nav-icons />

      <translate-modal />
      <!--PAGEWATCH CODE="CAALAME_1_20080723_151631_en"-->

      <!-- ACVOTE BOX -->
      <story-section>
        <story left>
          <img-link
            img-src="/acvote/images/Election_11202.png"
            img-alt="november 3, 2020 general election"
            link-to="https://www.acvote.org/index"
          />
        </story>

        <story right>
          <!-- TODO: Styling issues -->
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
      </story-section>

      <story-section>
        <story full>
          <img-link img-src="" img-alt="" link-to="" />
          <a
            id="covid19img"
            href="http://www.acphd.org/2019-ncov.aspx"
            target="_blank"
            ><img
              class="img-responsive center-block ads"
              alt="Alameda County Coronavirus COVID-19 Updates"
              src="/img/coronavirus-updates.png"
              width="100%"
          /></a>
        </story>
        <!-- LEFT COLUMN STORIES -->
        <story left>
          <!---->
          <img-link
            img-src="/img/mask-on-alameda-county-ad.png"
            img-alt="Mask On Alameda County. Show your mask pride! Tweet a photo of you in your mask. Tag @Dare2BWell and use MaskOnAlamedaCounty."
            link-to=""
          />

          <img-link
            img-src="/img/covid-thank-you2.png"
            img-alt="Alameda County Board of Supervisors and County Administrator Susan S. Muranishi offer thanks to our health care workers, first responders, and County employees. They express their appreciation for all their dedication and commitment."
          />

          <img-link
            img-src="/img/covid19-staff-ad-rectangle.png"
            img-alt="Alameda County Employees Stay Connect and Informed"
            link-to="/government/news/covid-19-county-staff.htm"
          />
          <news-story category="Videos" headline="COVID-19 PSAs"
            >Our Health Care Services Agency and Public Health Department have
            produced several public service announcements (PSAs).
            <a
              href="https://www.youtube.com/playlist?list=PLtCRVnIRI3TX5M5VFsrFr9Kz0j7-hsmOk"
              target="_blank"
              >View all PSAs.</a
            ></news-story
          >
          <!-- VIDEO STORY -->
          <div
            class="embed-responsive embed-responsive-16by9"
            style="margin: 20px 0px 10px 0px"
          >
            <iframe
              src="https://www.youtube.com/embed/rknwVVTtbeQ?rel=0"
              frameborder="0"
              allow="encrypted-media"
              allowfullscreen
            ></iframe>
          </div>

          <img-link
            img-src="/img/coronavirus-businesses.png"
            img-alt="COVID-19 Resources for Businesses"
            link-to="http://eastbayeda.org/default.page"
          />

          <img-link
            img-src="/img/coronavirus-compliance-concern.png"
            img-alt="Send email to our Sheriff's Office if you have a concern about COVID-19 compliance."
            link-to="https://www.acgov.org/form_app/feedback/feedback.jsp?id=SHRFcovid"
          />

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
              <!--<li><a href="" target="_blank"></a></li>
				<li><a href="" target="_blank"></a></li>
				<li><a href="" target="_blank"></a></li>-->
            </ul>
          </news-story>
        </story>
        <!-- LEFT COLUMN STORIES END -->

        <!-- RIGHT COLUMN STORIES -->
        <story right>
          <!--GOV DELIVERY SUSCRIPTION LINK-->
          <a data-toggle="modal" data-target="#modal-govd">
            <img
              class="img-responsive govd-news"
              src="/img/get-email-updates.png"
              alt="GovDelivery icon with text saying Get Email Updates"
            />
          </a>
          <!--/END-->
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
        <!-- RIGHT COLUMN STORIES END -->

        <!-- FULL COLUMN TWITTER FEEDS STARTS -->
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
        <!-- FULL COLUMN TWITTER FEEDS ENDS -->
      </story-section>
      <!-- SECOND NEWS SECTION BEGINS -->
      <story-section>
        <!-- LEFT COLUMN STORIES -->
        <story left>
          <img-link
            img-src="/img/acgovcares-promo.jpg"
            img-alt="ACGOV Cares volunteer opportunites, employee stories, donation options and more."
            link-to="https://acgovcares.org"
          />

          <img-link
            img-src="/government/news/images/2020ALWphotos.jpg"
            img-alt="2020 Alameda County Arts Leadership Awards"
            link-to="/government/news/artsawards.htm"
          />
          <br />
        </story>
        <!-- LEFT COLUMN STORIES END -->

        <!-- RIGHT COLUMN STORIES -->
        <story right>
          <!--GOV DELIVERY SUSCRIPTION LINK-->
          <img-link img-src="" img-alt="" link-to="" />
          <!-- TODO: imgLink component needs to be able to take data toggle and data-target -->
          <a data-toggle="modal" data-target="#modal-govd">
            <img
              class="img-responsive govd-news"
              src="/img/get-email-updates.png"
              alt="GovDelivery icon with text saying Get Email Updates"
            />
          </a>
          <!--/END-->
          <!--<p class="news-stories">
			<span class="category">Local</span>
			<br />
			<span class="headline">Apply For Youth Leadership Academy</span>
			<br />
			<span class="story">Applications are being accepted for Alameda County’s 2020 Youth Leadership Academy, a free educational program for local 11th and 12th grade students interested in learning about local government, developing leadership skills and networking with peers from throughout the County. We continue to closely monitor the developing COVID-19 situation and will provide updates if there are changes to this program.
				<a href="http://bit.ly/alcoyla2020 ">Learn more and apply...</a>
			</span>
		</p>-->
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

          <news-story category="Local" headline="Census 2020">
            We are gearing up for Census 2020. We are committed to counting all
            members of our community. Learn more about what we are doing and why
            the Census is so important.
            <a href="/census2020/">Learn more...</a>
          </news-story>

          <news-story category="Newsletter" headline="Community Connection"
            >Download our bi-monthly newsletter to learn more about the County.
            <a href="/government/connections.htm">Check it out...</a>
          </news-story>

          <news-story
            category="Official Announcements"
            headline="Press Releases"
            >View of list of official press releases issued by the County.
            <a href="/government/pressreleases.htm">View...</a>
          </news-story>

          <news-story category="Video" headline="What We've Been Up To"
            >Check out this video that describes what we're working on and
            celebrates our recent accomplishments.</news-story
          >

          <!-- TODO: VIDEO STORY COMPONENT -->
          <div
            class="embed-responsive embed-responsive-16by9"
            style="margin: 20px 0px 10px 0px"
          >
            <iframe
              src="https://www.youtube.com/embed/v8PPCl10Zoc?rel=0"
              frameborder="0"
              allow="encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <br />
        </story>
        <!-- RIGHT COLUMN STORIES END -->

        <!-- ******** ARCHIVED STORIES ******** -->

        <!--<p class="news-stories">
			<span class="category">Public Safety</span>
			<br />
			<span class="headline">State of California Website</span>
			<br />
			<span class="story">
				The State of California has launched a comprehensive, consumer-friendly website and public service announcements to boost #COVID-19 awareness.<br /><br />
				<a href="https://covid19.ca.gov/" target="_blank"><img style="max-width:250px;margin:0px 10px 10px 0px;" src="/img/CDPH_Button_300x140_v2-01.jpg" alt="Your actions save lives. Click here to learn more abput the new State of California COVID-19 website." /></a><a href="https://covid19.ca.gov/" target="_blank"><img style="max-width:250px;margin:0px 0px 10px 0px;" src="/img/SpanishBanner.jpg" alt="Tus Acciones Salvan Vidas. Pulse aquí para más información. " /></a>
			</span>
		</p>-->
        <!--<p class="news-stories">
			<span class="category">Public Safety</span>
			<br />
			<span class="headline">County Added to State Monitoring List</span>
			<br />
			<span class="story">
				Alameda County is experiencing a continued increase in reported COVID-19 cases in recent weeks, indicating elevated disease transmission. The magnitude of the change is above what would be expected as a result of the County's substantial expansion of testing, and we have been placed on the State’s County Monitoring List. Counties placed on the Monitoring List receive targeted support from the State and, after three consecutive days on the Monitoring List, are subject to State-imposed restrictions
and enforcement. To learn more about what this means for Alameda County residents and businesses, read the <a aria-label="Link to open Public Health Department website" href="http://www.acphd.org/media/591931/press-release-2020.07.12.pdf" target="_blank">press release and FAQ</a> from our Public Health Department.
			</span>
		</p>
		<p class="news-stories">
			<span class="category">Public Safety</span>
			<br />
			<span class="headline">Update on Outdoor Dining</span>
			<br />
			<span class="story">
				Yesterday, we learned the State issued updated guidance, dated July 9, prohibiting outdoor dining in non-variance counties, including Alameda County. While Alameda County’s Health Officer Order allowed for outdoor dining, under this stricter State guidance, all restaurants, wineries and bars in Alameda County may only be open for drive-through or pick-up/delivery options. Updated state guidance for restaurants providing takeout, drive-through, and delivery is available <a aria-label="Link to open state guidance document" href="https://files.covid19.ca.gov/pdf/guidance-takeout-restaurants.pdf" target="_blank">here</a>.<br/><br/>
				Our decision to permit outdoor dining was based on the Health Officer’s assessment that outdoor activities, with appropriate protective measures, carry less risk than indoor activities. At the time, many other counties had applied for a variance alongside or shortly after opening outdoor dining without consequences, and Alameda County took that same approach.  At that time the State did not differentiate dining guidance by indoor/outdoor as it now does. With the new guidance dated yesterday and enforcement actions observed last week in Santa Clara County, the State is demonstrating a new approach.
				<br/><br/>
				We are moving toward obtaining a variance from the State, and a letter of support for a variance is on the agenda for next Tuesday’s Board of Supervisors’ meeting. Alameda County hit pause on reopening on June 29th due to rising case rates and hospitalizations, and delayed plans to apply for variance. While the data have not become more favorable, applying for a variance is a procedural action that would provide us with the flexibility to ensure that we can continue to allow the activities that the Health Officer determines are lower risk for our community.  Approval of a variance is not an indication that we will pursue additional re-openings of other industries or sectors at this time. We plan to continue to make reopening decisions based on our COVID-19 indicators and data, science, and disease conditions in the County. 
			</span>
		</p>-->
        <!--<p class="news-stories">
			<span class="category">Housing</span>
			<br />
			<span class="headline">County-Wide Eviction Moratorium</span>
			<br />
			<span class="story">
				Our Board has enacted a County-wide moratorium on evictions beginning March 31, 2020 for 90 days if the County Public Health Emergency is still in effect. The Alameda County Board of Supervisors’ eviction moratorium ensures that all tenants, homeowners and those living in mobile home parks countywide can shelter-in-place during this crisis. This is not a rent or mortgage  strike.  You still owe your rent or mortgage. If  you  can pay  your rent  or mortgage,  you  should pay  your rent  or mortgage.       
				<br><br>
				However, if you cannot pay your rent or mortgage  during this crisis, please reach out to your landlord or bank and begin discussion about your situation.  Your back rent or mortgage payments will not result in an eviction during the crisis, but your rent or mortgage payments are still an obligation that must be paid. The amended ordinance allows tenants up to 12 months to repay the overdue rent.  If you have questions, please contact our partner, ECHO Housing, at 510-581-9380. If a city has an eviction moratorium ordinance, the city ordinance can prevail to the extent the ordinance is more protective of residents.
				<ul>
					<li><a href="/documents/ACEvictionMoratorium-Update-FAQ.pdf" target="_blank">Summary/FAQs for Homeowners and Tenants</a></li>
					<li><a href="/documents/AlamedaCounty-wideEvictionMoratorium.pdf" target="_blank">Ordinance</a></li>
				</ul>
			</span>
		</p>-->
        <!--<p class="news-stories">
			<span class="category">Public Safety</span>
			<br />
			<span class="headline">Shelter In Place Orders Extended</span>
			<br />
			<span class="story">
				The seven Bay Area Public Health Officers who ordered a shelter in place in mid-March will extend the orders through May 31 while some restrictions are eased and tools to strengthen containment of COVID-19 are put into place. The social distancing intervention has slowed the increase of new cases and prevented the anticipated medical surge. As restrictions are eased, it is critical to ensure that growth of cases can be sufficiently contained to protect the health and safety of our community.
<ul>
					<li><a aria-label="Link to open Press Release About Order" href="http://www.acphd.org/media/572780/joint-press-release-2020.04.29.pdf" target="_blank">Press Release</a></li>
					<li><a aria-label="Link to open Revised Shelter In Place Order Summary" href="http://www.acphd.org/media/572777/health-officer-order-20-10-shelter-in-place-summary.pdf" target="_blank">Revised Shelter In Place Order Summary</a></li>
					<li><a aria-label="Link to open Revised Shelter In Place Order FAQs" href="https://covid-19.acgov.org/index.page" target="_blank">Revised Shelter In Place Order FAQs</a></li>
					<li><a aria-label="Link to open Revised Shelter In Place Orer" href="http://www.acphd.org/media/572718/health-officer-order-20-10-shelter-in-place-20200429.pdf" target="_blank">Revised Shelter In Place Order and Appendices</a></li>
					<li><a aria-label="Appendix A - Fillable Social Distancing Protocol" href="http://www.acphd.org/media/572721/health-officer-order-20-10-appendix-a-social-distancing-protocol.docx" target="_blank">Appendix A - Fillable Social Distancing Protocol</a> (WORD)</li>
					<li><a aria-label="Link to open Appendix B - Small Construction Safety Protocol" href="http://www.acphd.org/media/572724/health-officer-order-20-10-appendix-b-1-small-construction-project-safety-protocol.pdf" target="_blank">Appendix B - Small Construction Safety Protocol</a></li>
				</ul>
				
			</span>
		</p>
		<p class="news-stories">
			<span class="category">Public Safety</span>
			<br />
			<span class="headline">Face Coverings Now Required</span>
			<br />
			<span class="story">
				Our Health Officer Dr. Erica Pan has issued an Order for all members of the public to wear face coverings when around people outside of their household. Face coverings can be simple and homemade, made of cloth, fabric, or other soft or permeable material without holes, that covers the nose and mouth.
				<ul>
					<li><a aria-label="Press Release About Covering Your Face" href="http://www.acphd.org/media/569458/press-release-2020.04.17.pdf" target="_blank">Press Release</a></li>
					<li><a aria-label="Order to Cover Your Face FAQ" href="https://covid-19.acgov.org/face-covering-faqs.page" target="_blank">Face Covering Order FAQs</a></li>
					<li><a aria-label="Order to Cover Your Face" href="http://www.acphd.org/media/569455/health-officer-order-20-08-face-coverings-2020.04.17.pdf" target="_blank">Face Covering Order</a></li>
				</ul>
				
			</span>
		</p>-->
        <!--<p class="news-stories">
			<span class="category">Public Safety</span>
			<br />
			<span class="headline">Order to Shelter At Home</span>
			<br />
			<span class="story">
				Alameda County joined Contra Costa, Marin, San Francisco, San Mateo, and Santa Clara counties with the City of Berkeley in extending a previous stay-at-home order through May 3, 2020 in order to preserve critical hospital capacity across the region. The previous three-week order was set to expire on April 7. While the prior order has been effective in reducing the rate of transmission of the novel coronavirus (COVID-19), it is not enough. There has been a significant increase in the number of positive cases, hospitalization and deaths from COVID-19, which is beginning to strain healthcare resources.
				<ul>
					<li><a aria-label="Press Release About Final Order to Shelter At Home" href="http://acphd.org/media/563685/joint-press-release-20200331.pdf" target="_blank">Press Release</a></li>
					<li><a aria-label="Final Order to Shelter At Home" href="http://acphd.org/media/563688/health-officer-order-20-04-shelter-in-place-20200331.pdf" target="_blank">Final Order to Shelter At Home</a></li>
					<li><a aria-label="Shelter At Home FAQ's" href="https://covid-19.acgov.org" target="_blank">Shelter At Home FAQ's</a></li>
				</ul>
				The State of California has declared a Stay At Home Order for the entire State of California. Visit their <a href="https://covid19.ca.gov/stay-home-except-for-essential-needs/" target="_blank">website</a> for more details and to read the executive order. 
			</span>
		</p>-->
        <!-- <span class="story">
				The Alameda County Social Services Agency is excited about the opportunity to support our community through the <a href="https://covid19.ca.gov/restaurants-deliver-home-meals-for-seniors/" target="_blank">Great Plates Delivered</a>—Older Adult Meals program.  The program is not currently operational but we are accepting applications for County residents interested in receiving meals.<br/><br/>
				<b>Oakland residents</b> can apply to <a href="https://www.oaklandca.gov/resources/great-plates-delivered-city-of-oakland" target="_blank">City of Oakland Great Plates Delivered</a> or call 510-238-3663 or email <a href="mailto:greatplates@oaklandca.gov" target="_blank">greatplates@oaklandca.gov</a><br/><br/>
				Our goal is to design a program that is inclusive and provides the highest quality nutritious food and service to older adults (65 years and older) and other adults (60-64 years) at high risk from COVID 19 to stay home and healthy.
				<br/><br/><a class="btn btn-success" role="button" href="https://acgreatplates.acgov.org" target="_blank">APPLY ONLINE</a><br/><br/> To contact us, email <a href="mailto:ACGreatPlates@acgov.org">ACGreatPlates@acgov.org</a>, or call (925) 803-7943.
			</span> -->
        <!-- ******** END ARCHIVE ******** -->
      </story-section>
      <!--/PAGEWATCH-->

      <gov-info />
    </div>

    <modal-govdelivery />

    <translate-button />
    <!-- County Administrator's Office --------------------------------->
    <modal-cao />
    <modal-bos />

    <home-footer />

    <!-- Bootstrap core JavaScript
================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
  </div>
</template>

<script>
// TODO: Integrate Google Translate

//     type="text/javascript"
//     src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//
//     function googleTranslateElementInit() {
//       new google.translate.TranslateElement(
//         {
//           pageLanguage: 'en',
//           includedLanguages:
//             'af,am,ar,de,es,fa,fr,gu,hi,id,ja,km,ko,pt,ru,so,sw,tl,ur,vi,yo,zh-CN,zh-TW',
//         },
//         'google_translate_element'
//       )
//     }
//
//
//
//  TODO: Implement JQUERY + BOOTSTRAP
//    src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
//
//     window.jQuery ||
//       document.write('<script src="/acgov-js/jquery.min.js"')
//
//   src="/acgov-js/bootstrap.min.js"
//   <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
//  src="/acgov-js/ie10-viewport-bug-workaround.js"
//   <!-- Google Analytics code -->

// TODO: Implement Google Analytics
//
//     ;(function (i, s, o, g, r, a, m) {
//       i['GoogleAnalyticsObject'] = r
//       ;(i[r] =
//         i[r] ||
//         function () {
//           ;(i[r].q = i[r].q || []).push(arguments)
//         }),
//         (i[r].l = 1 * new Date())
//       ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
//       a.async = 1
//       a.src = g
//       m.parentNode.insertBefore(a, m)
//     })(
//       window,
//       document,
//       'script',
//       '//www.google-analytics.com/analytics.js',
//       'ga'
//     )

//     ga('create', 'UA-48660008-1', 'acgov.org')
//     ga('send', 'pageview')
//
//   <!-- UserSnap Code -->
// TODO: Implement User Snap
//
//     ;(function () {
//       var s = document.createElement('script')
//       s.type = 'text/javascript'
//       s.async = true
//       s.src =
//         '//api.usersnap.com/load/' + '4331c1dc-9b6c-418d-ac74-3574f46db338.js'
//       var x = document.getElementsByTagName('script')[0]
//       x.parentNode.insertBefore(s, x)
//     })()
//

//   Siteimprove Analytics Code
//  TODO: implement SiteImprove analytics
//
//     ;(function () {
//       var sz = document.createElement('script')
//       sz.type = 'text/javascript'
//       sz.async = true
//       sz.src = '//siteimproveanalytics.com/js/siteanalyze_10984.js'
//       var s = document.getElementsByTagName('script')[0]
//       s.parentNode.insertBefore(sz, s)
//     })()

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

// TODO: Google Tag Manager Module

/** 
 * 
         <!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MW6VWCK');
<!-- End Google Tag Manager -->

*/

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
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        // },
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
/*
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

@media (max-width: 767px) {
  td.gsc-input {
    width: 20%;
  }
}

.content {
  background: transparent;
  padding: 0px;
}

/* Icons */
/*
.row.icons .col-sm-3 {
  margin: 20px 0px;
}

.icons {
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
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
/*
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
}
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

No greater than 900px, no less than 400px

@media (max-width: 850px) and (min-width: 768px) {
  .trans_button {
    display: inline-block;
    padding-top: 25px;
    padding-right: 15px;
    float: right;
    bottom: -20px;
  }
}
@media screen and (max-width: 767px) {
  #covid19img {
    content: url('/img/coronavirus-updates-small.png');
    max-width: 100%;
    align-content: center;
    margin: 15px auto;
    display: block;
  }
}
#covid19img {
  max-width: 100%;
}
.twitterfeeds {
  float: left;
  margin-bottom: 5%;
}

.prepared {
  float: left;
}

@media only screen and (min-width: 768px) {
  .twitterfeeds {
    width: 24%;
  }
}

@media only screen and (max-width: 767px) {
  .twitterfeeds {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .prepared {
    float: none;
  }
} 
*/
</style>
