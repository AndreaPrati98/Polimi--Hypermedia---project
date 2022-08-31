<template>
    <section class="container">
        <section class="section">
            <div class="info">
                <h1>{{title}}</h1>
                <h4>
                    {{subtitle}}
                </h4>
            </div>
    
            <div class="imgs">
                    
                <card-hover-black-white 
                    :descTxt="this.pageTxtList.description"
                    :btnTxt="this.pageTxtList.buttonTxt"
                    :btnDst="this.pageTxtList.buttonDst"
                    :imgUrl="this.pageTxtList.imgUrl"/>
            
                <card-hover-black-white 
                    :descTxt= "this.pageTxtList.date.description"
                    :btnTxt= "this.pageTxtList.date.buttonTxt"
                    :imgUrl="this.pageTxtList.date.imgUrl"
                    :btnDst="this.pageTxtList.date.buttonDst"/>
                
                <card-hover-black-white 
                    :descTxt= "this.pageTxtList.accessibility.description"
                    :btnTxt= "this.pageTxtList.accessibility.buttonTxt"
                    :imgUrl="this.pageTxtList.accessibility.imgUrl"
                    :btnDst="this.pageTxtList.accessibility.buttonDst"/>
    
                <card-hover-black-white 
                    :descTxt= "this.pageTxtList.location.description"
                    :btnTxt= "this.pageTxtList.location.buttonTxt"
                    :imgUrl="this.pageTxtList.location.imgUrl"
                    :btnDst="this.pageTxtList.location.buttonDst"/>
    
            </div>
        </section>
    </section>
</template>

<script>
import CardHoverAdditionalContent from '../img-component/CardHoverAdditionalContent.vue';
import CardHoverBlackWhite from '../img-component/CardHoverBlackWhite.vue';

export default {
  components: { CardHoverAdditionalContent, CardHoverBlackWhite },
    name: "header-w-imgs",
    
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    },
    data() {
        
        var pageTxtList = {
            tickets: {
                description: "Go to tickets",
                buttonTxt: "Tickets",
                buttonDst: "#ticket",
                imgUrl: "https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg",
            },
            date: {
                description: "Go to date",
                buttonTxt: "Date",
                buttonDst: "#date",
                imgUrl: "https://cdn.pixabay.com/photo/2017/01/18/17/52/calendar-1990453_1280.jpg",
            },
            location: {
                description: "Go to location",
                buttonTxt: "Location",
                buttonDst: "#location",
                imgUrl: "https://cdn.pixabay.com/photo/2018/08/01/21/26/map-3578213_1280.jpg",
            },
            accessibility: {
                description: "Go to accessibility",
                buttonTxt: "accessibility",
                buttonDst: "#accessibility",
                imgUrl: "https://cdn.pixabay.com/photo/2015/11/20/18/57/ampel-pusher-1053727_1280.jpg",
            },  
        }
        
        return { pageTxtList }
    }
}
</script>

<style scoped>

    .section {
        display: grid;
        grid-template-columns: 2fr 5fr;
        height: 100%;
        
        box-shadow: 0px 5px 10px grey;
    }

    .imgs {
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
