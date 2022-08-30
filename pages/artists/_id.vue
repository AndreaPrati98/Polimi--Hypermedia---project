<template>
  <section class="all-sections">

    <div class="section1">
        <bio-header :title="name"/>
    </div>



    <div class="section2">
        <div class="overview-comp">
            <overview-component 
                title="ABOUT" 
                :description="description"/>
        </div>
        <div class="img-comp">
            <img alt="funny cat" class="image"
                :src="img" >
        </div>
    </div>

    <div class="section3">
        <transitional-link-cards linkText="Events including this artist" :list="list"/>

    </div>


  </section>
</template>

<script>
import CardAdditionalContent from '~/components/img-component/CardHoverAdditionalContent.vue';
import Default from '~/layouts/default.vue';
import BioHeader from '~/components/artist-bio-header.vue';
import TransitionalLinkCards from '~/components/CardsAdditionalContentensGroup.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
export default {
    name: "ArtistPage",
    components: {Default, BioHeader, CardAdditionalContent, TransitionalLinkCards, OverviewComponent},

    async asyncData({ route, $axios }) {
        const { id }  = route.params
        const { data } = await $axios.get('/api/artists/' + id)
        const list = []
        for (const element of data[0].events) {
            list.push({
                title: element.title,
                content: element.date,
                imgUrl: element.img,
                btnText: "See More",
                destination:"/events/" + element.id,
            })
        }
        return {
            id: data[0].id,
            name: data[0].name,
            img: data[0].img,
            date_of_birth: data[0].date_of_birth,
            description: data[0].description,
            list: list


        }
    },

}
</script>

<style scoped>

section {
    display: flex;
    flex-direction: column;
}

.all-sections {
    display: flex;
    flex-direction: column;
}

.section1 {
    width: 100%;
}

.section2 {
    background-color: var(--palette-green-dark);
    color: var(--text-color-light);
    display: flex;  
    width: 100%;
    padding: 5% 0;
}

.section3 {
    background-color: var(--palette-blue);
    color: var(--text-color-light);
    width: 100%;
    padding: 5% 0;
}

.overview-comp {
    padding: 15% 5%;
    color: var(--palette-blue);
    width: 100%;

}
.img-comp {
    margin: 5% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image {
    width: 100%;
}

</style>

