<template>
    <div class="topbar--container dashboard">
        <div class="topbar__title" v-if="this.isAdmin === 'true'">
            <img src="../../src/assets/img/avataaars.svg" alt="avatar">
        </div>
        <div class="topbar__title" v-else>
            <h1>LUDOVIC THUARD</h1>
        </div>
        <div class="topbar__menu" v-if="this.isAdmin === 'true'">
            <router-link to="/admin" title="Home" @click="resetDashboard"><p>ACCUEIL DASHBOARD</p></router-link>
            <router-link to="/" target="_blank" title="Home"><p>VOIR LE SITE</p></router-link>
            <a title="Disconnect" @click="disconnect()">DECONNEXION</a>
        </div>
        <div class="topbar__menu" v-else>
            <a href="#">PORTFOLIO</a>
            <a href="#">A PROPOS</a>
            <a href="#">CONTACT</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    components: {
    },
    data(){
        return{
            isAdmin : sessionStorage.getItem("isAdmin")
        }
    },
    methods:{
        disconnect(){ //Déconnexion
            sessionStorage.clear();
            this.$router.push('/');
        },
        resetDashboard(){ //Reset dashboard
            document.getElementById("mainDash").classList.remove('hide');
            document.getElementById("addForm").classList.add('hide');
        },
    },
}
</script>