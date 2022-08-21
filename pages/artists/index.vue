<template>
  <section>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!" image="palais-des-papes-g04269230e_1920.jpg"/>
    <div class="flex-container">
        <div class="title-box dance">
          <h1>Dance</h1>
        </div>
        <div class="title-box music">
          <h1>Music</h1>
        </div>
        <div class="title-box theater">
          <h1>Theater</h1>
        </div>
        <!-- TODO: loop through all artists -->
        <!--artist-icon class = "dance" artistName="Dancer 1" imageName="dance2.jpg"/>
        <artist-icon class = "music" artistName="Musician 1" imageName="music1.jpg"/-->
  
    </div>
    <footer />
  </section>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image.vue';
import Footer from '~/components/footer.vue';
import ArtistIcon from '~/components/artist-icon.vue';
export default {
    name: "artists",
    components: {TitleOverlayImage, ArtistIcon, Footer}

}
</script>

<style>

.flex-container {
  display: grid;
  flex-direction: column;
  grid-template-columns: auto auto auto;
  grid-auto-flow: column;
}

/* Intention is to fill up the remainder of the bottom of the window with the title box when you 
 * first open a full-size window */
.title-box{
  display: flex;
  height: 25vh;
  background-color: red;    /* Color of title box  */
  color: white;             /* Color of text */
  align-items: center;        /* Vertical centering of text*/
  justify-content: center;    /* Horizontal centering of text */
}

.dance {
  order: 1;
}
.music {
  order: 2;
}
.theater {
  order: 3;
}


</style>