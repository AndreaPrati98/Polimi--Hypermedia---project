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
                    :alt="`pictrure of ${header}`">
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
        min-height: 175px;
        display: flex;
        justify-content: space-between;
        background-color: var(--palette-soft-blue);
        overflow: hidden;
    }
    
    .image-wrapper .image{
        height: 100%;
        width: 100%;
        
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;

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

    .text-wrapper h4 {
        color: var(--palette-blue);
    }

    .image-container, .text-container {
        margin: 0 30px;
        width: 40%;
        font-size: 40px;
    }

    @media (max-width: 1050px) {
        .section {
            flex-direction: column;
            align-items: center;
        }

        .image-wrapper .image {
            height: 100%;
            width: 100%;
            object-position: center center;
            /* max-width: 100%; */
            border-radius: 0;   
        }

        .text-container {
            margin: 10px 0;
        }
        .image-container, .text-container {
            width: 100%;
            text-align: center;
            font-size: 20px;
        }
    
    }
</style>