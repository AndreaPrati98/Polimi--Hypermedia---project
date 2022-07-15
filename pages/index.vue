<template>
    <home-body/>
</template>

<script>
import HomeBody from '~/components/HomeBody.vue';

export default {
    name: "IndexPage",
    // async asyncData({ $axios }) {
    //     const { data } = await $axios.get("/api/page-info/index");
    //     const title = data.title;
    //     const image = data.image;
    //     const description = data.description;
    //     return {
    //         title,
    //         description,
    //         image,
    //     };
    // },
    components: { HomeBody }
}
</script>
