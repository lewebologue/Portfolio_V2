<template>
  <div class="home">
    <Topbar/>
    <HeroComp/>
  </div>
</template>

<script>
// @ is an alias to /src

import Topbar from '@/components/Topbar.vue';
import HeroComp from'@/components/HeroComp.vue';

export default {
  name: 'HomeView',
  components: {
    Topbar,
    HeroComp,
  }
}
</script>
