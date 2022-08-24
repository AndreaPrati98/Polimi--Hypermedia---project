<template>
    <div class="where">
        <h3>{{linkText}}</h3>
        <div class="scroll-window">
            <div class="events">
                <card-additional-content class="event" title="Event 1" content="Friday 22/06 10AM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 2" content="Saturday 19/06 7PM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 3" content="Saturday 19/06 19:30pm" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 4" content="Friday 22/06 10AM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 5" content="Saturday 19/06 7PM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 6" content="Saturday 19/06 19:30pm" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 7" content="Friday 22/06 10AM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 8" content="Saturday 19/06 7PM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 9" content="Saturday 19/06 19:30pm" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
            </div>
        </div>
    </div>
</template>

<script>


import CardAdditionalContent from '~/components/img-component/card-additional-content.vue';
export default {
    name: "transitional-links",
    components: {CardAdditionalContent},
    props: {
        linkText: {
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

.events{
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
.event {
    margin:25px;
}

.scroll-window{
    width:60%;
    margin-left: 20%;
    display: flex;


}

</style>