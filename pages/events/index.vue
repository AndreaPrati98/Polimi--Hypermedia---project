<template>
    <section class=all-sections>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :image="pageData.imgUrl" />
        <div class="section1">
            <subheader-component class="subheader"
                :content="pageData.description" />
        </div>
        <div class="section2">
            <grid-component 
                :partialPath="'events'"
                :objList="allEvents"/>
        </div>
    </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import SubheaderComponent from '~/components/information-components/SubheaderComponent.vue'
import GridComponent from '~/components/medium-components/grid-component.vue'
export default {
    name: 'event-page',
    components: { 
        TheHeaderWithTitle,
        SubheaderComponent,
        GridComponent,
    },
    data() {
        const pageData = {
            title: "All the Events",
            shortDescription: "Here we are with all the upcoming events of the festival",
            description: "The programme includes shows, but also readings, exhibitions, films, and debates, which are so many gateways into the worlds of the artists and intellectuals invited to the Festival. Every evening, there is at least one show première, making Avignon a place of true creation and adventure for artists and spectators alike.",
            imgUrl: "palais-des-papes-g04269230e_1920.jpg",
        }

        return {
            pageData
        }
    },
    async asyncData({ $axios }) {
        
        const { data } = await $axios.get('/api/events')
        return {
            allEvents: data,
        }
    },

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

    
</style>