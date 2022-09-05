<template>
    <section class="all-sections">
        <the-header-with-title class="header"
            :title="artist.name"
            :subtitle="artist.date_of_birth"
            :imgUrl="artist.img" />
        <breadcrumbs/>
        <overview-component class="subheader"
            :title="overviewTitle" 
            :description="artist.description"/>
        <cards-additional-contentens-group class="transition-links"
            :title="'Other events related to this artist'"
            :objList="artist.list"
            :partialPath="'/events'"/>
    </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import Breadcrumbs from '~/components/utilities-components/Breadcrumbs.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue'
export default {
    name: "ArtistPage",
    components: {
    TheHeaderWithTitle,
    Breadcrumbs,
    OverviewComponent,
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
    .subheader{
        background-color: var(--palette-soft-blue);
        color: var(--text-color-light);

    }

    .transition-links {
        padding: 5% 0;
        background-color: var(--palette-green-dark);
        width: 100%
    }
</style>

