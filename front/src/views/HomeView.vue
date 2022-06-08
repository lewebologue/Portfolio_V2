<template>
  <div class="home">
    <Topbar/>
    <HeroComp/>
    <MainSection/>
    <AboutSection/>
    <FooterSection/>
  </div>
</template>

<script>

import Topbar from '@/components/Topbar.vue';
import HeroComp from '@/components/HeroComp.vue';
import MainSection from '@/components/MainSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    Topbar,
    HeroComp,
    MainSection,
    AboutSection,
    FooterSection,
  }
}
</script>
