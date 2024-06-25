<script>
export default {
    data() {
        return {


        }
    },

    props: {
        icon: String
    },

    methods: {
        getIcon() {
            return new URL('../assets/icons.svg#' + this.icon, import.meta.url).href
        }
    }



}
</script>

<template>

    <svg class="">
        <use :href="getIcon()"></use>
    </svg>

</template>

<style scoped lang="scss">

svg{
    border: 1px solid rgb(191, 191, 191);
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 5px;
    color: #04DF6C;
    width: 85%;
}
</style>