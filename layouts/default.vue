<template>
  <div class="main-page">
    <new-header/>
    <nuxt />
  </div>
</template>

<script>
import NewHeader from '~/components/new-header.vue'
// import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    NewHeader,
    // TheHeader,

  },
}
</script>