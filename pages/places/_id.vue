<template>
    <div class="page">
        <div class="section1">
            <the-header-rounded-image class="header"
                :header="data.name"
                :subheader="data.address"
                :imgUrl="data.img"/>
            
            <div class="breadcrumbs-container">
                <breadcrumbs-component class="breadcrumbs"/>
            </div>
        </div>
        <div class="section2">
            <overview-component class="overview-component component"
                :title="overviewTitle"
                :description="data.description" />
        </div>
        <div class="section3">
            <span class="separator"></span>
            <cards-additional-contentens-group class="cards-component component"
                :title="cardGroupTitle"
                :objList="data.list"
                :partialPath="cardGroupPartialPath"/>
        </div>
        
    </div>
</template>

<script>
import TheHeaderRoundedImage from '~/components/headers/TheHeaderRoundedImage.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue'
import BreadcrumbsComponent from '~/components/utilities-components/BreadcrumbsComponent.vue'

export default {
    name: "PlacePage",
    components: {
    TheHeaderRoundedImage,
    OverviewComponent,
    CardsAdditionalContentensGroup,
    BreadcrumbsComponent
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
        const list = []
        for(const element of data.events) {
            list.push({
                id: element.id,
                name: element.name,
                content: "",
                img: element.img,
            })
        }

        data.list = list

        return {
            data,
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
    .section2 {
        background-color: var(--palette-green-dark);
    }
    .section3 {
        background-color: var(--palette-blue);
    }
    
    .overview-component {
        padding: 10% 15%;
    }
    .cards-component {
        padding: 5% 0;
        color: var(--text-color-light);
    }
</style>
