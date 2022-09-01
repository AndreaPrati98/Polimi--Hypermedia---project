<template>
    <section class="section">
        <the-header-with-title class="header"
            :title="event.name"
            :imgUrl="event.img"/>
        <breadcrumbs/>
        <div class="all-sections">
            <!-- SECTION 1 -->
            <div class="section1">
                <div class="overview-comp">
                    <overview-component 
                        title="OVERVIEW" 
                        :description="event.description"/>
                </div>
            </div>
            <!-- SECTION 2-->
            <div class="section2">
                <div class="col" v-for="(element, index) of tabItems"
                :key="`col-${index}`">
                <div class="title">
                    {{element.tabTitle}}
                </div>
                <div class="content">
                    {{element.tabContent}}
                </div>

                <div v-if="element.link" class="text-button-container">
                    <button-animated class="ticket-button"
                    :btnText="element.link.button" 
                    :btnDst="element.link.destination" 
                    :isNuxtLink="element.link.nuxtLink" />
                </div>
                </div>
            </div>
            <!-- SECTION 3-->
            <div class="section3">
                <cards-additional-contentens-group class="events-comp" 
                    :title="text" 
                    :objList="event.list"
                    :partialPath="'/artists'"/>
            </div>
            <!-- SECTION 4-->
            <div class="section4">
                <div class="seeall">
                    <div class="see-text">
                        <p>See all other events</p>
                    </div>
                    <div class="allButtons">
                        <div class="button-box">
                            <div class="all-other-btn">
                                <button-standard class="group-btn" 
                                    btnText="All Events" 
                                    btnDst="/events" 
                                    btnTextSize="20px" 
                                    :btnBkgdColor="`var(--palette-red-dark)`" />
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
                            <div v-for="(element, index) of listOfArts"
                                :key="`art-button-${index}`">
                                <button-standard class="group-btn"
                                    :btnText="element.name" 
                                    :btnDst="`/events?filter=${element.id}&filterName=${element.name}`" 
                                    btnTextSize="20px" 
                                    :btnBkgdColor="`var(--palette-red-dark)`"/>

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
import Breadcrumbs from '~/components/utilities-components/Breadcrumbs.vue';
export default {
    name: "artist-page",
    components: {
        InfoComponent,
        TheHeaderWithTitle,
        OverviewComponent,
        MultipleShortOverviewContainer,
        CardsAdditionalContentensGroup,
        ButtonStandard,
        Breadcrumbs
    },
    async asyncData({ route, $axios }) {
        const  { id }  = route.params
        
        var [event, listOfArts]  = await Promise.all([
                $axios.get('/api/events/' + id),
                $axios.get('/api/typeofart'),
                ])

        event = event.data

        const list = []
        for(const element of event.artists) {
            list.push({
                id: element.id,
                name: element.name,
                content: "",
                img: element.img,
            })
        }
        event.list = list


        const tabItems  = [
            {
                tabTitle: "Date",
                tabContent: "This event will take place on " + event.date,
            },
            {
                tabTitle: "Time",
                tabContent: "This event will be held at " + event.time,
            },
            {
                tabTitle: "Venue",

                tabContent: "This event will take place at " + event.place.name,
                link: {button: "See More", destination:"/places/" + event.place.id, nuxtLink:true}, 
            }
        ]

        return {
            event,
            items,
            listOfArts: listOfArts.data,
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


.col {
  display: flex;
  flex-direction: column;
  width: 25%;
  
}

.title {
  font-family: "Oswald";
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20%;
  color: var(--palette-red-dark);

}

.content {
  font-family: "Poppins";
  font-weight: 200;
  line-height: 1.7rem;
  font-size: 24px;
  letter-spacing: 1.2px;
  color: var(--palette-blue);
  margin-bottom: 10%;

}




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
    flex-direction: row;
    flex-wrap: wrap 
    
}
.section2 {
    background-color: var(--palette-green-dark);
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10%;
    padding: 7% 0;
    justify-content: space-around;

}
.section3 {
    background-color: var(--palette-blue);
    color: var(--text-color-light);
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

.events-comp {
    padding: 5%;
}
.image {
    width: 100%;
}
</style>