<template>
    <section class="all-sections">
        <the-header-rounded-image class="header"
            :header="data.name"
            :subheader="data.address"
            :imgUrl="data.img"/>
        <breadcrumbs/>
        <overview-component class="subheader"
            :title="overviewTitle"
            :description="data.description" />
        <cards-additional-contentens-group class="transition-links"
            :title="cardGroupTitle"
            :objList="data.list"
            :partialPath="cardGroupPartialPath"/>
    </section>
</template>

<script>
import TheHeaderRoundedImage from '~/components/headers/TheHeaderRoundedImage.vue'
import OverviewComponent from '~/components/information-components/OverviewComponent.vue'
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue'
import Breadcrumbs from '~/components/utilities-components/breadcrumbs'

export default {
    name: "PlacePage",
    components: {
        TheHeaderRoundedImage,
        OverviewComponent,
        CardsAdditionalContentensGroup,
        Breadcrumbs,
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
    .subheader {
        background-color: var(--palette-green-dark);
        color: var(--palette-blue);
    }
    .transition-links {
        padding: 5% 0;
        color: var(--text-color-light);
        background-color: var(--palette-blue);

    }
</style>
