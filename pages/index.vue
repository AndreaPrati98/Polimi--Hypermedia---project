<template>
    <big-img/>
</template>

<script>
import BigImg from "../components/big-img.vue";
export default {
    name: "IndexPage",
    async asyncData({ $axios }) {
        const { data } = await $axios.get("/api/page-info/index");
        const title = data.title;
        const image = data.image;
        const description = data.description;
        return {
            title,
            description,
            image,
        };
    },
    components: {BigImg }
}
</script>
