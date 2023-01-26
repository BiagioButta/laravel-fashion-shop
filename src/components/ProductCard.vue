<template>
    <div class="card">
        <!--         <img :src="`${store.imageBasePath}${post.cover_image}`" class="card-img-top">
 -->
        <div class="card-body text-center">
            <h5 class="card-title py-3 text-capitalize">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <router-link class="btn btn-primary" :to="{ name: 'single-products', params: { slug: product.slug } }">
                Vedi il post
            </router-link>
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