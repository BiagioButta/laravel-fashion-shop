<template>


    <!--     <div class="col mb-5">
        <div class="card h-100">
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <img :src="`${store.imagBasePath}${product.image}`" class="card-img-top"
                style="weight: 250px; height:350px">
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">{{ product.name }}</h5>
                    <p>{{truncate(product.description)}}</p>
                    <h6 class="text-uppercase">{{ product.brand.name }}</h6>
                    <button class="btn btn-outline-dark" style="width: 15rem">
            
                    <div>
                        <div class="fw-bold">Add to Bag</div>
                        <div class="fw-bold"> &euro; {{ product.price }}</div>
                    </div>

                    </button>
                    
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <router-link class="text-center" :to="{ name: 'single-products', params: { slug: product.slug } }"><a
                    class="btn btn-outline-dark mt-auto" href="#">Show more</a></router-link>
            </div>
        </div>
    </div>

 -->


    <section class="cards">
        <div class="col mb-5">
            <article class="card card--1">
                <div class="card__img"></div>
                <a href="#" class="card_link">
                    <div class="card__img--hover"><img :src="`${store.imagBasePath}${product.image}`"
                            class="card-img-top" style="weight: 250px; height:350px"></div>
                </a>
                <div class="card__info">
                    <span class="card__category"> {{ product.brand.name }}</span>
                    <h3 class="card__title">{{ product.name }}</h3>
                    <span class="card__by">Prezzo: <a class="card__author" title="author">{{ product.price }}
                            €</a></span>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                        <router-link class="text-center"
                            :to="{ name: 'single-products', params: { slug: product.slug } }"><button
                                class="button mt-2" href="#">Scopri</button></router-link>
                    </div>
                </div>
            </article>
        </div>
    </section>



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
            if (description.length > this.maxLength) {
                return description.substr(0, this.maxLength) + '...'
            }
            return description;
        }
    },

}
</script>

<style lang="scss" scoped>

</style>