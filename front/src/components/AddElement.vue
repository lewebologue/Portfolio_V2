<template>
    <div class="add-main-container hide" id="addForm">
        <div class="container">
            <div class="container--title">
                <h2>AJOUTER UN ELEMENT</h2>
            </div>
            <div class="addForm__container">
                <form onsubmit="sendForm()">
                    <input type="text" name="title" placeholder="Titre" required >
                    <textarea name="description" placeholder="Description" required ></textarea>
                    <input type="file" placeholder="Image" ref="image" name="image" id="image" accept="image/*" aria-label="Ajout d'une image">
                    <div class="stackCheck">
                        <input type="checkbox" name="stack" value="stack" id="stackH" >
                        <label for="stackH">HTML</label>
                    </div>
                    <div class="stackCheck">
                        <input type="checkbox" name="stack" value="stack" id="stackC" >
                        <label for="stackC">CSS</label>
                    </div>
                    <div class="stackCheck">
                        <input type="checkbox" name="stack" value="stack" id="stackJS">
                        <label for="stackJS">JS</label>
                    </div>
                    <input type="text" name="url" placeholder="Lien vers le site">
                    <input type="submit" value="AJOUTER">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddElement",
}
</script>