<template>


    <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img :src="`${store.imagBasePath}${product.image}`" class="card-img-top"
                style="weight: 300px; height:450px">
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">{{ product.name }}</h5>
                    <!-- Product price-->
                    {{ product.price }} €
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <router-link class="text-center" :to="{ name: 'single-products', params: { slug: product.slug } }"><a
                        class="btn btn-outline-dark mt-auto" href="#">Scopri</a></router-link>
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
            store
        }
    }

}
</script>

<style lang="scss" scoped>

</style>