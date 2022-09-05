<template>
    <section>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :imgUrl="pageData.imgUrl" />
        <breadcrumbs-component/>
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
import BreadcrumbsComponent from '~/components/utilities-components/BreadcrumbsComponent.vue'

export default {
    name: 'places-page',
    components: {
    TheHeaderWithTitle,
    SubheaderComponent,
    GridComponent,
    BreadcrumbsComponent
},
    data() {
        const pageData = {
            title: "All the Places",
            shortDescription: "Getting fascinated by Avignon is easy. The places are all amazing.",
            description: "The theaters are beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam sed tempora rem itaque atque error aut temporibus blanditiis! Atque ea libero inventore, officiis vero minus et sapiente tempore nihil.",
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
