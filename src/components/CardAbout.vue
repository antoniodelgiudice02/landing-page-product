<script>
export default {
    data() {
        return {


        }
    },

    props: {
        text: String,
        title: String,
    },

}
</script>

<template>

    <div class="card text-center">
        <div class="card-header">
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
    }

    .card-body {
        padding: 0;
        margin-top: 10px;
    }
}
</style>