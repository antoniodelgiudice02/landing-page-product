<script>
import { store } from '../../../store'
import CardAbout from '../../CardAbout.vue'
export default {
    data() {
        return {
            store,
            i: false,
        }
    },

    components: { CardAbout },
}
</script>

<template>

    <section id="about">
        <div class="container my-5">
            <div class="row align-items-center flex-column flex-md-row">
                <div class="col">
                    <div class="row flex-column">
                        <div class="col" v-for="card in store.sections[1].cards.slice(0, 3)">
                            <CardAbout :title="card.title" :text="card.text"></CardAbout>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row flex-column">

                        <div class="col">
                            <div class="img-container">
                                <img src="../../../assets/imgs/invisible.png" alt="" class="w-100">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row flex-column">

                        <div class="col" v-for="card in store.sections[1].cards.slice(3, 6)">
                            <CardAbout :title="card.title" :text="card.text"></CardAbout>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    </section>


</template>

<style scoped lang="scss">
.col {
    margin: 15px 0;

    .card {
        text-align: center;
        border: none;

        .card-header {
            background-color: rgba(255, 255, 255, 0);
            border: none;
            font-weight: bold;
        }
    }
}
</style>