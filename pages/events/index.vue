<template>
    <section>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :image="pageData.imgUrl" />
        <subheader-component class="subheader"
            :content="pageData.description" />
        <dropdown-component 
            :formName="'type of art selector'"
            :objList="allTypeOfArts" 
            @change="filterObjList"/>
        
        <grid-component 
            :partialPath="'events'"
            :objList="eventsToDisplay"/>
        
    </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import SubheaderComponent from '~/components/information-components/SubheaderComponent.vue'
import GridComponent from '~/components/medium-components/GridComponent.vue'
import DropdownComponent from '~/components/utilities-components/DropdownComponent.vue'
export default {
    name: 'event-page',
    components: { 
        TheHeaderWithTitle,
        SubheaderComponent,
        GridComponent,
        DropdownComponent
    },
    data() {
        const pageData = {
            title: "All the Events",
            shortDescription: "Here we are with all the upcoming events of the festival",
            description: "The programme includes shows, but also readings, exhibitions, films, and debates, which are so many gateways into the worlds of the artists and intellectuals invited to the Festival. Every evening, there is at least one show première, making Avignon a place of true creation and adventure for artists and spectators alike.",
            imgUrl: "palais-des-papes-g04269230e_1920.jpg",
        }

        return {
            pageData,
            typeOfArtFilter: "All",
        }
    },
    async asyncData({ $axios }) {
        
        const  [events, typeOfArts]  = await Promise.all([
                $axios.get('/api/events'),
                $axios.get('/api/typeofart'),
                ])
        return {
            allEvents: events.data,
            eventsToDisplay: events.data,
            allTypeOfArts: typeOfArts.data,
        }
    },
    methods: {
        filterObjList(id) {
            // let's filter over the type of art Id
            if(id !== "All") {
                this.eventsToDisplay = this.allEvents.filter(el => (el.typeOfArtId === (id)))
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
    }
</style>