<template>
    <section class="all-sections">
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :imgUrl="pageData.imgUrl" />
        <breadcrumbs/>
        <subheader-component class="subheader"
            :content="pageData.description" />
        <grid-component 
            :partialPath="'artists'"
            :objList="allArtists"/>
    </section>
</template>

<script scoped>
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue'
import SubheaderComponent from '~/components/information-components/SubheaderComponent.vue'
import GridComponent from '~/components/medium-components/GridComponent.vue'
import Breadcrumbs from '~/components/utilities-components/BreadcrumbsComponent.vue'

export default {
    name: "artists-page",
    components: {
    TheHeaderWithTitle,
    SubheaderComponent,
    GridComponent,
    Breadcrumbs
},
    data() {
        const pageData = {
            title: "All the Artists",
            shortDescription: "Getting fascinated by Avignon is easy. The performers are all amazing.",
            description: "The Festival proudly embraces a wide range of art disciplines including classical theater, ballet, improv shows, spoken word, modern music, contemporary dance, classical instrumentalists, and more.  Each artist has a story and the Festival allows each artist to not only showcase their story to the audience, but also to expand on thier story even further. The Festival is a place where artists can also grow. Learn more about each artist here.",
            imgUrl: "https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__480.jpg",
        }

        return {
            pageData
        }
    },
    async asyncData({ $axios }) {
         const { data } = await $axios.get("/api/artists");
         return {
           allArtists: data,
         }
     },
}
</script>

<style scoped>

</style>