<template>
    <div class="img">
        <div class="txt-wrapper">
            <div class="txt">
                <h2>Titolo</h2>
                <!-- <p>Piccola descrizione</p> -->
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste minima quo consequuntur nulla laborum inventore? Quam deleniti esse ducimus eveniet!</p>
                <button-std class="btn" :btnDst="'/festival-practical-info'"/>
            </div>
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

    .txt-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 100%;

        border: 2px solid green;
        
        transition: backdrop-filter .3s ease-in .2s,
                    background-color .3s ease-out,
                        
    }

    .txt-wrapper:hover {
        backdrop-filter: grayscale(100%);
        background-color: rgba(255, 255, 255, 0.3);
    }

    .txt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow: scroll;

        padding: 10px;
        border: 1.5px solid black;
        
        /* backdrop-filter: opacity(1); */
        background-color: rgba(255, 255, 255, 0.8);
    }

</style>