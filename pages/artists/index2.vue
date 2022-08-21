<template>
  <section>
    <title-overlay-image class="title-overlay-image-props" title="This Year's Artists" description="Check this out!" image="palais-des-papes-g04269230e_1920.jpg"/>
    <div class="row">
      <div class="column dance">
        <div class="item title-box">
          <h2>Dance</h2>
        </div>
        <div class="item icon dance">
          <div class="image-placeholder">
            <img class ="image" src="~/assets/imgs/artists/dance1.png"/>
          </div>
        </div>
        <div class="item icon dance">
          <div class="image-placeholder">
            <img class ="image" src="~/assets/imgs/artists/dance2.jpg"/>
          </div>
          <div class="shade-placeholder"></div>
        </div>
      </div>
      <div class="column music">
        <div class="item title-box">
          <h2>Music</h2>
        </div>
        <div class="item icon music">
          <div class="image-placeholder">
            <img class ="image" src="~/assets/imgs/artists/music1.jpg"/>
            <div class="name-box">
              <h1 class = "name">NAME OF ARTIST WHAT IF IT IS SUPER LONG</h1>
            </div>

          </div>
          <div class="shade-placeholder"></div>
        </div>
        <div class="item icon music">
          <div class="image-placeholder">
            <img class ="image" src="~/assets/imgs/artists/music2.jpg"/>
          </div>
          <div class="shade-placeholder"></div>
        </div>
      </div>
      <div class="column theater">
        <div class="item title-box">
          <h2>Theater</h2>
        </div>
        <div class="item icon theater">
          <div class="image-placeholder">
            <img class ="image" src="~/assets/imgs/artists/theater1.jpg"/>
          </div>
          <div class="shade-placeholder"></div>
        </div>
        <div class="item icon theater">
          <div class="image-placeholder">
            <img class ="image" src="~/assets/imgs/artists/theater2.jpg"/>
          </div>
          <div class="shade-placeholder"></div>
        </div>
      </div>
    </div>
    </div>
    <footer />
  </section>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image.vue';
import Footer from '~/components/footer.vue';
export default {
    name: "artists",
    components: {TitleOverlayImage, Footer}

}
</script>

<style>

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

.image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 50vh;
  max-height: 300px;
  max-width: 100%;
}

.image-placeholder:hover .image{
  filter: saturate(0) contrast(40%) grayscale(50%);
}

.image-placeholder:hover .name {
  display: flex;
}

.image-placeholder {
  position: relative;
}

.title-box {
  background-color: red;
  color: white;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.name {
  font-size: xx-large;
  color: white;
  display: none;
  
}

.name-box {
  display: flex;
  position: absolute;
  top:20%;
  left: 20%;
  right: 20%;
}





</style>