<template>
    <div class="where">
        <h3>{{linkText}}</h3>
        <div class="scroll-window">
            <div class="items">

                <card-additional-content class="item" v-for="(item, index) of list"
                :key="`item-index=${index}`"
                :title="item.title"
                :content="item.content"
                :imgUrl="item.imgUrl"
                :btnTxt="`See More`"
                :btnDst="item.destination"
                />
            </div>
        </div>
    </div>
</template>

<script>


import CardAdditionalContent from '~/components/img-component/CardHoverAdditionalContent.vue';
export default {
    name: "transitional-links",
    components: {CardAdditionalContent},
    props: {
        linkText: {
            type: String,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>

.where {
    width:100%;
    display: flex;
    text-align: center;
    margin-top: 30px;
    flex-direction: column;
}

.items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-shrink: 1;
    overflow: scroll;
    scroll-behavior: smooth;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
}
.item {
    margin:25px;
}

.scroll-window{
    width:70%;
    margin-left: 15%;
    display: flex;


}

h3 {
    width: 100%;
    font-size: 25px;
    font-family: "Poppins";
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: 1.2px;
}

</style>