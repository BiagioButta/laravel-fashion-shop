<template>

  <div class="container mt-5">

    <h2 class="text-center mb-3">Choosen For You</h2>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">

          <div class="d-flex">
            <div class="col-lg-4 " v-for=" (product, index) in products " :key="index">
              <ProductCard :product="product" />
            </div>
          </div>
        </div>
      </div>

      <!--       <div class="carousel-item">

        <div class="d-flex">
          <div class="col-lg-4 " v-for=" (product, index) in products " :key="index">
            <div v-if="index > 10">
              <ProductCard :product="product" />
            </div>
          </div>
        </div>
      </div> -->

      <!--       <div class="carousel-item">

        <div class="d-flex">
          <div class="col-lg-4 " v-for=" (product, index) in products " :key="index">
            <div v-if="index > 15">
              <ProductCard :product="product" />
            </div>
          </div>
        </div>

      </div> -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>




</template>

<script>
import axios from 'axios';
import { store } from '../store';

import ProductCard from './ProductCard.vue';

export default {
  name: "SliderChosenForY",
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
        console.log(response.data.results.data);
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
    }
  },
  mounted() {
    this.getproduct(1);
  },
}
</script>

<style lang="scss" scoped>

</style>