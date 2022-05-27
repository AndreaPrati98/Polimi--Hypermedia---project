<template>
    <the-header/>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
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
    components: { TheHeader }
}
</script>
