<template>
    <section class="box1">
      <div class>


        <div class="overview-img-container">
            <OverviewBox class="overview-comp" :description="`La cucina del ristorante, focalizzata su specialità tipicamente romane, propone piatti semplici e gustosi che uniscono sapori e aromi in un perfetto ed armonico equilibrio. Una ricercata selezione di vini accompagna le pietanze proposte sul menù.`"/>
            <div class="img-comp">
                <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" alt="funny cat" class="image">
            </div>
            <div class="art-container">
                <info-component :title="'Artists Involved'" class="info-comp"/>
            </div>
            
            <descriptive-component class="place-comp"/>
        </div>
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
import titleOverlayImage from '~/components/title-overlay-image.vue'
import OverviewBox from '~/components/overview.vue';
import InfoComponent from '~/components/information-components/info-component.vue';
export default {
    name: "artist-page",
    components: { titleOverlayImage, OverviewBox, InfoComponent },

}
</script>

<style scoped>

    /* here the layout settings */
    .overview-img-container {
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

    .box {
      height: 100%;
      width: 100%;
      background-color: var(--palette-green-dark);


    }

</style>