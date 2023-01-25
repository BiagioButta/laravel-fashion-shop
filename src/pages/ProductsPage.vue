<template>
    <div>
        <h1>products</h1>
    </div>
</template>

<script>
        import axios from 'axios';
        import CardComponent from '../components/CardComponent.vue';
        import { store } from '../store';
        export default {
        name: "ProductsPage",
        data() {
            return {
                store,
                projects: [],
                currentPage: 1,
                lastPage: null,
                total: 0,
                contentMaxLen: 100
            };
        },
        methods: {
            getprojects(pagenum) {
                axios.get(`${this.store.apiBaseUrl}/products`, { params: {
                        page: pagenum
                    } }).then((response) => {
                    //console.log(response.data.results);
                    this.projects = response.data.results.data;
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
            this.getprojects(1);
        },
        components: { CardComponent }
    }
</script>

<style lang="scss" scoped>

</style>