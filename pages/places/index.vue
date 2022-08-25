<template>

    <group-intro-component :objList="allPlace"/>

</template>

<script>
import groupIntroComponent from '~/components/big-components/group-intro-component.vue'
export default {
    name: 'places-page',
    components: { 
        groupIntroComponent,
    },
    async asyncData({ $axios }) {
        
        const { data } = await $axios.get('/api/places')
        return {
            allPlace: data,
        }
    },

}
</script>
