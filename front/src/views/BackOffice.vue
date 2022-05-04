<template>
    <main>
        <TopBar/>
        <section class="main--dashsection">
            <aside class="side--container">
                <div class="sidelink">
                    <button>DEMANDES DE CONTACT</button>
                </div>
                <div class="sidelink">
                    <button>AJOUTER UN ELEMENT</button>
                </div>
            </aside>
            <div class="main--container">
                <div>
                    <div class="contact--container">
                        <div class="contact__title">
                            <h2>DERNIERES DEMANDES</h2>
                        </div>
                        <div class="list__container">
                            <div class="content__list" v-for="form in forms" :key="form.id">
                                <div class="date">{{new Date(form.date).toLocaleDateString("fr-FR")}}</div>
                                <div class="mail">{{form.email}}</div>
                                <a href="#" class="accessButton">VOIR</a>
                            </div>
                            <div class="allButton">
                                <a class="btn">TOUT VOIR</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="contact--container">
                        <div class="contact__title">
                            <h2>DERNIERS ELEMENTS</h2>
                        </div>
                        <div class="list__container">
                            <div class="content__list">
                                <div class="name"></div>
                                <a href="#" class="accessButton">VOIR</a>
                                <a href="#" class="accessButton">MODIFIER</a>
                                <a href="#" class="accessButton">SUPPRIMER</a>
                            </div>
                            <div class="allButton">
                                <a class="btn">TOUT VOIR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TopBar from '@/components/Topbar.vue';

export default {
    name: "BackOffice",
    components: {
        TopBar,
    },
    
    data() {
        return {
          forms: [],
          elements: []  
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
        }
    },
    created: function(){
        this.getAllForms();
    }
}
</script>
