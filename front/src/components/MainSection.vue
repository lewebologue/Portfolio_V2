<template>
    <div class="main--container">
        <h2>PORTFOLIO</h2>
        <div class="card--container" v-for="element in elements" :key="element.id">
            <div class="card__image">
                <img src="{{element.image}}" alt="{{element.altTxt}}">
            </div>
            <div class="card__text">
                <div class="card__description">
                    <div class="card__title">
                        <h2>{{element.title}}</h2>
                        <p>{{element.description}}</p>
                    </div>
                    <div class="card__stack">
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3-alt"></i>
                        <i class="fab fa-js-square"></i>
                    </div>
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