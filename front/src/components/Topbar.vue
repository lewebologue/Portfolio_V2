<template>
    <div class="topbar--container">
        <div class="topbar__title">
            <h1>LUDOVIC THUARD</h1>
        </div>
        <div class="topbar__menu" v-if="(isAdmin == true)">
            <h3>test</h3>
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
    }
};
</script>