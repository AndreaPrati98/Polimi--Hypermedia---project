<template>
  <section class="artist-icon">
    <div class="div-container">
        <!--div class="picture" style="'background-image: '+ $imageName"-->
          <img :src="require(`../assets/imgs/artists/${imageName}`)">
        </div>

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

    .artist-card {
        /* border: 1px solid red; */
        width: 20%;
        height: 40vh;
        margin: 20px 0;
        overflow: hidden;
    }

    .div-container {
        /* useful to use the % also with the children */
        height: 100%;  
    }

    .div-container:hover .img {
        opacity: 0.6;
    }

    .div-container:hover .text-container {
        bottom: 100%;
    }

    

    .picture {
        /* border: 2px solid red; */
        height: 100%;   
        background-image: url("../assets/imgs/history_1920.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        transition: opacity .5s ease-in;
    }

    .text-container {
        /* border: 2px solid purple; */
        height: 100%;
        position: relative;
        /* backdrop-filter: blur(100px); */
        background-color: #c7c7c7;
        bottom: 20%;
        transition: bottom 1s ease-out;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
        font-size: 1.7rem;
        
    }

    .paragraph {
        width: 65ch;
        text-align: center;
    }

    .div-paragraph {
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: scroll;

    }


</style>