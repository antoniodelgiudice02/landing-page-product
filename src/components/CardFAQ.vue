<script>
export default {
    data() {
        return {


        }
    },

    props: {
        text: String,
        title: String,
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

    <div class="card text-center">
        <div class="card-header">
            <svg class="icon">
                <use :href="getIcon()"></use>
            </svg>

            {{ title }}
        </div>
        <div class="card-body">
            {{ text }}
        </div>
    </div>

</template>

<style scoped lang="scss">
.card {
    border: none;
    margin: 20px 0;

    .card-header {
        border: none;
        background-color: rgba(240, 248, 255, 0);
        font-weight: bold;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
    }

    .card-body {
        padding: 0;
        margin-top: 10px;
    }
}
</style>