<template>
  <section>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!" image="palais-des-papes-g04269230e_1920.jpg"/>
    
    <DescrComponent />
    
    <div class="card-container">
      <!-- <card-hover v-for="(artist, artistIndex) of artistList"
      :key="`artist-index=${artistIndex}`"
      :artistName="artist.name"
      :imageName="artist.img"
      :artistId="artist.id"
      /> -->
      <SimpleBox class="box"/>
      <SimpleBox class="box"/>
      <SimpleBox class="box"/>

      <SimpleBox class="box"/>
      <SimpleBox class="box"/>
      <SimpleBox class="box"/>

      <SimpleBox class="box"/>

          
    </div>
        
      
  </section>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image.vue';
import CardHover from '~/components/img-component/card-simple-hover.vue';
import SimpleBox from '~/components/test-components/simple-box.vue';
import DescrComponent from '~/components/information-components/descr-component.vue';

export default {
    name: "artists",
    components: { TitleOverlayImage, CardHover, SimpleBox, DescrComponent },
    async asyncData({ $axios }) {
         const { data } = await $axios.get("/api/artists");
         return {
           artistList: data,
         }
     },
}
</script>

<style scoped>

  .card-container {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);

    justify-items: center;

    grid-auto-flow: dense;
  }

  .box {
    width: 100%;
    height: 300px;
  }

  .box:nth-child(4n + 1) {
    border: 2px solid blue;
    grid-column: 1 / span 2;
  }

  .box:nth-child(4n + 3) {
    border: 2px solid green;
    grid-column: 2 / span 2;
  }

</style>