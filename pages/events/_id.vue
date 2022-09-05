<template>
    <section class="all-sections">
        <the-header-with-title class="header"
            :title="event.name"
            :imgUrl="event.img"/>
        <breadcrumbs/>
        <overview-component class="subheader"
            title="OVERVIEW" 
            :description="event.description"/>
        <div class="info-section">
            <div class="col" v-for="(element, index) of tabItems"
                :key="`col-${index}`">
                <div class="title">{{element.tabTitle}}</div>
                <div class="content">{{element.tabContent}}</div>

                <div v-if="element.link" class="text-button-container">
                    <button-animated class="ticket-button"
                    :btnText="element.link.button" 
                    :btnDst="element.link.destination" 
                    :isNuxtLink="element.link.nuxtLink" />
                </div>
            </div>
        </div>

        <cards-additional-contentens-group class="transition-links" 
            :title="text" 
            :objList="event.list"
            :partialPath="'/artists'"/>
        
        <div class="group-links">
            <group-link-buttons-component :text="`See all events`" :listOfButtons="listOfGroupLinkButtons.slice(3,4)" />
            <group-link-buttons-component :text="`See all events by`" :listOfButtons="listOfGroupLinkButtons.slice(0,3)" />
        </div>
    </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue';
import ButtonStandard from '~/components/utilities-components/ButtonStandard.vue';
import Breadcrumbs from '~/components/utilities-components/BreadcrumbsComponent.vue';
import ButtonAnimated from '~/components/utilities-components/ButtonAnimated.vue';
import GroupLinkButtonsComponent from '~/components/GroupLinkButtonsComponent.vue';
export default {
    name: "artist-page",
    components: {
        TheHeaderWithTitle,
        OverviewComponent,
        CardsAdditionalContentensGroup,
        ButtonAnimated,
        Breadcrumbs,
        GroupLinkButtonsComponent
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
            tabItems,
            listOfGroupLinkButtons: [
                {btnText: listOfArts.data[0].name, btnDst:"/events?filter=" + listOfArts.data[0].id + "&filterName=" + listOfArts.data[0].name},
                {btnText: listOfArts.data[1].name, btnDst:"/events?filter=" + listOfArts.data[1].id + "&filterName=" + listOfArts.data[1].name},
                {btnText: listOfArts.data[2].name, btnDst:"/events?filter=" + listOfArts.data[2].id + "&filterName=" + listOfArts.data[2].name},
                {btnText: "All Events", btnDst:"/events"},
            ],
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
/** Maybe make this into another component... */
.col {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
/** END OF MAYBE MAKE THIS ANOTHER COMPONENT */

.subheader {
    background-color: var(--palette-soft-blue);
    color: var(--text-color-light);
}

.info-section {
    background-color: var(--palette-green-dark);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 10%;
    padding: 7% 0;
    justify-content: space-around;
}

.transition-links {
    padding: 5% 0;
    background-color: var(--palette-blue);
    color: var(--text-color-light);
    width: 100%;
}

.group-links {
    background-color: var(--palette-green);
    display: flex;
    flex-direction: row;
    padding: 10%;
    width: 100%;
    height:100%;
}

</style>