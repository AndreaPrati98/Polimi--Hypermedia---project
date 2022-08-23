<template>
    <section class="container">
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
                    :descTxt="this.resultObj.tickets.description"
                    :btnTxt="this.resultObj.tickets.buttonTxt"
                    :btnDst="this.resultObj.tickets.buttonDst"
                    :imgUrl="this.resultObj.tickets.imgUrl"/>
                
                <card-hover-b-w 
                    :descTxt= "this.resultObj.date.description"
                    :btnTxt= "this.resultObj.date.buttonTxt"
                    :imgUrl="this.resultObj.date.imgUrl"
                    :btnDst="this.resultObj.date.buttonDst"/>
                
                <card-hover-b-w 
                    :descTxt= "this.resultObj.accessibility.description"
                    :btnTxt= "this.resultObj.accessibility.buttonTxt"
                    :imgUrl="this.resultObj.accessibility.imgUrl"
                    :btnDst="this.resultObj.accessibility.buttonDst"/>
    
                <card-hover-b-w 
                    :descTxt= "this.resultObj.location.description"
                    :btnTxt= "this.resultObj.location.buttonTxt"
                    :imgUrl="this.resultObj.location.imgUrl"
                    :btnDst="this.resultObj.location.buttonDst"/>
    
            </div>
        </section>
    </section>
</template>

<script>
import cardHoverBW from './img-component/card-hover-b-w.vue'
import CardHoverBW from './img-component/card-hover-b-w.vue';
export default {
    name: "title-overlay-2",
    components: { cardHoverBW, CardHoverBW },
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        }
    },
    data() {
        // here we will use axios to retrieve content from the db
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
        // this return the number of entries 
        const count = Object.keys(pageTxtList).length; 
        var resultObj
        // in case we consider more than 4 elements, the system returns only 4 of them
        if(count > 4) {
            var entries;
            entries = Object.keys(pageTxtList);
            for(const element of entries) {
                resultObj[element] = pageTxtList[element]
            }
            console.log("Someone inserted more than 4 elements for the card content");
            return resultObj
        } else {
            resultObj = pageTxtList
        }
        return { resultObj }
    }
}
</script>

<style scoped>

    .section {
        display: grid;
        grid-template-columns: 2fr 5fr;
        height: 100%;
        border: 1px solid red;
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

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
