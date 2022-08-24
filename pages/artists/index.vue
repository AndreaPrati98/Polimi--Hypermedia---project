<template>
  <section>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!" image="palais-des-papes-g04269230e_1920.jpg"/>
    <div class="row">
      <div class="column dance">
        <div class="item title-box">
          <h2>Dance</h2>
        </div>
      </div>
      <div class="column music">
        <div class="item title-box">
          <h2>Music</h2>
        </div>
        <card-hover v-for="(artist, artistIndex) of artistList"
        :key="`artist-index=${artistIndex}`"
        :artistName="artist.name"
        :imageName="artist.img"
        :artistId="artist.id"
        />
      </div>
      <div class="column theater">
        <div class="item title-box">
          <h2>Theater</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image.vue';
import CardHover from '~/components/img-component/card-simple-hover.vue';
export default {
    name: "artists",
    components: {TitleOverlayImage, CardHover},
    async asyncData({ $axios }) {
         const { data } = await $axios.get("/api/artists");
         return {
           artistList: data,
         }
     },
}
</script>

<style>

/* Set up the grid structure to list all the artists */
.row {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 33%;
  justify-content: space-around; 
}

.column .item{
  width: 100%;
}

/* Title of the column */
.title-box {
  background-color: red;
  color: white;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

h2 {
  font-family: 'Poppins';
  font-weight: 200;
  font-size: 2.5em;
}

</style>