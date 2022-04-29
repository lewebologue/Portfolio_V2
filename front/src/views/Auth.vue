<template>
    <section>
        <div class="login">
            <form v-on:submit.prevent="login" class="loginForm">
                <input type="email" name="email" placeholder="Email" required v-model="loginInput.email" aria-label="email">
                <input type="password" name="pswd" placeholder="Mont de passe" required v-model="loginInput.password" minlength="8" aria-label="mot de passe">
                <button>Connexion</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            loginInput:{
                "email" : "",
                "pawword": "",
            },
        }
    },
    methods: {
        login(){
            const credentials = {
                "email" : this.loginInput.email,
                "password": this.loginInput.pawword
            }

            const url = "http://localhost:3000/api/auth/login";
            const options = {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: { 'Content-type': 'application/json'}
            };
            fetch(url,options)
                .then(res =>res.json())
                .then(res =>{
                    if(res.userId && res.token){
                        sessionStorage.setItem("userId", res.userId),
                        sessionStorage.setItem("token", res.token),
                        sessionStorage.setItem("isAdmin", res.isAdmin)
                        this.$router.push('/admin')
                    } else{
                        alert("Identifiants incorrects")
                    }
                })
            .catch(error => console.log(error))
        }
    },  
}
</script>