<template>
  <div class="icon">
    <div class="image-placeholder">
      <a href="http://localhost:3000/artists/artist1">
        <img class="image" src="~/assets/imgs/artists/dance1.png" />
      </a>
      <div class="name-box">
        <h1 class="name">Maria</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-simple-hover",
};
</script>

<style scoped>
.image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 50vh;
  max-height: 300px;
  max-width: 100%;
}
/* Hover over the image-placeholder DIV changes two child elements: the image and the name */
.image-placeholder:hover .image {
  filter: saturate(0) contrast(40%) grayscale(50%);
}
.image-placeholder:hover .name {
  /* this is for centering the name within it's own div */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.image-placeholder {
  position: relative;
  display: grid;
  grid-template: 1fr / 1fr;
}

h2 {
  font-family: "Poppins";
  font-weight: 200;
  font-size: 2.5em;
}

/* Name of the artist */
.name {
  font-size: xx-large;
  /* font-size: 2vw; */
  font-family: "Oswald";
  font-weight: 700;
  color: white;
  display: none;
}
/* Container that holds the name of the artist (directly overlaid over the image of the artist)*/
.name-box {
  position: absolute;
  height: 100%;

  
  left: 0; 
  right: 0;
  margin-left: auto; 
  margin-right: auto; 
  /* width: 100px; */
}
</style>
