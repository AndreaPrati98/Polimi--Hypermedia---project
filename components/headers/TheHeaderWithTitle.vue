<template>
  <section class="section">
        <!-- here we set up the image with the Title -->
        <div class="img" :style="`background-image: url(${this.imgUrl}) `"></div>
        
        <div class="title-div">
            <h1 class="title">{{title}}</h1>
            <h3 class="subheading">{{subtitle}}</h3>
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
        color: var(--palette-blue);
        background-color: var(--palette-green);
    }


    .title {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 40px;
    }

    .subheading {
        font-family: "Oswald";
        font-weight: 300;
        letter-spacing: 1.2px;
        margin-bottom: 30px;

    }


    @media only screen and (width: 1400px) {
        .img {
            background-position: right top ;
        }
    }
    

</style>