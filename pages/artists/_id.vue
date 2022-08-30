<template>
  <section class="allSections">

    <div class="section1">
        <bio-header :title="name"/>
    </div>

    <div class="section2">
        <div class="overview-comp">
            <overview-component title="ABOUT" :description="description" />
        </div>
        <div class="img-comp">
            <img :src="img" />
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


.allSections {
    max-width: 100%;
}
.section1 {
    width: 100%;

}

.section2 {
    background-color: var(--palette-green);
    width: 100%;
    display: flex;
    flex-direction: row;
}


.overview-comp {
    padding: 15% 5%;

}

.img-comp {
    margin: 5% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section3 {
    background-color: var(--palette-light-cyan);
    width: 100%;
}

.left-slot {
    border-radius: 50%;
    align-items: right;
    width: 300px;
    height: 300px;
    float: right;
    position: relative;
    top: -150px;
    right: 10px;
}
h1 {
    padding-left: 5%;
    width: 100%;
    font-family: 'Open Sans';
    font-weight: 800;
    font-size: 2.5em;
}
ul {
    width: 100%;
    padding-left: 10%;
    font-family: 'Poppins';

    list-style-type:circle;
}

p {
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 2%;
    font-family:'Open Sans';
    font-weight: 400;
}

img {
    height:35%;
    width: 25%;
}

.left{
    
    background: unset;
    padding: 12px;
    border-right: 1px solid red;
    float: left;
    margin-left: 2%
}

.right{
    
    background: unset;
    padding: 12px;
    border-left: 1px solid red;
    float: right;
    margin-right: 2%;
    }

.where {
    display:flex;
    position: relative;
}
hr {
    width:70%;
    margin-left: auto;
    margin-right: auto;
    color: red;
    margin-top: 30px;
    
}
section {
    display: flex;
    flex-wrap: wrap;
}


</style>




</script>
