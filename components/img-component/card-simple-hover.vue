<template>
  <a href="http://localhost:3000/artists/artist1">
    <div class="image-placeholder">
        <img class ="image" :src="require(`~/assets/imgs/artists/${imageName}`)"/>
      <div class="name-box">
        <h1 class="name">{{ artistName}}</h1>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "card-simple-hover",
  props: {
     artistName: {
            type: String,
            required: true,
        },
        imageName: {
            type: String,
            required: true,
        }
  }
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
  display: flex;
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  align-content: center;
  justify-content: center;


  /* width: 100px; */
}
</style>
