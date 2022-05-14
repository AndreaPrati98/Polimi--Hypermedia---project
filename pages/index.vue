<template>
  <carosello/>
</template>

<script>
import Carosello from "~/components/Carosello.vue"
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
    components: { Carosello }
}
</script>
