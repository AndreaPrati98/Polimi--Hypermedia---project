<template>
  <section class="artist-icon">
    <div class="div-container">
        <!--div class="picture" style="'background-image: '+ $imageName"-->
          <img :src="require(`../assets/imgs/artists/${imageName}`)">

        <div class="text-container">
            <div class="name">
                <h2>{{ artistName }}</h2>
            </div>
        </div>
    </div>
  </section>
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

    .artist-icon {
        height: 40vh;
        overflow: hidden;
    }

    .div-container {
        position: relative;
        /* useful to use the % also with the children */
        height: 100%;  
    }

    .div-container:hover .img {
        background-color: #457b9d;
;
        opacity: 0.3;
    }

    

    .img {
        /* border: 2px solid red; */
        opacity: 1;
        width: 100%;
        height: 100%;   
        transition: 0.5s ease;
        backface-visibility: hidden;
        /*background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;*/
    }

    .text-container {
        /* border: 2px solid purple; */
        height: 100%;
        position: center;
        /* backdrop-filter: blur(100px); */
        /*background-color: #c7c7c7;*/
        transition: bottom ease-in 0.5s;
    }

    .name {
        display: flex;
        justify-content: center;
        align-items: center;
        /*height: 50%;*/
        font-size: 1.7rem;
        
    }


</style>