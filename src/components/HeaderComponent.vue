<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                      <router-link :to="{name : item.routeName}" class="nav-link">{{ item.label }}</router-link>
                </li>
          
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
        data(){
            return {
                menuItems: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Products',
                        routeName: 'products'
                    },
                    {
                        label: 'Tags',
                        routeName: 'tags'
                    },
                    {
                        label: 'Brands',
                        routeName: 'brands'
                    }
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
</style>