<template>
  <section>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!" image="palais-des-papes-g04269230e_1920.jpg"/>
    
    <div class="description-container">
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus qui deleniti vero dignissimos consequatur earum officiis ut aut aspernatur omnis 
          illum quaerat assumenda odit, laborum dicta iure ea saepe. Vel.
        </p>  
      </div>
    </div>
    
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
      <SimpleBox class="box"/>

    </div>
        
      
  </section>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image.vue';
import CardHover from '~/components/img-component/card-simple-hover.vue';
import SimpleBox from '~/components/test-components/simple-box.vue';
export default {
    name: "artists",
    components: { TitleOverlayImage, CardHover, SimpleBox },
    async asyncData({ $axios }) {
         const { data } = await $axios.get("/api/artists");
         return {
           artistList: data,
         }
     },
}
</script>

<style scoped>

  .description-container {
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 100%; */  
    background-color: var(--palette-red);
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 70%;
    width: 90%;
    
    border: 2px solid var(--text-color-light);
    color: var(--text-color-light);

    margin: 2% 0;
    padding: 8px 10px;
    font-size: 30px;
  }

  .card-container {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    grid-template-areas:  'A A B'
                          'C D E'
                          'F G G';
    justify-items: center;

    grid-auto-columns: auto;
    grid-auto-rows: auto;
    
  }

  .box {
    width: 100%;
    height: 300px;
  }

  .box:nth-child(1) {
    grid-area: A;
  }
  .box:nth-child(2) {
    grid-area: B;
  }
  .box:nth-child(3) {
    grid-area: C;
  }

  .box:nth-child(4) {
    grid-area: D;
  }

  .box:nth-child(5) {
    grid-area: E;
  }

  .box:nth-child(6) {
    grid-area: F;
  }

  .box:nth-child(7) {
    grid-area: G;
  }

</style>