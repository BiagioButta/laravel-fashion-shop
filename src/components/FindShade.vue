<template>
    <div class="d-flex justify-content-evenly align-items-center">
        <div class="text">
            <div><h2>Find Your Shade</h2></div>
            <div><span>we will help find the right shade for you</span></div>
            <button><i class="fa-solid fa-camera"></i> Try it out</button>
        </div>
        <div class="img">
            <img src="./../assets/image/image 3.png" alt="">
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
    background-color: black;
    color: white;
    // padding: 0 50px;
    .text{
        text-align: center;
        button{
            padding: 5px 40px;
            background-color: black;
            color: white;
            border: 1px solid white;
            margin-top: 20px;
        }
    }
    .img{
        width: 20%;
        img{
            width: 100%;
        }
    }
}
</style>