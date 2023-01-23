<template>
  <div class="container">
    <AppHeader></AppHeader>
  
    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
  import AppHeader from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components:{
      AppHeader
    }

  }

</script>

<style lang="scss" scoped>

</style>
