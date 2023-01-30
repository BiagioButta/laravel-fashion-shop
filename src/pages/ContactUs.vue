<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    name: 'ContactUs',
    components: {
        ContactForm
    }
}
</script>

<style lang="scss" scoped>

</style>