<template>
    <section class="card-container">
        <div class="box" v-for="(data, objIndex) of objList"
            :key="`data-index=${objIndex}`">
            
            <simple-box 
                :artistName="data.name" 
                :artistId="data.id" />
        
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
        objList: {
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
        
        display: flex;
        justify-content: center;
        align-content: center;
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