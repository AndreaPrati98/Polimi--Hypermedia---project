<template>
    <section>
        <the-header-with-title class="header"
            title="This Year's Artists" 
            description="Check this out!" 
            image="palais-des-papes-g04269230e_1920.jpg" />
        <subheader-component />
        <grid-component :objList="objList"/>
    </section>
</template>

<script>
import GridComponent from '../medium-components/grid-component.vue';
import TheHeaderWithTitle from '../headers/TheHeaderWithTitle.vue';
import SubheaderComponent from '~/components/information-components/SubheaderComponent.vue';
export default {
    name: 'group-intro-component',
    components: {
        TheHeaderWithTitle,
        GridComponent,
        SubheaderComponent
    },
    props: {
        objList: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>