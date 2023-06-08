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
        <br />
        <h1>Contact me</h1>
        <form Asubmit.prevent="submit">
            <BaseInput v-model="input.name" name="Name" label="Name" type="text" />
            <BaseInput v-model="input.email" name="Email" label="Email" type="email" />
            <br />
            <label for="message">
                <p>Message</p>
                <textarea v-model="input.message" name="message" placeholder="Your message..."></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

