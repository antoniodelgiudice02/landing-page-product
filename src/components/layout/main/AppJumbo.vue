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
        <div class="container p-0 m-0">
            <div class="row flex-column flex-md-row">

                <div class="col col-md-6 img-container p-0">

                    <div class="img-container">
                        <img src="../../../assets/imgs/banner-image.png" alt="">

                    </div>


                </div>

                <div class="col col-md-6 p-0">

                    <div
                        class="j-text-container d-flex justify-content-center align-items-center flex-column p-5 text-center">

                        <h1>RUBBER DUCK DEBUGGINGS</h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae voluptate neque
                            quae dolore, eos similique cupiditate ipsa laboriosam ut.</p>

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
.container {
    min-width: 100vw;


    .col {

        .img-container {
            aspect-ratio: 1;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }

        }



        .j-text-container {
            aspect-ratio: 1;
            height: 100%;
            background-image: url('../../../assets/imgs/banner-bg.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            .btn {
                border: 1px solid black;
                border-radius: 0;
            }
        }
    }
}
</style>