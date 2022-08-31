<template>
    <section class="card-container">
        <div class="box" v-for="(data, objIndex) of objList"
            :key="`data-index=${objIndex}`">

            <card-hover-b-w
                :titleTxt= "data.name"
                :btnTxt= "'See more'"
                :imgUrl= "data.img"
                :btnDst= "`/${partialPath}/${data.id}`"/>
        
        </div>
    </section>
</template>

<script>
import CardHoverBW from '../img-component/CardHoverBlackWhite.vue';

export default {
    components: { 
        CardHoverBW, 
    },
    name: 'grid-component',
    props: {
        objList: {
            type: Array,
            required: true,
        },
        partialPath: {
            type: String,
            required: true,
            
        }
    },
    
}

</script>

<style scoped>
    .card-container {
        display: grid;
        gap: 2px;

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
        /* border: 2px solid blue; */
        grid-column: 1 / span 2;
    }

    .box:nth-child(4n + 3) {
        /* border: 2px solid green; */
        grid-column: 2 / span 2;
    }

</style>