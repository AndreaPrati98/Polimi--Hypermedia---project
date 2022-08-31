<template>
    <div class="where">
        <h3 class="title">{{title}}</h3>
        <div class="scroll-window">
            <div class="cards-container">

                <card-additional-content class="item" v-for="(element, index) of objList"
                    :key="`card-${index}`"
                    :title="element.name"
                    :content="element.content"
                    :imgUrl="element.img"
                    :btnTxt="`See More`"
                    :btnDst="`${partialPath}/` + element.id" />

            </div>
        </div>
    </div>
</template>

<script>


import CardAdditionalContent from '~/components/img-component/CardHoverAdditionalContent.vue';
export default {
    name: "transitional-links",
    components: { 
        CardAdditionalContent
    },
    props: {
        title: {
            type: String,
            required: true,
        },

        objList: {
            type: Array,
            required: true,
        },
        partialPath: {
            type: String,
            required: true,
        }
    }
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
.cards-container {
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

.title {
    width: 100%;
    font-size: 25px;
    font-family: "Poppins";
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: 1.2px;
}

</style>