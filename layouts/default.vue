<template>
  <div class="main-page">
    <NewHeader/>
    <nuxt />
  </div>
</template>

<script>
import NewHeader from '~/components/new-header.vue';


export default {
  name: 'DefaultLayout',
  components: {
    NewHeader,
  },
}
</script>