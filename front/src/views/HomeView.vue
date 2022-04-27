<template>
  <div class="home">
    <Topbar/>
    <HeroComp/>
    <MainSection/>
  </div>
</template>

<script>
// @ is an alias to /src

import Topbar from '@/components/Topbar.vue';
import HeroComp from '@/components/HeroComp.vue';
import MainSection from '@/components/MainSection.vue';

export default {
  name: 'HomeView',
  components: {
    Topbar,
    HeroComp,
    MainSection,
  }
}
</script>
