<template>
  <section>
    <GroupIntroComponent :objList="objList"/>
  </section>
</template>

<script scoped>
import TitleOverlayImage from '~/components/title-overlay-image.vue';
import CardHover from '~/components/img-component/card-simple-hover.vue';
import SimpleBox from '~/components/test-components/simple-box.vue';
import DescrComponent from '~/components/information-components/descr-component.vue';
import GroupIntroComponent from '~/components/big-components/group-intro-component.vue';

export default {
    name: "artists",
    components: { TitleOverlayImage, CardHover, SimpleBox, DescrComponent, GroupIntroComponent },
    async asyncData({ $axios }) {
         const { data } = await $axios.get("/api/artists");
         return {
           objList: data,
         }
     },
}
</script>

<style scoped>

  .card-container {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);

    justify-items: center;

    grid-auto-flow: dense;
  }

  .box {
    width: 100%;
    height: 300px;
  }

  .box:nth-child(4n + 1) {
    border: 2px solid blue;
    grid-column: 1 / span 2;
  }

  .box:nth-child(4n + 3) {
    border: 2px solid green;
    grid-column: 2 / span 2;
  }

</style>