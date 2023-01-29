<template>
    <HeroComponent />
    <FindShade />
    <SliderChosenForU/>
    <AboutComponent />
    <DiscoverComponent/>
    

</template>

<script>
import HeroComponent from '../components/HeroComponent.vue'; 
import FindShade from '../components/FindShade.vue'; 
import SliderChosenForU from '../components/SliderChosenForU.vue';
import AboutComponent from '../components/AboutComponent.vue'; 
import DiscoverComponent from '../components/DiscoverComponent.vue'; 
import ProductCard from '../components/ProductCard.vue';



    export default {
        name: 'HomePage',
        components: {
    HeroComponent,
    FindShade,
    SliderChosenForU,
    AboutComponent,
    DiscoverComponent,
    ProductCard,
   
},
    };
</script>

<style lang="scss" scoped>

</style>