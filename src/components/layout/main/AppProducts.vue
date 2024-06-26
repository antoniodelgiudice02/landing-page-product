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
            <h1 class="text-center">{{ store.sections[3].title }}</h1>
            <div class="text-center">Una papera per ogni stile di programmazione</div>
            <div class="row">
                <div class="col-12 col-md-4" v-for="duck in store.sections[3].ducks">
                    <CardProducts :img="duck.img" :name="duck.name" :price="duck.price"></CardProducts>

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

#products{
    background-color: #f8f8f8;

    
}
</style>