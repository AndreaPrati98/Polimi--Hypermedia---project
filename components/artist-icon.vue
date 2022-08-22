<template>
  <div class="artist-icon">
    <div class="div-container">
        <div class="image-container">
            <div class="grey-box"></div>
            <img :src="require(`../assets/imgs/artists/${imageName}`)">
        </div>
        <div class="text-container">
            <div class="text">
                <h2>{{ artistName }}</h2>
            </div>
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
    .artist-icon {
        height: 40vh;
        width: 100%;
    }

    .div-container {
        height: 100%;
        width: 100%;
        display: flex;
        overflow: visible;  
        text-align: center;
        position: relative;
    }
    .image-container {
        display: flex;
        height: 100%;
        width: 100%;
        position: absolute;
    }

    .grey-box {
        background-color: black;
        filter: grayscale(50%);
        opacity: 0.4;
        display: flex;
    }
    .img {
        opacity: 1;
        width: 100%;
        height: auto;   
    }
   
    .text-container {
        height: 100%;
        width: 100%;
        position: absolute;
        align-items: center;
        display: none;
    }


    .grey-box:hover {
        display: flex;
    }

    .div-container:hover .text-container {
        display: flex;
    }

    .div-container:hover .text {
        display: flex;
    }

    .text {
        display: none;
        font-size: 1.7rem;
        margin-left: 30%;
        color: white;
        opacity: 1;
    }


</style>