<template>
    <div class="container">
        <TitleOverlayImage2/>
        <div class="btn-div">
            <button-std-animated :btnDst="'/festival-practical-info'" :btnBkgdColor="'yellow'" :btnTextColor="'red'" :btnBkgdHoverColor="'green'"/>
        </div>
    </div>
</template>

<script>
import ButtonStdAnimated from '~/components/utilities-components/button-std-animated.vue';
import TitleOverlayImage2 from "../components/title-overlay-image2.vue";
export default {
    name: "festival-practical-info",
    components: { TitleOverlayImage2, ButtonStdAnimated }
}
</script>

<style scoped>

    .btn-div {
        display: flex;
        justify-content: center;
    }

</style>    