import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import BrandsPage from './pages/BrandsPage.vue';
import TagsPage from './pages/TagsPage.vue';
import SingleProduct from './pages/SingleProduct.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsPage
        },
        {
            path: '/brands',
            name: 'brands',
            component: BrandsPage
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsPage
        },
        {
            path:'/products/:slug',
            name: 'single-products',           // la s
            component: SingleProduct
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound
        }

    ]
});

export { router };
