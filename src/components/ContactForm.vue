<template>
    <section class="contact_me py-5">
        <div class="inner-wrapper">
            <div class="container-fluid text-center">
                <h2 class="text-uppercase">contattaci</h2>
                <div v-if="success" class="alert alert-success text-start" role="alert">Messaggio inviato con successo
                </div>
                <div class="row">
                    <form class="col-12 text-start" @submit.prevent="sendForm()">
                        <div class="mb-3">
                            <input class="border-0 border-bottom form-control" type="text" name="name" id="name"
                                placeholder="Name" v-model="name" :class="{ 'is-invalid': errors.name }">
                            <p v-for="(error, index) in errors.name" :key="index">
                                {{ error }} </p>
                        </div>
                        <div class=" mb-3">
                            <input class="border-0 border-bottom form-control" type="text" name="email" id="email"
                                placeholder="Email" v-model="email" :class="{ 'is-invalid': errors.email }">
                            <p v-for="(error, index) in errors.name" :key="index">
                                {{ error }} </p>
                        </div>
                        <div class="mb-3">
                            <textarea class="border-0 border-bottom form-control" name="message" id="message" cols="30"
                                rows="10" placeholder="Message" v-model="message"
                                :class="{ 'is-invalid': errors.message }"></textarea>
                        </div>
                        <button class="button" type="submit" :disabled="loading">{{
                            loading?
                        'sending..': 'Send'
                        }}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response) => {
                console.log(response.data);
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                    console.log(response.data.errors)
                } else {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>