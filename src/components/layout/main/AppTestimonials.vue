<script>
import { store } from '../../../store';
import AppSwiper from '../../AppSwiper.vue'


export default {
    data() {
        return {

            store,

        }
    },

    components: { AppSwiper }


}
</script>

<template>

    <section id="testimonials">

        <div class="container">
            <h1 class="text-center">{{ store.sections[2].title }}</h1>
            <div class="row">
                <div class="col p-3">

                    <AppSwiper></AppSwiper>

                </div>
            </div>
        </div>

    </section>

</template>

<style scoped lang="scss"></style>