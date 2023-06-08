<script>
import imageStore from '@/stores/image';
import ImageComp from '@/components/Base/ImageComp.vue';

import { mapState } from 'pinia';

export default {
    name: 'DetailView',
    components: {
        ImageComp,
    },
    computed: {
        ...mapState(imageStore, ['g$detail']),
        detail() {
            return this.g$detail(this.$route.params.id);
        },
    },
};
</script>

<template>
    <article>
        <h2>{{ detail.title }}</h2>
        <ImageComp :src="detail.img" />
    </article>
</template>