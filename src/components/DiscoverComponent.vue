<template>
    <div>
        <div class="text">
            <h2>Discover Even More</h2>
            <span>Explore Your Beauty With Different Shades Of Color</span>
        </div>
        <div class="cards-discover d-flex justify-content-center">
            <div class="card-discover">
                <img src="../assets/image/image 4.png" alt="">
                <div class="link d-flex align-items-center justify-content-center">
                   <span>Face <i class="fa-solid fa-chevron-right"></i></span> 
                </div>
            </div>
            <div class="card-discover">
                <img src="../assets/image/image 5.png" alt="">
                <div class="link d-flex align-items-center justify-content-center">
                   <span>Lip <i class="fa-solid fa-chevron-right"></i></span> 
                </div>
            </div>
            <div class="card-discover">
                <img src="../assets/image/image 6.png" alt="">
                <div class="link d-flex align-items-center justify-content-center">
                   <span>Kits <i class="fa-solid fa-chevron-right"></i></span> 
                </div>
            </div>
            <div class="card-discover">
                <img src="../assets/image/image 7.png" alt="">
                <div class="link d-flex align-items-center justify-content-center">
                   <span>Eyes <i class="fa-solid fa-chevron-right"></i></span> 
                </div>
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
    background-color: rgb(255, 255, 255);
    color: black;
    .text{
        text-align: center;
        padding: 20px;
    }
    .cards-discover{
        padding: 80px 80px;
        .card-discover{
            width: calc(100% / 4);
            position: relative;
            overflow: hidden;
            img{
                width: 100%;
            }
            .link{
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 70px;
                color: white;
                text-align: center;
                background-color: rgba(0, 0, 0, 0.212);
                i{
                    font-size: 12px;
                }
            }
        }
    }
    
}
</style>