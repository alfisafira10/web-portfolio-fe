<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
    name: 'ContactView',
    components: {
        BaseInput,
    },
    data: () => ({
        title: 'Contact',
        // input
        input: {
            name: '',
            email: '',
            message: '',
        }
    }),
    methods: {
        submit() {
            console.log(this.input);
        }
    },
};
</script>

<template>
    <div class="contact">
        <h1>{{ title }}</h1>
        <form Asubmit.prevent="submit">
            <BaseInput v-model="input.name" name="name" label="Name" type="text" />
            <BaseInput v-model="input.email" name="email" label="Email" type="email" />
            <br />
            <span>Message :</span>
            <p style="white-space: pre-line">{{ message }}</p>
            <textarea v-model="message" placeholder="Your message..."> </textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .contact {
        min-height: 100vh;
    }
}
</style>