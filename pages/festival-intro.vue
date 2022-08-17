<template>
  <div>
    <title-overlay-image class="title-overlay-image"/>
    <DescriptiveComponent class="descriptive-component"/>
    <div class="card-container">
      <Card class="card"/>
    </div>
  </div>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image';
import DescriptiveComponent from '~/components/Descriptive-component';
import Card from '~/components/card.vue';

export default {
  components: { TitleOverlayImage, DescriptiveComponent, Card },
    name: "festival-intro",
}
</script>

<style scoped>

  .card-container{
    display: flex;
    justify-content: center;
  }

</style>