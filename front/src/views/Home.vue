<template>
    <Topbar/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import TopBar from '@/components/TopBar.vue'; // @ is an alias to /src

export default defineComponent{
    name: 'HomeView',
    components: {
        Topbar,
    },
};
</script>