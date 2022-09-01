<template>
    <section class=all-sections>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :imgUrl="pageData.imgUrl" />
        <breadcrumbs/>
        <div class="section1">
            <subheader-component class="subheader"
                :content="pageData.description" />
        </div>
        
        <dropdown-component 
            :formName="'type of art selector'"
            :objList="allTypeOfArts" 
            @change="filterObjList"/>
        
        <div class="section2">
            <grid-component 
                :partialPath="'events'"
                :objList="eventsToDisplay"/>
        
        </div>

    </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import SubheaderComponent from '~/components/information-components/SubheaderComponent.vue'
import GridComponent from '~/components/medium-components/GridComponent.vue'
import DropdownComponent from '~/components/utilities-components/DropdownComponent.vue'
import Breadcrumbs from '~/components/utilities-components/Breadcrumbs.vue'
export default {
    name: 'event-page',
    components: {
    TheHeaderWithTitle,
    SubheaderComponent,
    GridComponent,
    DropdownComponent,
    Breadcrumbs
},
    data() {
        const pageData = {
            title: "All the Events",
            shortDescription: "Here we are with all the upcoming events of the festival",
            description: "The programme includes shows, but also readings, exhibitions, films, and debates, which are so many gateways into the worlds of the artists and intellectuals invited to the Festival. Every evening, there is at least one show première, making Avignon a place of true creation and adventure for artists and spectators alike.",
            imgUrl: "https://cdn.pixabay.com/photo/2015/05/29/19/18/crowd-789652_1280.jpg",
        }

        return {
            pageData,
        }
    },
    async asyncData({ route, $axios }) {
        // here we retrieve also type of art so that we can create the proper filter
        const  [events, typeOfArts]  = await Promise.all([
                $axios.get('/api/events'),
                $axios.get('/api/typeofart'),
                ])
        /* 
            the eventsToDisplay is there because it will be the
            element displayed, otherwise if we would filter over
            the original list we would have to re-do the api call
            to get again all the events
        */ 

        const result = {
            allEvents: events.data,
            eventsToDisplay: events.data,
        }

        // check if route.query is empty or not
        const isEmptyQuery = Object.keys(route.query).length === 0
        let typeOfArtFilter
        if (!isEmptyQuery) {
            typeOfArtFilter = route.query.filter
            console.log('eventi prima del filter '+ result.eventsToDisplay.length);
            result.eventsToDisplay = result.allEvents.filter(el => (el.typeOfArtId === (+typeOfArtFilter)))
            console.log('eventi dopo il filter '+ result.eventsToDisplay.length);
        } 

        return {
            allEvents: result.allEvents,
            eventsToDisplay: result.eventsToDisplay,
            allTypeOfArts: typeOfArts.data,
        }
    },
    methods: {
        filterObjList(art_id) {
            // let's filter over the type of art Id
            if(art_id !== "All") {
                this.eventsToDisplay = this.allEvents.filter(el => (el.typeOfArtId === (art_id)))
            } else {
                this.eventsToDisplay = this.allEvents
            }
        }
    }

}
</script>

<style scoped>
    .subheader {
        margin-bottom: 2px;
        padding: 10% 7%;
    }

    .section1, .section2{
        width: 100%;
        height: 100%;
    }

    .section2 {
        background-color: var(--palette-light-cyan);
    }
    
</style>