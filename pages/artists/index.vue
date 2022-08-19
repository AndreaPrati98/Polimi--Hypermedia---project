<template>
  <div>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!"/>
    <div class="flex-container">
      <div class="dance artist-column">
        <div class="title">
          <h2>Dance</h2> 
        </div>
        <artist-icon artistName="Dancer 1" imageName="dance2.jpg"/>
        <artist-icon artistName="Dancer 2" imageName="dance1.png"/>

      </div>
      <div class="music artist-column">
        <div class="title">
          <h2>Music</h2>
        </div>
        <artist-icon artistName="Musician 1" imageName="music1.jpg"/>
        <artist-icon artistName="Musician 2" imageName="music2.jpg"/>
        <artist-icon artistName="Musician 3" imageName="music3.jpg"/>
        <artist-icon artistName="Musician 4" imageName="music4.jpg"/>
        <artist-icon artistName="Musician 5" imageName="music5.jpg"/>
      </div>
      
      <div class="theater artist-column">
        <div class="title">
          <h2>Theater</h2>
        </div>
        <artist-icon artistName="Actor 1" imageName="theater1.jpg"/>
        <artist-icon artistName="Actor 2" imageName="theater2.jpg"/>

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

.title-box {
  justify-items: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
}

.title {
  height: 30vh;
  background-color: red;
  color: white;  
  text-align: center;
  justify-content: center;

  justify-items: center;
  vertical-align: middle;
}
.flex-container {
  display: flex;
  flex-direction: row;
  
}
.artist-column {
  width: 33%;
  display: flex;
  flex-direction: column;

}

</style>