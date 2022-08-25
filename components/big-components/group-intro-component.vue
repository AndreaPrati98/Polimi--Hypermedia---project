<template>
    <section>
        <title-overlay-image title="This Year's Artists" description="Check this out!" image="palais-des-papes-g04269230e_1920.jpg"/>
        <DescrComponent />
        <GridComponent :eventList="eventList"/>
    </section>
</template>

<script>
import DescrComponent from '../information-components/descr-component.vue'
import TitleOverlayImage from '../title-overlay-image.vue'
import GridComponent from '../medium-components/grid-component.vue';
export default {
    name: 'group-intro-component',
    components: {
    TitleOverlayImage,
    DescrComponent,
    GridComponent,
    },
    props: {
        eventList: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>