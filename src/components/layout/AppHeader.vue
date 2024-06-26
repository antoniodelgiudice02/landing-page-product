<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },

        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }

}
</script>

<template>

    <header>

        <div class="container h-100">
            <div class="row justify-content-between align-items-center px-3 h-100">
                <div class="col-2" id="logo">
                    <img src="../../assets/imgs/logo.png" alt="">
                </div>
                <div class="col" id="menu">
                    <ul class="d-md-flex d-none justify-content-end">
                        <li @click="scrollToTop()">Home</li>
                        <li @click="scrollToSection('about')">I Punti di Forza</li>
                        <li @click="scrollToSection('testimonials')">Recensioni</li>
                        <li @click="scrollToSection('products')">Paperelle</li>
                        <li @click="scrollToSection('Faqs')">FAQs</li>
                        <li @click="scrollToSection('subscribe')">Newsletter</li>
                    </ul>

                    <div class="d-md-none text-end ">
                        <button class="btn" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            MENU
                        </button>
                    </div>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <div class="col-2" id="logo">
                                <img src="../../assets/imgs/logo.png" alt="">
                            </div>
                            <button type="button" class="btn-close me-3" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                <ul class=" justify-content-end">
                                    <li @click="scrollToTop()" data-bs-dismiss="offcanvas" aria-label="Close">Home</li>
                                    <li @click="scrollToSection('about')" data-bs-dismiss="offcanvas"
                                        aria-label="Close">I Punti di Forza</li>
                                    <li @click="scrollToSection('testimonials')" data-bs-dismiss="offcanvas"
                                        aria-label="Close">Recensioni</li>
                                    <li @click="scrollToSection('products')" data-bs-dismiss="offcanvas"
                                        aria-label="Close">Paperelle</li>
                                    <li @click="scrollToSection('Faqs')" data-bs-dismiss="offcanvas" aria-label="Close">
                                        FAQs</li>
                                    <li @click="scrollToSection('subscribe')" data-bs-dismiss="offcanvas"
                                        aria-label="Close">Newsletter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>

</template>

<style scoped lang="scss">
.debug {
    border: 1px solid black;
}

header {
    background-color: white;
    height: 80px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            cursor: pointer;
            margin: 0 10px;
        }
    }

    .offcanvas {
        li {
            margin-top: 20px;
        }
    }

}
</style>