<script>
import DefaultLayout from '@/layouts/DefaultView.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  }
}
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>