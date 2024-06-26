<script>
import { store } from '../../../store';
import ContactsIcons from '../../ContactsIcons.vue'



export default {
    data() {
        return {

            store,

        }
    },

    components: {
        ContactsIcons
    }



}
</script>

<template>

    <section id="subscribe">

        <div class="container text-center mt-5">

            <h1>{{ store.sections[5].title }}</h1>
            <p>{{ store.sections[5].text }}</p>

            <div class="row">
                <div class="col">

                    <form action="">

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Lascia qui la tua mail..."
                                aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn d-flex justify-content-end" type="button" id="button-addon2">
                                <svg class="icon w-100">
                                    <use href="../../../assets/icons.svg#send"></use>
                                </svg>
                            </button>
                        </div>

                    </form>

                </div>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-1 p-0" v-for="icon in store.sections[5].icons">
                    <ContactsIcons :icon="icon.icon"></ContactsIcons>
                </div>
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

@import '../../../assets/style/variables';
h1{
    margin-bottom: $h1-margin-bottom;
}
#subscribe {
    background-color: #f8f8f8;

    .input-group {
        border-bottom: 1px solid rgb(192, 192, 192);
        margin-top: 50px;

        button {
            width: 15%;
        }

        input,
        button {
            border: none;
            border-radius: 0;

            svg {
                height: 30px;
            }
        }
    }

    .col-1 {
        margin: 0 10px;
    }

}
</style>