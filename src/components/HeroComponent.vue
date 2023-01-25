<template>
    <section id="hero" class="container-fluid">
        <div class="container col-12 py-5">
            <div class="row align-items-center">
                <div class="text col-4">
                    <h1 class="display-6 text-center fw-bold mb-3">The Best Duo-tone buildable Foundation</h1>
                    <p class="lead text-center text-decoration-underline fw-bold fs-6">You're unique - your foundation should be too.
                        Create the best foundation for your skin tone with Boolgary.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="button" class="btn btn-outline-dark border-0 btn-lg px-4">Shop Foundation <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
                    </div>
                </div>                
                <div class="col-4">
                    <img src="../assets/image/image 1.png" class="d-block mx-lg-auto img-fluid" alt="Two Model" width="400" height="250" loading="lazy">
                </div>
                <div class="col-3">
                    <img src="../assets/image/image 2.png" class="d-block mx-lg-auto img-fluid" alt="Model" width="250" height="250" loading="lazy">
                </div>                
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HeroComponent',
    };
</script>

<style lang="scss" scoped>
#hero{
        background-color: #fcf4ed;
    }
</style>