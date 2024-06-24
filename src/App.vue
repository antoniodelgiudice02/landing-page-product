<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppJumbo from './components/layout/main/AppJumbo.vue';
import AppAbout from './components/layout/main/AppAbout.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default{
  data(){
    return{

    }
  },

  components: {AppHeader, AppFooter, AppJumbo,AppAbout}
}
</script>

<template>
  
  <AppHeader></AppHeader>
  <main>
    <AppJumbo></AppJumbo>
    <AppAbout></AppAbout>
  </main>
  <AppFooter></AppFooter>

</template>

<style scoped lang="scss">

</style>
