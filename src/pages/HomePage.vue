<template>
    <HeroComponent />
    <FindShade />
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'; 
import FindShade from '../components/FindShade.vue'; 


    export default {
        name: 'HomePage',
        components: {
            HeroComponent,
            FindShade,
        },
    };
</script>

<style lang="scss" scoped>

</style>