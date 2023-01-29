<template>


    <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img :src="`${store.imagBasePath}${product.image}`" class="card-img-top"
                style="weight: 250px; height:350px">
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">{{ product.name }}</h5>
                    <!-- Product description -->
                    <p>{{truncate(product.description)}}</p>
                    <!-- Product brand -->
                    <h6 class="text-uppercase">{{ product.brand.name }}</h6>
                    <!-- Product price-->
                    <button class="btn btn-outline-dark" style="width: 15rem">
            
                    <div>
                        <div class="fw-bold">Add to Bag</div>
                        <div class="fw-bold"> &euro; {{ product.price }}</div>
                    </div>

                    </button>
                    
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <router-link class="text-center" :to="{ name: 'single-products', params: { slug: product.slug } }"><a
                    class="btn btn-outline-dark mt-auto" href="#">Show more</a></router-link>
            </div>
        </div>
    </div>




</template>

<script>
import { store } from '../store';
export default {
    name: 'ProductCard',
    props: ['product'],
    data() {
        return {
            store,
            maxLength: 70,
        }
    },
    methods: {
        truncate(description) {
            if (description.length > this.maxLength){
                return description.substr(0, this.maxLength) + '...'
            }
            return description;
        }
    },

}
</script>

<style lang="scss" scoped>

    
  

</style>