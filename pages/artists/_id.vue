<template>
  <div class="all-sections">
        <div class="section1">
            <the-header-with-title
                :title="artist.name"
                :subtitle="artist.date_of_birth"
                :imgUrl="artist.img" />
            <breadcrumbs/>
        </div>
        <div class="section2">
            <overview-component class="overview-component"
                :title="overviewTitle" 
                :description="artist.description"/>
        </div>
        <div class="section3">
            <cards-additional-contentens-group class="events-component"
                :title="'Other events related to this artist'"
                :objList="artist.list"
                :partialPath="'/events'"/>
        </div>
  </div>
</template>

<script>
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue'
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
import Breadcrumbs from '~/components/utilities-components/Breadcrumbs.vue'
export default {
    name: "ArtistPage",
    components: {
    TheHeaderWithTitle,
    OverviewComponent,
    MultipleShortOverviewContainer,
    CardsAdditionalContentensGroup,
    Breadcrumbs
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
                id: element.id,
                name: element.name,
                content: element.date,
                img: element.img,
            })
        }
        data.list = list
        
        
        return {
            artist: data,
        }
    },

}
</script>

<style scoped>
    .all-sections {
        display: flex;
        flex-direction: column;
    }

    .section2{
        background-color: var(--palette-soft-blue);
        width: 100%;
    }

    .section3{
        background-color: var(--palette-green-dark);
        width: 100%
    }

    .overview-component {
        padding: 10% 15%;
    }
    .events-component {
        padding: 5%;
    }
</style>




>>>>>>> dev-a
