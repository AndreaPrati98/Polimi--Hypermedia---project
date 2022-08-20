<template>
  <section>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!"/>
    <div class="flex-container">
      <div class="dance artist-column">
        <div class="title-box">
          <div class="title">
            <h2>Dance</h2> 
          </div>
        </div>
        <div class ="artists">
          <artist-icon artistName="Dancer 1" imageName="dance2.jpg"/>
          <artist-icon artistName="Dancer 2" imageName="dance1.png"/>
        </div>
      </div>
      <div class="music artist-column">
        <div class="title-box">
          <div class="title">
            <h2>Music</h2> 
          </div>
        </div>
        <div class="artists">
          <artist-icon artistName="Musician 1" imageName="music1.jpg"/>
          <artist-icon artistName="Musician 2" imageName="music2.jpg"/>
          <artist-icon artistName="Musician 3" imageName="music3.jpg"/>
          <artist-icon artistName="Musician 4" imageName="music4.jpg"/>
          <artist-icon artistName="Musician 5" imageName="music5.jpg"/>
        </div>
      </div>
      
      <div class="theater artist-column">
        <div class="title-box">
          <div class="title">
            <h2>Theater</h2> 
          </div>
        </div>
        <div class="artists">
          <artist-icon artistName="Actor 1" imageName="theater1.jpg"/>
          <artist-icon artistName="Actor 2" imageName="theater2.jpg"/>
        </div>
      </div>
    </div>
    <footer />
  </section>
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
  display: flex;
  flex-direction: row;
  
}
.artist-column {
  display: flex;
  flex-direction: column;
  width: 33%;

}

.title {
  height: 25vh;
  background-color: red;
  color: white;  
  position: relative;
  text-align: center;

}

.artists {
  overflow: visible;
}


</style>