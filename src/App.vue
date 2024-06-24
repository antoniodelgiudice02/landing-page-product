<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppJumbo from './components/layout/main/AppJumbo.vue';
import AppAbout from './components/layout/main/AppAbout.vue';
import AppTestimonials from './components/layout/main/AppTestimonials.vue';
import AppProducts from './components/layout/main/AppProducts.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default{
  data(){
    return{

    }
  },

  components: {AppHeader, AppFooter, AppJumbo,AppAbout, AppTestimonials, AppProducts}
}
</script>

<template>
  
  <AppHeader></AppHeader>
  <main>
    <AppJumbo></AppJumbo>
    <AppAbout></AppAbout>
    <AppTestimonials></AppTestimonials>
    <AppProducts></AppProducts>
  </main>
  <AppFooter></AppFooter>

</template>

<style scoped lang="scss">

</style>
