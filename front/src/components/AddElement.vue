<template>
    <div class="add-main-container hide" id="addForm">
        <div class="container">
            <div class="container--title">
                <h2>AJOUTER UN ELEMENT</h2>
            </div>
            <div class="addForm__container">
                <form onsubmit="sendForm()" class="addform">
                    <input type="text" placeholder="Titre" name="title" id="title" required v-model="title" aria-label="titre">
                    <textarea name="description" placeholder="Description" id="description" required v-model="description"></textarea>
                    <input type="text" name="url" placeholder="Lien vers le site" v-model="url">
                    <input type="file" placeholder="Importez votre image" ref="imageUrl" name="image" id="imageUrl" accept="image/*" aria-label="Ajout d'une image">
                    <input type="submit" @click.prevent="sendContent()" value="AJOUTER">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddElement",
    data(){
        return {
            title: "",
            description: "",
            url: ""
        }
    },
    methods: {
        sendContent : function(){
            if(this.title == "" || this.description == "" || this.url == ""){
                alert("Veuillez remplir tous les champs");
            }else{
                let input = document.getElementById("imageUrl");
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('description', this.description);
                formData.append('url', this.url);
                formData.append('image', input.files[0]);

                const url = "http://localhost:3000/api/content/new";
                const options = {
                    method: "POST",
                    body: formData,
                    headers: {
                        //"Content-Type": "multipart/form-data",
                        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                    }
                }
                fetch(url, options)
                .then(()=>alert("Votre contenu a bien été ajouté"))
                .catch(error => console.error({cause: error}))
            }
        },
    }
}
</script>