<template>
    <footer>
        <div>
            <img class="logo mb-4" src="../assets/image/logo-2.png" alt="">
        </div>
        <div class="d-flex justify-content-around">
            <div>
                <p>Sign up for email updates on products, launches, and events. Unsubscribe anytime</p>
                <form class="row g-3">
                    <div class="col-auto">
                        <label for="inputEmail2" class="visually-hidden">Email</label>
                        <input type="email" class="form-control" id="inputEmail2" placeholder="Email">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-dark mb-3">Submit</button>
                    </div>
                </form>

            </div>
            <div>
                <ul><h3 class="text-uppercase">About Boolgary</h3>
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{name : item.routeName}" class="nav-link">{{ item.label }}</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3 class="text-uppercase">Help</h3>
                    <li class="nav-item" v-for="(item, index) in help" :key="index">
                        <span>{{ item.label }}</span>
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
                help: [
                    {
                        label: 'Contact',
                        link: '#'
                    },
                    {
                        label: 'Freedom Gift Card',
                        link: '#'
                    },
                    {
                        label: 'Return & Exchanges',
                        link: '#'
                    },
                    {
                        label: 'Help & FAQ',
                        link: '#'
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
                    {
                        label: 'mail',
                        contacts: 'boolgary@gmail.com'
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
    h3{
        color: #F8F8F8;
    }
    a{
        i{
            font-size: 1.5rem;
        }
    }
    p{
        width: 415px;
        height: 52px;
        
        font-weight: 400;
        font-size: 17px;
        line-height: 26px;
        letter-spacing: 0.05em;

        color: #F8F8F8;
    }
    .logo{
        margin-left: 90px;
    }
    .btn-dark{
        border: 1px solid white;
        border-radius: 2px;
        background-color: black;
    }
    #inputEmail2{
        background-color: black;
        border-radius: 2px;
        color: white;
    }
    
}
</style>