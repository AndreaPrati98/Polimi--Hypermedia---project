<template>
  <section class="section">
    <the-header-with-title
        :title="artist.name"
        :subtitle="artist.date_of_birth"
        :imgUrl="artist.img" />

    <overview-component 
        :title="overviewTitle" 
        :description="artist.description"/>

    
    <span class="separator"></span>

    <cards-additional-contentens-group 
        :title="'Other events related to this artis'"
        :objList="artist.list"
        :partialPath="'/events'"/>
  </section>
</template>

<script>
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue'
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
export default {
    name: "ArtistPage",
    components: {
        TheHeaderWithTitle, 
        OverviewComponent, 
        MultipleShortOverviewContainer,
        CardsAdditionalContentensGroup,
    },
    data() {
        // everything we see here has to be retrieved from the DB
        return {
            overviewTitle: "Short description",
            eventsRelatedTitle: "This artist is involved...",

        }
    },
    async asyncData({ route, $axios }) {
        const { id }  = route.params
        const { data } = await $axios.get('/api/artists/' + id)
        const list = []
        for (const element of data.events) {
            list.push({
                title: element.title,
                content: element.date,
                imgUrl: element.img,
                btnText: "See More",
                destination: element.id,
            })
        }
        data.list = list;
        
        return {
            artist: data,
        }
    },

}
</script>

<style scoped>

    .separator {
        display: block;
        width: 70%;
        border-top: 2px solid black;
        margin: 0 auto;
    }
</style>




>>>>>>> dev-a
