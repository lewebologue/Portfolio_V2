<template>
    <div class="form-main-container">
        <div class="form__image">
            <iframe src="https://embed.lottiefiles.com/animation/90451"></iframe>
        </div>
        <div class="form__container">
            <form id="contact-form" v-on:submit.prevent="postForm">
                <input id="name" type="text" placeholder="Nom" v-model="lastName" required>
                <input id="fistname" type="text" placeholder="Prénom" v-model="firstName" required>
                <input id="email" type="email" placeholder="Email" v-model="email" required>
                <input id="phone" type="tel" placeholder="Téléphone" v-model="phone" required>
                <input id="company" type="text" placeholder="Entreprise" v-model="company">
                <textarea id="message" placeholder="Message" v-model="message" required></textarea>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: ContactForm,
}
</script>