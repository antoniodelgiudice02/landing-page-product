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

    <section id="Faqs">

        <div class="container">

            <div class="row">

                <div class="col-12 col-md-6">
                    <div class="img-container w-100">
                        <img src="../../../assets/imgs/single-image2.png" class="w-100" alt="">
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="row flex-column">
                        <h1> {{ store.sections[4].title }}</h1>

                        <div class="col" v-for="(FAQ, index) in store.sections[4].FAQs" :key="index">
                            <CollapseFaqs :question="FAQ.question" :answer="FAQ.answer" :index="'faq-' + index">
                            </CollapseFaqs>
                        </div>
                    </div>
                </div>

            </div>



            <div class="row flex-column flex-md-row">
                <div class="col col-md-4" v-for="card in store.sections[4].Cards">
                    <CardFAQ :title="card.title" :text="card.text" :icon="card.icon"></CardFAQ>
                </div>
            </div>
        </div>

    </section>


</template>

<style scoped lang="scss">

@import '../../../assets/style/variables';
h1{
    margin-bottom: $h1-margin-bottom;
}

img{
    width: 75%;
}

</style>