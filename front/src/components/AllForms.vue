<template>
    <div class="all-forms-container hide-list" id="allForms">
        <div class="forms-container">
            <div class="contact--container">
                <div class="contact__title">
                    <h2>TOUTES LES DEMANDES</h2>
                </div>
                <div class="list__container">
                    <div class="content__list" v-for="form in forms" :key="form.id">
                        <div class="date">{{new Date(form.date).toLocaleDateString("fr-FR")}}</div>
                        <div class="mail">{{form.email}}</div>
                        <a href="#" class="accessButton">VOIR</a>
                        <a href="#" class="accessButton">SUPPRIMER</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AllForms",
    data() {
        return {
            forms: []
        }
    },
    methods: {
        getAllForms(){
            const url = "http://localhost:3000/api/forms";
            const options = {
                method: "GET",
                headers: {
                    "Authorization" : "Bearer " + sessionStorage.getItem("token")
                }
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data =>{
                    this.forms = data;
                })
                .catch(error => console.log(error));
        },
    }
}
</script>