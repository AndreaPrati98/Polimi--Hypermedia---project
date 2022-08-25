<template>
    <section class="card-container">
        <div class="box" v-for="(event, eventIndex) of eventList"
            :key="`event-index=${eventIndex}`">
            
            <simple-box 
                :artistName="event.name" 
                :artistId="event.id" />
            <!-- <card-simple-hover 
                :artistName="event.name" 
                :artistId="event.id" 
                :imageName="event.img"/> -->
        
        </div>
    </section>
</template>

<script>
import cardSimpleHover from '../img-component/card-simple-hover.vue';
import SimpleBox from '../test-components/simple-box.vue';
export default {
  components: { cardSimpleHover, SimpleBox },
    name: 'grid-component',
    props: {
        eventList: {
            type: Array,
            required: true,
        }
    },
    
}

</script>

<style scoped>
    .card-container {
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);

        
        

        grid-auto-flow: dense;
    }

    .box {
        width: 100%;
        height: 300px;
        
    }

    .box:nth-child(4n + 1) {
        border: 2px solid blue;
        grid-column: 1 / span 2;
    }

    .box:nth-child(4n + 3) {
        border: 2px solid green;
        grid-column: 2 / span 2;
    }

</style>