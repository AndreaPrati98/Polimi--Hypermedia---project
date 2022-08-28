<template>
    <section class="section">
        <the-header-with-title class="header"
             />
        <div class="container-one">
            <overview-component class="overview-comp"/>
            <div class="img-comp">
                <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" alt="funny cat" class="image">
            </div>
            <!-- <div class="overview-info-container"> -->
            <div class="art-container">
                <multiple-short-overview-container :title="'Artists Involved'" class="info-comp"/>
            </div>
            
            <overview-component class="place-comp"/>
            <!-- </div> -->
        </div>

    <span class="separator"></span>

    <!-- here the group links -->
        <div class="all-events">
            
        </div>
        <div class="all-events by-type">

        </div>
    </section>
</template>

<script>
import InfoComponent from '~/components/information-components/MultipleShortOverviewContainer.vue';
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';
export default {
    name: "artist-page",
    components: {
        InfoComponent,
        TheHeaderWithTitle,
        OverviewComponent,
        MultipleShortOverviewContainer
    },
    props: {
        eventTitle: {
            type: String,
            required: true,
        }
    },
    async asyncData({ route, $axios }) {
        const { id }  = route.params
        const { data } = await $axios.get('/api/events/' + id)
    
        return {
            event: data,
        } 
    }

}
</script>

<style scoped>

    /* here the layout settings */
    .container-one {
        padding: 0 3%;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        grid-template-areas:    'ev ev img'
                                'art art art'
                                'place place place';
    }

    .overview-comp {
        grid-area: ev;
    }

    .img-comp{
        grid-area: img;
    }

    .place-comp {
        grid-area: place;
    }

    .art-container {
        grid-area: art;
        display: flex;
        justify-content: center;
    }

    /* here the single style settings */

    .separator {
        border-top: 1px solid red;
        margin: 0 auto;
        width: 70%;
        height: 1px;
        display: block;
    }

    .info-comp {
        width: 100%;
    }

    .img-comp {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image {
        width: 100%;
    }

</style>