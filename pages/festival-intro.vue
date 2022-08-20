<template>
  <div>
    <title-overlay-image class="title-overlay-image"/>
    <DescriptiveComponent class="descriptive-component"/>
    <div class="double-section">
      <Card class="card"/>
      <InfoComponent class="info-component"/>
    </div>
    <Map class="map"/>
    
  </div>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image';
import DescriptiveComponent from '~/components/Descriptive-component';
import Card from '~/components/card.vue';
import InfoComponent from '~/components/info-component.vue';
import Map from '~/components/map.vue';
import Footer from '../components/footer.vue';

export default {
  components: { TitleOverlayImage, DescriptiveComponent, Card, InfoComponent, Map, Footer, ButtonStd },
    name: "festival-intro",
}
</script>

<style scoped>
  .double-section{
    display: flex;
    justify-content: space-around;
  }

  .map {
    width: 100%;
  }
</style>