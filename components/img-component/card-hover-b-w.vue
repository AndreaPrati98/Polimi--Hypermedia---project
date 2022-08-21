<template>
    <div class="img">
        <div class="txt">
            <h2>Titolo</h2>
            <p>Piccola descrizione</p>
            <button-std class="btn" :btnDst="'/festival-practical-info'"/>
        </div>
    </div>
</template>

<script>
import buttonStd from '../utilities-components/button-std.vue'
export default {
  components: { buttonStd },
    name: "card-hover-b-w",
}
</script>

<style scoped>

    
    .img {
        background-position: center;
        background-repeat: no-repeat;
        
        background-image: url(../../assets/imgs/tickets.jpg);
        background-size: cover;
        
    }

    .txt {
        border: 2px solid green;
        color: rgba(0, 0, 0, 1) !important;
        height: 100%;
        
        transition: backdrop-filter .3s ease-in .2s,
                    background-color .3s ease-out,
                        
    }

    .txt:hover {
        backdrop-filter: grayscale(100%);
        background-color: rgba(255, 255, 255, 0.3);
    }


</style>