<template>
    <div class="container">
        <TitleOverlayImage2/>
        <div class="inner-container">
            <span class="separator"></span>
            <div class="card-container">
                <CardSimpleHover/>
            </div> 
            <span class="separator"></span>
            
        </div>
    </div>
</template>

<script>
import ButtonStdAnimated from '~/components/utilities-components/button-std-animated.vue';
import TitleOverlayImage2 from "../components/title-overlay-image2.vue";
import CardAdditionalContent from '~/components/img-component/card-additional-content.vue';
import CardSimpleHover from '~/components/img-component/card-simple-hover.vue';

export default {
    name: "festival-practical-info",
    components: { TitleOverlayImage2, ButtonStdAnimated, CardSimpleHover }
}
</script>

<style scoped>

    .separator{
        width: 100%;
        height: 20px;
    }
    .inner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    .btn-container, .card-container {
        display: flex;
        justify-content: center;
    }
    .cardHoverBW {
        height: 70vh;
        width: 50%;
    }

</style>    