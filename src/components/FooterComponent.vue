<template>
    <footer>
        <div class="d-flex justify-content-around">
            <div>
            <ul><h3 class="text-uppercase">pagine:</h3>
                <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{name : item.routeName}" class="nav-link">{{ item.label }}</router-link>
                </li>
            </ul>
        </div>
        <div>
            <ul class="contatti"><h3 class="text-uppercase">contatti:</h3>
                <li class="nav-item" v-for="(item, index) in contacts" :key="index">
                    <span>{{ item.label }}:  </span> <span> {{ item.contacts }}</span>
                </li>
            </ul>
            <ul class="social">
                <li class="nav-item" v-for="(item, index) in social" :key="index">
                    <a :href="item.link"><i :class="item.label"></i></a>
                </li>
            </ul>
        </div>
        </div>
        
    </footer>
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
                ],
                social:[
                    // fa-brands 
                    {
                        label: 'fa-brands fa-youtube',
                        link: 'https://www.youtube.com/'
                    },
                    {
                        label: 'fa-brands fa-square-facebook',
                        link: '#'
                    },
                    {
                        label: 'fa-brands fa-square-twitter',
                        link: '#'
                    },
                    {
                        label: 'fa-brands fa-tiktok',
                        link: '#'
                    }
                ],
                contacts:[
                    // fa-brands 
                    {
                        label: 'mail',
                        contacts: 'boolgar@gmail.com'
                    },
                    {
                        label: 'numero telefono',
                        contacts: '3351095356'
                    },
                    {
                        label: 'partita iva',
                        contacts: '14375678987'
                    },
                    {
                        label: 'sede legale',
                        contacts: 'Milano Via Giorgio Battisti 5'
                    }
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
footer{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    background-color: black;
    padding: 2rem;
    color: white;
    li{
        list-style-type: none;
    }
    a{
        color: white;
    }
    .link-footer{
        display: flex;

    }
    .social{
        display: flex;
        li{
            margin: 0.4rem 1rem
        }
    }
    a{
        i{
            font-size: 1.5rem;
        }
    }
}
</style>