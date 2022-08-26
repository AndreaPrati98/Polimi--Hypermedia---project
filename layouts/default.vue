<template>
  <div class="main-page">
    <the-navbar />
    <nuxt />
    <the-footer class="footer"/>
  </div>
</template>

<script>

import TheFooter from '~/components/TheFooter.vue';
import TheNavbar from '~/components/TheNavbar.vue';


export default {
  name: 'DefaultLayout',
  components: {
    TheFooter,
    TheNavbar
  },
}
</script>

<style scoped>
  .footer {
    width: 100%;
  }
</style>