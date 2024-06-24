<script>


export default {
    data() {
        return {

        }
    },

    props: {
        img: String,
        price: String,
        name: String
    },

    methods: {
        getImage() {
            return new URL('../assets/imgs/' + this.img, import.meta.url).href
        }
    }


}
</script>

<template>

    <div class="card">
        <div class="card-header">
            <div class="img-container">
                <img class="w-100" :src="getImage()" alt="">
            </div>

        </div>
        <div class="card-body">
            <div>
                {{ name }}
            </div>
            <div>
                $ {{ price }}
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.card {

    border: none;

    .card-header {
        background-color: rgba(255, 222, 173, 0);
        border: none;

    }
}
</style>