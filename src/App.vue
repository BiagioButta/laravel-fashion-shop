<template>
  <div class="">
    <AppHeader></AppHeader>
    
    <main>
      <router-view></router-view>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from './components/HeaderComponent.vue';
  import AppFooter from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components:{
      AppHeader,
      AppFooter
    }

  }

</script>

<style lang="scss" scoped>

</style>
