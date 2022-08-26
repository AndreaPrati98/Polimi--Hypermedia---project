<template>
  <section class="section">
        <!-- here we set up the image with the Title -->
        <!-- <img src="../assets/imgs/palais-des-papes-g48e250825_640.jpg" alt="Palace of the Popes" class="img"> -->
        <div class="img">
            
        </div>
        <div class="title-div">
            <h1>Title</h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quia.</h3>
        </div>
    </section>
</template>

<script>
export default {
    name: "header-w-title",
}
</script>

<style scoped>

    .section {
        display: grid;
        grid-template: repeat(4, 1fr) / repeat(4, 1fr);
        height: 70vh;
    }

    .img {
        background-image: url("~/assets/imgs/palais-des-papes-g04269230e_1920.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        width: auto;
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