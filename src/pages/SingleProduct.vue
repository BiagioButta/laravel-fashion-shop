<template>
    <div>
    <!-- link prodotto: product.product_link
        product.price
        product.brand
        product.texture
        product.available
     -->
        <section v-if="post">
        <h1>{{ product.name }}</h1>
        <img :src="`${store.imagBasePath}${product.image}`" class="card-img-top" :alt="product.name">
        <p>{{ product.description }}</p>
        <!-- <div v-if="product.category"> -->
        <div>
            <h5>Category: {{ product.category.name }}</h5>
        </div>
        <div v-if="product.tags && product.tags.length > 0">
            <h5>Tags</h5>
            <div>
                <span v-for="(tag,index) in product.tags" :key="index" class="badge text-bg-info">{{ tag.name }}</span>
            </div>
        </div>
    </section>
        
    </div>
</template>

<script>
        import axios from 'axios';
        import { store } from '../store';
        export default {
            name: 'SingleProduct',
            data(){
                return {
                    store,
                    product: null,
                }
            },
            methods:{
                getproduct(){
                    console.log(this.$route);
                    axios.get(`${this.store.apiBaseUrl}/products/${this.$route.params.slug}`).then((response)=>{
                        //console.log(response.data.results);
                        if(response.data.success){
                            //console.log(response.data.results);
                            this.product = response.data.results;
                        } else {
                            //console.log(this.$router);
                            this.$router.push({name: 'not-found'});
                        }
                    
                    });         
                }
            },
            mounted(){
                this.getproduct();
            }
            
        }
    
</script>

<style lang="scss" scoped>

</style>