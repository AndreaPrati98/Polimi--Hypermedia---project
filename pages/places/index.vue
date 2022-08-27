<template>
    <section>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :image="pageData.imgUrl" />
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
import GridComponent from '~/components/medium-components/grid-component.vue'

export default {
    name: 'places-page',
    components: { 
        TheHeaderWithTitle,
        SubheaderComponent,
        GridComponent,
    },
    data() {
        const pageData = {
            title: "All the Places",
            shortDescription: "Getting fascinated by Avignon is easy. The places are all amazing.",
            description: "The theaters are beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam sed tempora rem itaque atque error aut temporibus blanditiis! Atque ea libero inventore, officiis vero minus et sapiente tempore nihil.",
            imgUrl: "palais-des-papes-g04269230e_1920.jpg",
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
