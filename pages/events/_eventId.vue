<template>



    <section class="section">
        <the-header-with-title class="header"/>

        <div class="all-sections">
            <div class="section1">
                <overview-component class="overview-comp" title="OVERVIEW" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo soluta dolorum magni commodi aperiam debitis sunt atque quo consequatur animi eligendi quibusdam id voluptate porro omnis, inventore neque hic nihil incidunt error ea aspernatur nulla officia? Vero quos aperiam tenetur assumenda pariatur impedit earum animi nobis, laborum accusantium? Incidunt!"/>


                
                <div class="img-comp">
                    <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" alt="funny cat" class="image">
                </div>
            </div>
            <div class="section2">
                <tab-box :title="'Artists Involved'" class="info-comp"/>
            </div>


            <div class="section3">


            </div>

        </div>







        <div class="overview-img-container">
            <overview-component class="overview-comp" title="OVERVIEW" description="fcgvhbjnhgvfcvbhgv"/>
            <div class="img-comp">
                <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" alt="funny cat" class="image">
            </div>
            <!-- <div class="overview-info-container"> -->
            <div class="art-container">
                <tab-box :title="'Artists Involved'" class="info-comp"/>
            </div>
            
            <overview-component class="place-comp" title="ABOUT" description="erfghjnjhgfcdxsdfgbhjnmnhbgvfcvgbhn"/>
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
import TabBox from '~/components/information-components/TabBox.vue';
export default {
    name: "artist-page",
    components: {
    InfoComponent,
    TheHeaderWithTitle,
    OverviewComponent,
    MultipleShortOverviewContainer,
        TabBox
},

}
</script>

<style scoped>


.all-sections {
    display: flex;
    flex-direction: column;
}
.section1 {
    background-color: var(--palette-soft-blue);
    display: flex;
    
}
.section2 {
    background-color: var(--palette-green-dark);
}
.section3 {
    background-color: var(--palette-blue);
}

.overview-comp {
    padding: 15% 15%;
}

.img-comp {
    margin: 5% 5%;
}







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

</style>