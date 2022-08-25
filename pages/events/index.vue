<template>

    <group-intro-component :eventList="allEvents"/>

</template>

<script>
import groupIntroComponent from '~/components/big-components/group-intro-component.vue'
export default {
    name: 'event-page',
    components: { 
        groupIntroComponent,
    },
    async asyncData({ $axios }) {
        
        const { data } = await $axios.get('/api/artists')
        return {
            allEvents: data,
        }
    },

}
</script>
