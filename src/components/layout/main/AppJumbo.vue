<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<template>

    <section id="jumbo">
        <div class="container p-0">
            <div class="row flex-column">

                <div class="col img-container">

                    <img src="../../../assets/imgs/banner-image.png" alt="">

                </div>

                <div class="col">

                    <div class="j-text-container d-flex justify-content-center align-items-center flex-column p-5 text-center">

                        <h1>RUBBER DUCK DEBUGGINGS</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae voluptate neque quae dolore, eos similique cupiditate ipsa laboriosam ut.</p>

                        <div class="btn">
                            COMPRA ORA!
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>


</template>

<style scoped lang="scss">
.col {


    img {
        width: 100%;
    }

    .j-text-container {
        height: 400px;
        background-image: url('../../../assets/imgs/banner-bg.png');

        .btn{
            border: 1px solid black;
            border-radius: 0;
        }
    }
}
</style>