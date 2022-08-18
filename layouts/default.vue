<template>
  <div class="main-page">
    <NewHeader/>
    <nuxt />
    <Footer class="footer"/>
  </div>
</template>

<script>
import NewHeader from '~/components/new-header.vue';
import Footer from '~/components/footer.vue';


export default {
  name: 'DefaultLayout',
  components: {
    NewHeader,
    Footer
  },
}
</script>

<style scoped>
  .footer {
    width: 100%;
  }
</style>