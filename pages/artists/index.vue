<template>
  <div>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!"/>
    <div class="flex-container">
      <div class="dance-column">
        <h2>Dance</h2>
        <artist-icon name="Artist1" imageName="dance2.jpg"/>
      </div>
      <div class="music-column">
        <h2>Music</h2>
      </div>
      
      <div class="theater-column">
        <h2>Theater</h2>
      </div>
    </div>
  </div>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image-props';
import Footer from '~/components/footer.vue';
import ArtistIcon from '~/components/artist-icon.vue';
export default {
    name: "artists",
    components: {TitleOverlayImage, ArtistIcon, Footer, TitleOverlayImage}

}
</script>

<style>


.flex-container {
  flex-direction: row;
}

</style>