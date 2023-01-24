<template>
    <div class="text-center">
        <h1>404</h1>
        <h3>Oops,this page not found!</h3>
        <p>The link might be corrupted.</p>
        <h6>or the page may have been removed</h6>
        <button type="button" class="btn btn-dark">Go back home</button>
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
    color: #030303;
}
h3{
    color:#747474;
}
p{
    color:#ada1a1;
}

h6{
    color: #030303;
}
</style>