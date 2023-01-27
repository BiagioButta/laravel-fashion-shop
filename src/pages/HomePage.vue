<template>
    <HeroComponent />
    <FindShade />
    <AboutComponent />

</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'; 
import FindShade from '../components/FindShade.vue'; 
import AboutComponent from '../components/AboutComponent.vue'; 


    export default {
        name: 'HomePage',
        components: {
            HeroComponent,
            FindShade,
            AboutComponent,
        },
    };
</script>

<style lang="scss" scoped>

</style>