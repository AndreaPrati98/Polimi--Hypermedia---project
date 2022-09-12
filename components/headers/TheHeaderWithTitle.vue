<template>
  <section class="section">
        <!-- here we set up the image with the Title -->
        <img :src="imgUrl" :alt="`${title} -image`" class="img">
        
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
            required: false,
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
        overflow: hidden;
    }

    .img {
        object-fit: cover;
        object-position:  center;

        width: 100%;
        height: 100%;

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
        padding: 10px;
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

    @media (max-width: 600px) {
        .img {
            grid-area: 2 / 1 / 5 / 5;
        }
        .title-div {
            grid-area: 1 / 1 / 2 / 5;
            
            text-align: center;
        }
    }

    
    

</style>