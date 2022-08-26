<template>
    <div class="card">
        <img class="image" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" alt="">
        <div class="text-container">
            <h1>Questo è un test</h1>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template: 100% / 100%;
        border: 1px solid red;
        overflow: hidden;
    }

    .text-container, .image {
        grid-area: 1 / 1 / 2 / 2;

    }
    .text-container {
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 2;
    }

    .image {
        height: 100%;
        width: auto;
        object-fit: cover;
        z-index: 1;
    }
</style>