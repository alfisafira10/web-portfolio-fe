<script>
import MainHeader from '@/components/Main/HeaderComp.vue';
import MainFooter from '@/components/Main/FooterComp.vue';

export default {
    name: 'DefaultView',
    components: {
        MainHeader,
        MainFooter,
    },
}
</script>

<template>
    <MainHeader />
    <main>
        <slot />
    </main>
    <br>
    <MainFooter />
</template>