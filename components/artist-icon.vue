<template>
  <div class="item icon dance">
          <div class="image-placeholder">
            <a href="http://localhost:3000/artists/artist1">
              <img class ="image" :src="require(`../assets/imgs/artists/${imageName}`)"/>
            </a>
            <div class="name-box">
              <h1 class = "name">{{ artistName }}</h1>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'ArtistIcon',
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
}
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
.image-placeholder:hover .image{
  filter: saturate(0) contrast(40%) grayscale(50%);
}
.image-placeholder:hover .name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.image-placeholder {
  position: relative;
}




/* Name of the artist */
.name {
  font-size: xx-large;
  font-family: 'Oswald';
  font-weight: 700;
  color: white;
  display: none;
  
}
/* Container that holds the name of the artist (directly overlaid over the image of the artist)*/
.name-box {
  display: flex;
  position: absolute;
  top:20%;
  left: 20%;
  right: 20%;
}
</style>