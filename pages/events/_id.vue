<template>
    <section class="section">
        <the-header-with-title :title="eventTitle" class="header"/>

        <div class="all-sections">

            <div class="section1">
                <div class="overview-comp">
                    <overview-component title="OVERVIEW" :description="eventDescription"/>
                </div>
                <div class="img-comp">
                    <img :src="eventImg" alt="funny cat" class="image">
                </div>
            </div>
            <div class="section2">
                <MultipleShortOverviewContainer :title="'Event Information'" :items="items" class="info-comp"/>
            </div>

            <div class="section3">
                <cards-additional-contentens-group class="events-comp" :linkText="text" :list="list"/>
            </div>

            <div class="section4">
                <div class="seeall">
                    <div class="see-text">
                        <p>See all other events</p>
                    </div>
                    <div class="allButtons">
                        <div class="button-box">
                            <div class="all-other-btn">
                                <button-standard class="group-btn" btnText="All Events" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="seeallby">
                    <div class="see-text">
                        <p>See all events by...</p>
                    </div>
                    <div class="allButtons">
                        <div class="button-box">
                            <div class="theater-btn">
                                <button-standard class="group-btn" btnText="Theater" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                            <div class="music-btn">
                                <button-standard class="group-btn" btnText="Music" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                            <div class="dance-btn">
                                <button-standard class="group-btn" btnText="Dance" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import InfoComponent from '~/components/information-components/MultipleShortOverviewContainer.vue';
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue';
import ButtonStandard from '~/components/utilities-components/ButtonStandard.vue';
export default {
    name: "artist-page",
    components: {
    InfoComponent,
    TheHeaderWithTitle,
    OverviewComponent,
    MultipleShortOverviewContainer,
        CardsAdditionalContentensGroup,
        ButtonStandard
    },

    async asyncData({ route, $axios }) {
        const  { id }  = route.params
        const { data } = await $axios.get('/api/events/' + id)

        const list = []
        for(const element of data.artists) {
            list.push({
                title: element.name,
                content: "",
                imgUrl: element.img,
                destination:"/artists/" + element.id,
            })
        }


        const items  = [

            {
                tabTitle: "Date",
                tabContent: "This event will take place on " + data.date,
            },
            {
                tabTitle: "Time",
                tabContent: "This event will be held at " + data.time,

            },
            {
                tabTitle: "Venue",
                tabContent: "This event will take place at " + data.place.name,
                link: "/places/" + data.place.id, 
            }
        ]



        return {
            eventTitle: data.title,
            eventDescription: data.description,
            eventImg: data.img,
            eventDate: data.date,
            eventTime: data.time,
            eventDetails: data.details,
            eventPlaceId: data.placeId,
            eventType: data.typeOfArtId,
            eventArtistList: data.artists,
            list: list,
            items: items,


            
            }
    },

    data() {
        return{
            text: "Artists Performing at this Event",
            }
        },




    
}
</script>

<style scoped>



.see-text {
    font-family: "Poppins";
    font-size: 36px;
    font-weight: 200;
    padding-bottom: 5%;
    color: var(--palette-blue)
}
.allButtons {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
}

.button-box {
    width:80%;
    max-width: 180px;
}

.group-btn {
    width:100%;
    margin:5% 0;
}




.all-sections {
    display: flex;
    flex-direction: column;
}
.section1 {
    background-color: var(--palette-soft-blue);
    color: var(--text-color-light);
    display: flex;
    
}
.section2 {
    background-color: var(--palette-green-dark);
}
.section3 {
    background-color: var(--palette-blue);
    color: var(--text-color-light)
}


.section4 {
    background-color: var(--palette-green);
    display: flex;
    flex-direction: row;
    padding: 10%;
    width: 100%;
    height:100%;
}






.seeall {
    width: 50%;
    text-align: center;



}

.seeallby{
    border-left: 4px solid var(--palette-red-dark);

    display: flex;
    flex-direction: column;
    padding-left:20px;
    width: 50%;
    justify-self: center;
    text-align: center;


    

}

.overview-comp {
    padding: 15% 5%;

}

.img-comp {
    margin: 5% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-comp {
    width: 100%;
    padding: 5% 15%;  
}

.events-comp {
    padding: 5%;
}

.image {
    width: 100%;
}




.wrapper{ 
    height: 100%;
    display: grid;
    place-items: center;
}

.typing{
    width: 22ch;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid black;
    font-family: monospace;
    font-size: 2em;
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from {
        width: 0
    }
    
}



</style>