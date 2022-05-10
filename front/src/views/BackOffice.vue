<template>
    <main>
        <TopBar/>
        <section class="main--dashsection">
            <DashboardSide/>
            <AddElement/>
            <div class="main--container" id="mainDash">
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
                            <div class="content__list list__child-container"  v-for="element in elements" :key="element.id">
                                <div class="content__title">
                                    <div class="name">{{element.title}}</div>
                                </div>
                                <div class="content__icon">
                                    <a href="#" class="accessIcon"><i class="fa-solid fa-eye"></i></a>
                                    <a href="#" class="accessIcon"><i class="fa-solid fa-pen-to-square"></i></a>
                                    <a href="#" class="accessIcon" @click="deleteElement(element._id)"><i class="fa-solid fa-trash-can"></i></a>
                                </div>
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
import DashboardSide from '@/components/DashboardSide.vue';
import AddElement from '@/components/AddElement.vue';

export default {
    name: "BackOffice",
    components: {
        TopBar,
        DashboardSide,
        AddElement,
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
        },
        getAllContent(){
            const url = "http://localhost:3000/api/content"
            const options = {
                method: "GET",
                headers: {
                    "Authorization" : "Bearer " + sessionStorage.getItem("token")
                }
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data =>{
                    this.elements = data;
                })
                .catch(error => console.log(error));
        },
        deleteElement(_id){
            const url = "http://localhost:3000/api/content/" + _id;
            const options = {
                method : "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : "Bearer " + sessionStorage.getItem("token")
                },
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data =>{
                    this.elements = data;
                    window.location.reload();
                })
                .catch(error => console.log(error));
        }
    },
    created: function(){
        this.getAllForms();
        this.getAllContent();
    }
}
</script>
