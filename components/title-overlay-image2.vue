<template>
    <section class="section">
        <div class="info">
            <h1>Title</h1>
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod facere porro
                repellendus distinctio, iusto doloribus dicta, aspernatur error optio deleniti beatae. 
                Officiis in consequuntur sit, quisquam quibusdam nulla veniam?
            </h4>
        </div>
        <div class="imgs">
            <card-hover-b-w 
                :descTxt="'Go to ticket section'"
                :btnTxt="'Tickets'"/>
            
            <div class="img2">
                Img2
            </div>
            
            <div class="img3">
                Img3
            </div>
                
            <div class="img4">
                img4
            </div>

        </div>
    </section>
</template>

<script>
import cardHoverBW from './img-component/card-hover-b-w.vue'
export default {
  components: { cardHoverBW },
    name: "festival-practical-info",
}
</script>

<style scoped>

    .section div {
        border: 1px solid red;
    }

    .section {
        display: grid;
        grid-template-columns: 2fr 5fr;
        height: 70vh;
    }

    .imgs {
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
    }

    .imgs div {
        background-position: center;
        background-repeat: no-repeat;
        
        transition: filter .2s linear .3s,
                    opacity .3s linear;    
        
    }

    .imgs div:hover {
        filter: grayscale(100%);
        opacity: .7;
    }

    .img1 {
        background-image: url(../assets/imgs/data.png);
        background-size: contain;
    }

    .img2 {
        background-image: url(../assets/imgs/location.png);
        background-size: contain;
    }

    .img3 {
        background-image: url(../assets/imgs/tickets.jpg);
        background-size: cover;
    }

    .img4 {
        background-image: url(../assets/imgs/accessibility.png);
        background-size: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
