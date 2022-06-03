<template>
    <aside class="side--container">
        <div class="sidelink">
            <button @click.prevent="hideMainContainer()">AJOUTER UN ELEMENT</button>
        </div>
        <div class="sidelink">
            <button>DEMANDES DE CONTACT</button>
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