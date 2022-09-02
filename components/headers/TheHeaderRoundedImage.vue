<template>
    <section class="section">
        <div class="text-container">
            <div class="text-wrapper">
                <h1>{{header}}</h1>
                <h4>{{subheader}}</h4>
            </div>
        </div>
        <div class="image-container">
            <div class="image-wrapper">
                <img class="image" 
                    :src="imgUrl" 
                    alt="pictrure of the place">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "the-header-rounded-image",
    props: {
        header: {
            type: String,
            required: true,
        },
        subheader: {
            type: String,
        },
        imgUrl: {
            type: String,
            required: true,
            default: "https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_1280.jpg",
        }


    }
}
</script>

<style scoped>
    .section {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        background-color: var(--palette-soft-blue);
    }

    .image {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        
        border-radius: 50%;
    }

    .image-wrapper {
        height: 400px;
        width: 400px;

        display: flex;
        justify-content: center;
    }
    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

   
    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "Oswald";
        font-weight: 600;
        color: var(--text-color-light);
    }

    h1 {
        font-size: 3em;
    }

    h4 {
        color: var(--palette-blue);
    }



    .image-container, .text-container {
        margin: 0 30px;
        width: 40%;
    }
</style>