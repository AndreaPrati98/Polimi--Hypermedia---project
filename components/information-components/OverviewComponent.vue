<template>
    <div class="box">
        <span class="top"/>
        <p class="title">{{title}}</p>
        <p class="text">{{description}}</p>
        <span class="bottom"/>
    </div>
</template>

<script>
export default {
    name: "OverviewBox",
    props: {
        title: {
            type: String,
            required: false,
            default: "OVERVIEW"
        },
        description: {
            type: String,
            required: true,
        }

    }

}
</script>

<style scoped>

.box{
    width: 100%;
    height: 100%;
    overflow: hidden; 
}


.title {
    font-family: "Poppins";
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.6px;
    line-height: 19.2px;
    padding: 2%;

}

.text {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.28px;
    line-height: 25px;
    padding: 2%;
}


.top, .bottom{
    width: 100%;
    height: 10px;
    display: block;
    border-left: 1px solid black;
    border-right: 1px solid black;

}

.top {
    border-top: 1px solid black;
}

.bottom {
    border-bottom: 1px solid black;
}


</style>