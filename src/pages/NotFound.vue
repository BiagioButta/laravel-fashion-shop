<template>
    <div class="text-center">
        <h1 class="m-3">Error 404</h1>
        <img src="../assets/image/error.png" alt="Immagine di un gatto che guarda un cactus">
        <p class="m-auto mt-4">Oops, The page you are looking for might be removed or is temporarily unavailable.Try going back to the previous page or
        see our <a href="#">Help Center</a> for more information</p>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center my-5">
       <router-link :to="{path:'/'}"><button type="button" class="btn btn-dark border-0 btn-lg px-5">Return to Homepage</button></router-link>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

<style lang="scss" scoped>
body{
    background-color: #F4F4F4;
}
h1{
    color: #5F504B;
}
p{
    font-size: 16px;
    color:#030303;
    width: 550px;
}

button{
    border-radius: 0;
    background-color: #030303;
}
</style>