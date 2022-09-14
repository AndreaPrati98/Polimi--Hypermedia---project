<template>
    <div class="box">
        <span class="top"/>
        <h3 class="title">{{title}}</h3>
        <p class="text">{{description}}</p>
    </div>
</template>

<script>
export default {
    name: "OverviewBox",
    props: {
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
            default: "missing description",
        }

    }

}
</script>

<style scoped>

.box{
    width: 100%;
    height: 100%;
    overflow: hidden; 
    --border-thickness: 1.5px;
    overflow-y: scroll;

}

.title {
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.8px;
    margin-bottom: 8%;
    margin-top: 4%;
    line-height: 19.2px;
    font-size: 40px;
}

.text {
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.28px;
    line-height: 25px;
    padding-right: 5%;
    padding-left:5%;

}

.top {
    display: block;
    border-top: var(--border-thickness, 2px) solid var(--text-color-light);
}

.box h3 {
    line-height: 40px;
}
</style>