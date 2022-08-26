<template>

    <group-intro-component :objList="allEvents"/>

</template>

<script>

import groupIntroComponent from '~/components/big-components/group-intro-component.vue'
export default {
    name: 'event-page',
    components: { 
        groupIntroComponent,
    },
    async asyncData({ $axios }) {
        
        const { data } = await $axios.get('/api/events')
        return {
            allEvents: data,
        }
    },

}
</script>
