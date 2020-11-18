<template>
  <nav class="flex flex-row py-10">
    <!-- <div class="row icons"> -->
    <div v-for="service in serviceLinks" :key="service.id" class="mx-16">
      <!-- <div class="col-sm-3 col-xs-6 text-center icon-button"> -->
      <a
        :href="service.linkTo"
        class="text-white flex flex-col items-center service-shadow"
      >
        <!-- <a href="services/" class="iconlink icon-services"> -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <i
          class="material-icons text-icon"
          :class="service.iconClass"
          v-html="service.iconText"
        ></i>
        <br />
        <span class="text-4xl">{{ service.text }}</span>
        <!-- <span class="icon-title">Services</span> -->
      </a>
    </div>
    <!-- 
        <div class="">
       
        <a href="services/" class="iconlink icon-services">
          
          <i class="material-icons md-84 md-light settings">&#xE8B8;</i>
          <br />
          <span class="">Services</span>
          
        </a>
      </div>
  
      <div class="">
        <a href="careers.htm" class="iconlink icon-careers">
          <i class="material-icons md-84 md-light business_center">&#xEB3F;</i>
          <br />
          <span class="">Careers</span>
        </a>
      </div>
  
      <div class="">
        <a href="government/connected/" class="iconlink icon-connect">
          <i class="material-icons md-84 md-light forum">&#xE0BF;</i>
          <br />
          <span class="">Connect</span>
        </a>
      </div>
  
      <div class="">
        <a href="participate.htm" class="iconlink icon-participate">
          <i class="material-icons md-84 md-light thumbs_up_down">&#xE8DD;</i>
          <br />
          <span class="">Participate</span>
        </a>
      </div> -->
  </nav>
</template>

<script>
export default {
  name: 'NavIcons',
  data() {
    return {
      serviceLinks: [
        {
          id: 0,
          linkTo: 'services/',
          text: 'Services',
          iconClass: 'settings',
          iconText: '&#xE8B8;',
        },
        {
          id: 1,
          linkTo: 'careers.htm',
          text: 'Careers',
          iconClass: 'business_center',
          iconText: '&#xEB3F;',
        },
        {
          id: 2,
          linkTo: 'government/connected/',
          text: 'Connect',
          iconClass: 'forum',
          iconText: '&#xE0BF;',
        },
        {
          id: 3,
          linkTo: 'participate.htm',
          text: 'Participate',
          iconClass: 'thumbs_up_down',
          iconText: '&#xE8DD;',
        },
      ],
    }
  },
}
</script>

<style scoped>
.service-shadow {
  text-shadow: #000 2px 2px;
}
</style>
