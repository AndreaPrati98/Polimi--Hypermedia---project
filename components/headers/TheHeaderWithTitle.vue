<template>
  <section class="section" :style="cssProps">
        <!-- here we set up the image with the Title -->
            
        <div class="img" :style="`background-image: url(${this.imgUrl}) `">
            
        </div>
        
        <!-- <img :src="imgUrl" alt="" class="img"> -->

        <div class="title-div">
            <h1>Title</h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quia.</h3>
        </div>
    </section>
</template>

<script>
export default {
    name: "header-w-title",
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
        },
        imgUrl: {
            type: String,
            
            default: "https://cdn.pixabay.com/photo/2015/07/27/18/12/bridge-of-avignon-862948_1280.jpg",
        }
    },
    
}
</script>

<style scoped>

    .section {
        display: grid;
        grid-template: repeat(4, 1fr) / repeat(4, 1fr);
        height: 70vh;
        /* border: 2px solid red; */
        overflow: hidden;
    }

    .img {
        background-image: url("~/assets/imgs/palais-des-papes-g04269230e_1920.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        /* object-fit: cover;
        object-position: 50% 50% ; */

        width: 100%;
        
        grid-area: 1 / 1 / 5 / 5;
    }

    .title-div {
        grid-area: 3 / 1 / 4 / 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: white;
        
    }

    @media only screen and (width: 1400px) {
        .img {
            background-position: right top ;
        }
    }
    

</style>