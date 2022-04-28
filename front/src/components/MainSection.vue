<template>
    <div class="main--container">
        <div class="card--container">
            <div class="card__image">
                <img src="../../src/assets/img/portfolio/cabin.png" alt="">
            </div>
            <div class="card__text">
                <div class="card__description">
                    <div class="card__title">
                        <h2>RESERVIA</h2>
                        <p>Lorem ipsum sit dolor bqmfjlssfbs s sbskjbv ssvjbs vkssvsv </p>
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
        const url = "http://localhost:3000/content"
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