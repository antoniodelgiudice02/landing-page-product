<script>
export default {
    data() {
        return {

            isCollapsed: true,

        }
    },

    props: {
        question: String,
        answer: String,
        index: String
    },

    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }


}
</script>

<template>

    <p class="d-flex justify-content-between gap-1" @click="toggleCollapse">

        <a data-bs-toggle="collapse" :href="'#' + index" role="button" aria-expanded="false" :aria-controls="index">
            {{ question }}
        </a>

        <button class="btn text-start" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + index"
            aria-expanded="false" :aria-controls="index">
            {{ isCollapsed ? '+' : '-' }}
        </button>

    </p>
    <div class="collapse" :id="index">
        <div class="card card-body">
            {{ answer }}
        </div>
    </div>

</template>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: black;
}

.btn {
    border: none;
}
</style>