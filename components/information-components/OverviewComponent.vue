<template>
    <div class="box">
        <span class="top"/>
        <p class="title">{{title}}</p>
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
}

.title {
    font-family: "Poppins";
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.6px;
    margin-bottom: 3rem;
    margin-top: 2rem;
    line-height: 19.2px;
}

.text {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.28px;
    line-height: 25px;
    padding-right: 5%;
    padding-left:5%;
}

.top {
    display: block;
    border-top: var(--border-thickness, 2px) solid black;
}


</style>