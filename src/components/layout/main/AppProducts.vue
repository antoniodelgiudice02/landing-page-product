<script>
import { store } from '../../../store';
import CardProducts from '../../CardProducts.vue'



export default {
    data() {
        return {

            store,

        }
    },

    components: {CardProducts}


}
</script>

<template>

    <section id="products">

        <div class="container">
            <h1>{{ store.sections[3].title }}</h1>
            <div class="row">
                <div class="col-12" v-for="duck in store.sections[3].ducks">
                    <CardProducts :img="duck.img" :name="duck.name" :price="duck.price"></CardProducts>

                </div>
            </div>
        </div>

    </section>

</template>

<style scoped lang="scss"></style>