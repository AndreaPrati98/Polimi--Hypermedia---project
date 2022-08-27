<template>
    <div class="where">
        <h3>{{linkText}}</h3>
        <div class="scroll-window">
            <div class="events">

                <card-additional-content class="event" v-for="(event, eventIndex) of events"
                :key="`event-index=${eventIndex}`"
                :title="event.title"
                :content="event.date"
                :imgUrl="event.img"
                :btnTxt="`See More`"
                :btnDst="`/events/` + event.id"
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
        events: {
            type: Array,
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