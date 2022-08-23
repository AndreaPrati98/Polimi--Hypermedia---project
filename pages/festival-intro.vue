<template>
  <div>
    <TitleOverlayImage2 class="header"/>
    <DescriptiveComponent class="descriptive-component"/>
    <div class="double-section">
      <Card class="card"/>
      <InfoComponent :title="'Practical informations'" class="info-component"/>
    </div>
    <Map class="map"/>
  </div>
</template>

<script>
import DescriptiveComponent from '~/components/Descriptive-component';
import Card from '~/components/card.vue';
import InfoComponent from '~/components/information-components/info-component.vue';
import Map from '~/components/map.vue';
import Footer from '../components/footer.vue';
import ButtonStd from '~/components/utilities-components/button-std.vue';
import TitleOverlayImage2 from '~/components/title-overlay-image2.vue';

export default {
  components: { DescriptiveComponent, Card, InfoComponent, Map, Footer, ButtonStd, TitleOverlayImage2 },
    name: "festival-intro",
  
}
</script>

<style scoped>

  .header {
    height: 90vh;
  }

  .double-section{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .map {
    width: 100%;
  }
</style>