<template>
    <section>
        <the-header-with-title class="header"
            :title="pageData.title" 
            :subtitle="pageData.shortDescription" 
            :imgUrl="pageData.imgUrl" />
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

export default {
    name: "artists-page",
    components: { 
        TheHeaderWithTitle,
        SubheaderComponent,
        GridComponent,
    },
    data() {
        const pageData = {
            title: "All the Artists",
            shortDescription: "Getting fascinated by Avignon is easy. The performers are all amazing.",
            description: "The theaters are beautiful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam sed tempora rem itaque atque error aut temporibus blanditiis! Atque ea libero inventore, officiis vero minus et sapiente tempore nihil.",
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

  .card-container {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);

    justify-items: center;

    grid-auto-flow: dense;
  }

  .box {
    width: 100%;
    height: 300px;
  }

  .box:nth-child(4n + 1) {
    /* border: 2px solid blue; */
    grid-column: 1 / span 2;
  }

  .box:nth-child(4n + 3) {
    /* border: 2px solid green; */
    grid-column: 2 / span 2;
  }

</style>