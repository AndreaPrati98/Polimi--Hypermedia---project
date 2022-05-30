<template>
    <big-img-vue/> 
</template>

<script>
import BigImgVue from '~/components/BigImg.vue'

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
    components: { BigImgVue }
}
</script>
