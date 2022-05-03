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
                            <div class="content__list">
                                <div class="date">02/05/2022</div>
                                <div class="mail">test@mail.com</div>
                                <a href="#" class="accessButton">VOIR</a>
                            </div>
                            <div class="allButton">
                                <a class="allButton">TOUT VOIR</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="contact--container">
                        <div class="contact__title">
                            <h2>DERNIERS ELEMENTS</h2>
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

        }
    },
}
</script>
