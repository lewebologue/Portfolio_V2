<template>
    <div class="main--container">
        <div class="container__title">
            <h2>PORTFOLIO</h2>
        </div>
        <div class="card--container" v-for="element in elements" :key="element.id">
            <div class="card__image">
                <img :src="element.image" alt="photo du site">
            </div>
            <div class="card__text">
                <div class="card__description">
                    <div class="card__title">
                        <h2>{{element.title}}</h2>
                        <p>{{element.description}}</p>
                    </div>
                    <!--div class="card__stack">
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3-alt"></i>
                        <i class="fab fa-js-square"></i>
                    </div-->
                </div>
                <div class="card__button">
                    <a href="#">Voir plus</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainSection',
    components: {
    },
    data(){
        return{
            elements: []
        }
    },
    mounted() {
        const url = "http://localhost:3000/api/content/"
        const options = {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            } 
        };
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            this.elements = data;
        })
        .catch(error => console.log(error));
    },
};
</script>