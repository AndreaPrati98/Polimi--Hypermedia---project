<template>
  <section>
    <the-header-with-title
        :title="artist.name"
        :subtitle="artist.date_of_birth"
        :imgUrl="artist.img" />

    <overview-component 
        :title="overviewTitle" 
        :description="artist.description"/>

    <multiple-short-overview-container 
        :title="eventsRelatedTitle"
        :objList="artist.events"/>
  </section>
</template>

<script>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
export default {
    name: "ArtistPage",
    components: {
        TheHeaderWithTitle, 
        OverviewComponent, 
        MultipleShortOverviewContainer,
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
        return {
            artist: data,
        }
    },

}
</script>

<style scoped>

</style>




