<script>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { nextTick } from 'vue';
import { store } from '../store'

export default {
    name: 'AppSwiper',
    data() {
        return {
            store
        };
    },
    mounted() {
        // Inizializza Swiper dopo che il DOM è stato aggiornato
        nextTick(() => {
            new Swiper('.swiper', {
                modules: [Navigation, Pagination],
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        });
    },
};
</script>

<template>
    <div class="swiper">
        <div class="swiper-wrapper mb-5">
            <div class="swiper-slide text-center" v-for="testimonial in store.sections[2].testimonials">
                <div>{{ testimonial.text }}</div>
                <div>{{ testimonial.customer}}</div>
                <div>{{ testimonial.date}}</div>
            </div>
        </div>
        
        <div class="swiper-pagination"></div>
    </div>
</template>

<style scoped lang="scss">
/* Aggiungi stili personalizzati per il componente Swiper */
</style>