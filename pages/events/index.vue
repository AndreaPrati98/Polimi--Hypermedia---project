<template>
    <section class="section">
        <title-overlay-image class="header"/>
        <div class="overview-map-container">
            <DescriptiveComponent class="overview-comp"/>
            <div class="map-comp">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4646.175289173596!2d4.812885751804693!3d43.94526359355342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5ed5580c79235%3A0x292de02a07a25caa!2zVGjDqcOidHJlIExlcyBFdG9pbGVz!5e0!3m2!1sit!2sit!4v1661348281479!5m2!1sit!2sit" 
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- <div class="overview-info-container"> -->
            <div class="art-container">
                <info-component :title="'Artists Involved'" class="info-comp"/>
            </div>
            
            <descriptive-component class="place-comp"/>
            <!-- </div> -->
            
        </div>

    <!-- here the group links -->
        <div class="all-events">

        </div>
        <div class="all-events by-type">

        </div>
    </section>
</template>

<script>
import titleOverlayImage from '~/components/title-overlay-image.vue'
import DescriptiveComponent from '~/components/descriptive-component.vue';
import InfoComponent from '~/components/information-components/info-component.vue';
export default {
    name: "artist-page",
    components: { titleOverlayImage, DescriptiveComponent, InfoComponent },

}
</script>

<style scoped>

    .overview-map-container {
        padding: 0 20px;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        grid-template-areas:    'ev ev map'
                                'art art art'
                                'place place place';
    }

    .overview-comp {
        grid-area: ev;
    }

    .map-comp{
        grid-area: map;
    }

    .place-comp {
        grid-area: place;
    }

    .art-container {
        grid-area: art;
        display: flex;
        justify-content: center;
    }

   @media screen {
    
   } 

</style>