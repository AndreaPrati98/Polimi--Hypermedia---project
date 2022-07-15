<template>
    <div class="carousel-container">
        <div class="forediv">
            foreground
        </div>
        <div class="backdiv">
            background
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeBody",
}
</script>

<style scoped>
    * {
        border: solid;
    }

    .carousel-container{
        height: 400px;
        border-color: red;
    }
    
    .forediv, .backdiv {
        position: fixed;
        width: 100%;
        height: 300px;
        border-color: blue;
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .forediv {
        z-index: 10; 
        background: rgba(68, 0, 145, .4);
    }

    .backdiv {
        justify-content: right;
        background: rgba(255, 255, 255, .4);
    
        
    }



</style>