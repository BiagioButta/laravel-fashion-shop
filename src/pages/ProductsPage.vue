<template>

    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div>
                <h2>Shop All </h2>
            </div>
            <div class="col-lg-4" v-for=" (product, index) in products " :key="index">
                <ProductCard :product="product" />

            </div>

        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" :class="{'disabled': currentPage === 1}">
                  <button class="page-link" :disabled="currentPage === 1" @click="getProductPage(currentPage - 1)">Previous
                  </button>
              </li>
              <li class="page-item" v-for="n in lastPage">
                  <button class="page-link" @click="getProductPage(n)">{{n}}</button>
              </li> 
              <li class="page-item" :class="{'disabled': currentPage === lastPage}">
                  <button class="page-link" :disabled="currentPage === lastPage" @click="getProductPage(currentPage + 1)">Next
                  </button>
              </li>   
            </ul>
        </nav>
    </div>
    
    


</template>

<script>
import axios from 'axios';
import { store } from '../store';
import ProductCard from '../components/ProductCard.vue';

export default {
    name: "ProductsPage",
    components: {
        ProductCard
    },
    data() {
        return {
            store,
            products: [],
            currentPage: 1,
            lastPage: null,
            total: 0,
            contentMaxLen: 100
        };
    },
    methods: {
        getproduct(pagenum) {
            axios.get(`${this.store.apiBaseUrl}/products`, {
                params: {
                    page: pagenum
                }
            }).then((response) => {
                // console.log(response.data.results.data);
                this.products = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
            });
        },
        truncateContent(text) {
            if (text.length > this.contentMaxLen) {
                return text.substr(0, this.contentMaxLen) + "...";
            }
            return text;
        },
        getProductPage(pagenum){
                axios.get(`${this.store.apiBaseUrl}/products`,{params:{
                   page: pagenum 
                }}).then((response)=>{
                    //console.log(response.data.results);
                   this.products = response.data.results.data;
                   this.currentPage = response.data.results.current_page;
                   this.lastPage = response.data.results.last_page;
                   this.total = response.data.results.total;
            })
        }
        
      
    },
    mounted() {
        this.getproduct(1);
    },
}
</script>

<style lang="scss" scoped>

</style>