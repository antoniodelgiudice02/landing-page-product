<script>
import { store } from '../../../store'
import CollapseFaqs from '../../CollapseFaqs.vue'
import CardFAQ from '../../CardFAQ.vue'
export default {
    data() {
        return {
            store,
            index: false,
        }
    },

    components: { CollapseFaqs, CardFAQ },


}
</script>

<template>

    <section id="about">

        <div class="container">
            <div class="img-container">
                <img src="../../../assets/imgs/single-image2.png" class="w-100" alt="">
            </div>
            <h1> {{ store.sections[4].title }}</h1>
            <div class="row flex-column">
                <div class="col" v-for="(FAQ, index) in store.sections[4].FAQs" :key="index">
                    <CollapseFaqs :question="FAQ.question" :answer="FAQ.answer" :index="'faq-' + index"></CollapseFaqs>
                </div>
            </div>
            <div class="row flex-column">
                <div class="col" v-for="card in store.sections[4].Cards">
                    <CardFAQ :title="card.title" :text="card.text" :icon="card.icon"></CardFAQ>
                </div>
            </div>
        </div>

    </section>


</template>

<style scoped lang="scss"></style>