<template>
    <section>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :imgUrl="pageData.imgUrl" />
        <breadcrumbs/>
        <subheader-component class="subheader"
            :content="pageData.description" />
        <grid-component 
            :partialPath="'places'"
            :objList="allPlaces"/>
    </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import SubheaderComponent from '~/components/information-components/SubheaderComponent.vue'
import GridComponent from '~/components/medium-components/GridComponent.vue'
import Breadcrumbs from '~/components/utilities-components/Breadcrumbs.vue'

export default {
    name: 'places-page',
    components: {
    TheHeaderWithTitle,
    SubheaderComponent,
    GridComponent,
    Breadcrumbs
},
    data() {
        const pageData = {
            title: "All the Places",
            shortDescription: "Getting fascinated by Avignon is easy. The places are all amazing.",
            description: "During the Festival, the city of Avignon comes alive. Historical landmarks that are usually dormant and recognized for what they once were, get to breathe in the life of art once again. In true spirit of the circle of life, the expansion of the Festival has also enabled to fund the construction of new venues and places to host events. Spectators not only get to experience the show they are attending, but they also get add to the significance of each place that helps bring the Festival to life.",
            imgUrl: "https://cdn.pixabay.com/photo/2016/03/10/17/01/stage-1248769__480.jpg",
        }

        return {
            pageData
        }
    },
    async asyncData({ $axios }) {
        
        const { data } = await $axios.get('/api/places')
        return {
            allPlaces: data,
        }
    },

}
</script>
