<template>
    <HeroComponent />
    <FindShade />
    <AboutComponent />
    <DiscoverComponent/>

</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'; 
import FindShade from '../components/FindShade.vue'; 
import AboutComponent from '../components/AboutComponent.vue'; 
import DiscoverComponent from '../components/DiscoverComponent.vue'; 


    export default {
        name: 'HomePage',
        components: {
            HeroComponent,
            FindShade,
            AboutComponent,
            DiscoverComponent,
        },
    };
</script>

<style lang="scss" scoped>

</style>