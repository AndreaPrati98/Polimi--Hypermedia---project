<template>
    <div class="page">
        <the-header-rounded-image class="header"
            :header="place.name"
            :subheader="place.address"
            :imgUrl="place.img"/>
        <overview-component class="overview"
            :title="overviewTitle"
            :description="place.description" />

        <span class="separator"></span>
        <cards-additional-contentens-group 
            :title="cardGroupTitle"
            :objList="place.events"
            :partialPath="cardGroupPartialPath"/>
        
    </div>
</template>

<script>
import TheHeaderRoundedImage from '~/components/headers/TheHeaderRoundedImage.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue'

export default {
    name: "PlacePage",
    components: {
        TheHeaderRoundedImage,
        OverviewComponent,
        CardsAdditionalContentensGroup
    },
    data() {
        return {
            overviewTitle: "Short description",
            cardGroupTitle: "Events hosted here",
            cardGroupPartialPath: "/events",
            
        }
    },
    async asyncData({ route, $axios }) {
        const  { id }  = route.params
        const { data } = await $axios.get('/api/places/' + id)
        return {
            place: data,
        }
    },

}
</script>

<style scoped>
    .header {
        height: 50vh;
    }

    .separator {
        display: block;
        width: 70%;
        margin: 0 auto;
        border-top: 2px solid black;
    }
</style>
