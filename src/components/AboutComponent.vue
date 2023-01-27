<template>
    <div>
        <div class="text">
            <h2 class="mt-3"><strong>About</strong> Boolgary</h2>
        </div>
        <div class="cards-about d-flex justify-content-evenly align-items-start">
            <div class="card-about">
                <img src="../assets/image/love.png" alt="">
                <h5>Reliable</h5>
                <p>We stand behind our products and give genuine advice with customer's best interest at heart</p>
            </div>
            <div class="card-about">
                <img src="../assets/image/bio.png" alt="">
                <h5>Customizable nature</h5>
                <p>Our products allow user to assume control of the color</p>
            </div>
            <div class="card-about">
                <img src="../assets/image/bunny.png" alt="">
                <h5>Cruelty-free</h5>
                <p>We made our products not only inclusive for human but also crutely-free for animals</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store';
    export default {
        name: 'FindShade',
        data() {
            return {
                store
            }
        }

}
</script>

<style lang="scss" scoped>
div{
    background-color: #FFF3F2;
    color: black;
    .text{
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        padding: 20px;
    }
    .cards-about{
        padding: 0 50px;
        .card-about{
            text-align: center;
            padding: 20px;
            width: 300px;
            h5{
                margin: 10px;
            }
        }
    }
    
}
</style>