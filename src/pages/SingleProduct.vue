<template>
    <!-- Product section-->
    <section class="py-5" v-if="product">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 ">
                <div class="col-md-6 left">
                    <div class="img"><img class="card-img-top mb-5 mb-md-0"
                            :src="`${store.imagBasePath}${product.image}`" :alt="product.name"></div>
                    <div class="btn-slider">
                        <button><i class="fa-solid fa-camera"></i> Find Your Shade</button>
                    </div>
                    <div>
                        <h4>Product Details</h4>
                        <p>What it is: In the land between bare skin and makeup makeup exists the imperceptible wash of
                            color that is Perfecting Skin Tin</p>
                    </div>
                    <hr class="hr">
                    <div>
                        <h5>Why it is special :</h5>
                        <ul>
                            <li> Breathable, ultra-thin formula evens out skin's appearance for a smooth, dewy finish
                            </li>
                            <li>Diamond Powder gives a brightening, soft-focus effect and minimizes the appearance of
                                pores, while Glycerin moisturizes skin</li>
                        </ul>
                    </div>

                </div>
                <div class="col-md-6 right">
                    <div class="destra">
                        <h1 class="display-5 fw-bolder">{{ product.name }}</h1>
                        <div class="fs-5 mb-5">
                            <p class="display-6">{{ product.price }} €</p>
                            <div>
                <div class="destra">
                    <h1 class="display-5 fw-bolder">{{ product.name }}</h1>
                    <div class="fs-5 mb-5">
                        <span>{{ product.price }} €</span>
                        <div >
                            <span v-for="n in 4"><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star-half"></i></span>
                            <span>  (4.5) (2456 reviews)</span>
                        </div>
                    </div>
                    <p class="lead">{{ product.description }}</p>
                    <div class="d-flex">
                        <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                            style="max-width: 3rem" />
                        <button class="btn-bag" type="button" data-name="{{ product.name }}" data-price="{{ product.price }}">    <!-- QUA -->
                            <i class="bi-cart-fill me-1"></i>
                            Add to Bag € {{ product.price }} 
                        </button>
                        
                    </div>
                    <div class="return">
                            <span><a href="#">Free & Easy Return</a></span>
                    </div>
                    <hr>
                    <div>
                        <div>
                            <h2>Review Highlights</h2>
                        </div>
                        <div  v-for="n in 2" class="card-review">
                            <div class="card-review-head">
                                <span v-for="n in 4"><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star-half"></i></span>
                                <span> (4.5) (2456 reviews)</span>
                            </div>
                        </div>
                        <p class="lead">{{ product.description }}</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                                style="max-width: 3rem" />
                            <button class="button bg-black text-white w-50" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to Bag € {{ product.price }}
                            </button>

                        </div>
                        <div class="return">
                            <span><a href="#">Free & Easy Return</a></span>
                        </div>
                        <hr>
                        <div>
                            <div>
                                <h2>Review Highlights</h2>
                            </div>
                            <div v-for="n in 2" class="card-review">
                                <div class="card-review-head">
                                    <span v-for="n in 4"><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star-half"></i></span>
                                    <span> (4.5)</span>
                                </div>
                                <div class="card-review-body">
                                    <p>
                                        I m surprised I don t see this recommended for older skin all the time. I love
                                        the way this floats over my pores instead of highlighting them like foundations
                                        with more coverage. I can t believe it took me so ... <strong>Read More</strong>
                                    </p>
                                </div>
                                <div class="card-review-footer">
                                    <span>66 people found this helpful</span>
                                </div>

                            </div>
                            <div>
                                <button class="btn-review">Read all reviews</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>



</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleProduct',
    data() {
        return {
            store,
            product: null,
        }
    },
    methods: {
        getproduct() {
            console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/products/${this.$route.params.slug}`).then((response) => {
                //console.log(response.data.results);
                if (response.data.success) {
                    //console.log(response.data.results);
                    this.product = response.data.results;
                } else {
                    //console.log(this.$router);
                    this.$router.push({ name: 'not-found' });
                }

            });
        }
    },
    mounted() {
        this.getproduct();
    }

}

</script>

<style lang="scss" scoped>
.left {

    hr.hr {
        margin: 1rem 0;
    }

    .btn-slider {
        margin: 1rem 0;
        text-align: center;

        button {
            padding: 0.5rem 2rem;
            background-color: white;
        }
    }
}

.right {

    .destra {
        .btn-bag {
            background-color: rgb(31, 31, 31);
            color: white;
            padding: 0.5rem 12rem;
        }

        .return {
            padding: 1rem 30%;
            text-align: center;

            a {
                color: black;
            }
        }

        .card-review {
            padding: 1.5rem;
            margin: 1rem 0;
            border: 1px solid rgb(34, 33, 33);
        }

        .btn-review {
            padding: 0.5rem 14.7rem;
            background-color: rgb(26, 26, 26);
            color: white;
        }
    }
}
</style>