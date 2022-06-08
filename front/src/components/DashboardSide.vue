<template>
    <aside class="side--container">
        <div class="sidelink">
            <button @click.prevent="hideMainContainer()">AJOUTER UN ELEMENT</button>
        </div>
        <div class="sidelink">
<<<<<<< HEAD
            <button @click.prevent="AllFormsAccess()">DEMANDES DE CONTACT</button>
=======
            <button @click="AllFormsAccess()">DEMANDES DE CONTACT</button>
>>>>>>> aaf6d18f0d85dcd8c8dff21c8067d29c995f38f0
        </div>
    </aside>
</template>

<script>
export default {
    name: "DashboardSide",
    methods: {
        hideMainContainer() {
            document.getElementById("mainDash").classList.add('hide');
            document.getElementById("addForm").classList.remove('hide');
        },
        AllFormsAccess(){
            document.getElementById("mainDash").classList.add('hide');
            document.getElementById("allForms").classList.remove('hide-list');
        }
    },
}
</script>