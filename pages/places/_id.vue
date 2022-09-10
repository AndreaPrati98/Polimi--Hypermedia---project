<template>
  <section class="all-sections">
    <the-header-rounded-image
      class="header"
      :header="data.name"
      :subheader="data.address"
      :imgUrl="data.img"
    />
    <breadcrumbs-component />
    <overview-component
      class="subheader"
      :title="overviewTitle"
      :description="data.description"
    />
    <cards-additional-contentens-group
      class="transition-links"
      :title="cardGroupTitle"
      :objList="data.list"
      :partialPath="cardGroupPartialPath"
    />

    <group-link-buttons-component
      class="group-links"
      :text="`See all places`"
      :listOfButtons="groupLinks"
    />
  </section>
</template>

<script>
import TheHeaderRoundedImage from "~/components/headers/TheHeaderRoundedImage.vue";
import OverviewComponent from "~/components/information-components/OverviewComponent.vue";
import CardsAdditionalContentensGroup from "~/components/CardsAdditionalContentensGroup.vue";
import BreadcrumbsComponent from "~/components/utilities-components/BreadcrumbsComponent.vue";
import GroupLinkButtonsComponent from "~/components/GroupLinkButtonsComponent.vue";

export default {
  name: "PlacePage",
  head() {
    return {
      title: `Place - ${this.data.name}`,
      meta: [
        {
          hid: "description",
          name: "overview",
          content: this.data.description,
        },
      ],
    };
  },
  components: {
    TheHeaderRoundedImage,
    OverviewComponent,
    CardsAdditionalContentensGroup,
    BreadcrumbsComponent,
    GroupLinkButtonsComponent,
  },
  data() {
    return {
      overviewTitle: "Short description",
      cardGroupTitle: "Events hosted here",
      cardGroupPartialPath: "/events",
      groupLinks: [{ btnText: "ALL PLACES", btnDst: "/places" }],
    };
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get("/api/places/" + id);
    const list = [];
    for (const element of data.events) {
      list.push({
        id: element.id,
        name: element.name,
        content: "",
        img: element.img,
      });
    }

    data.list = list;

    return {
      data,
    };
  },
};
</script>

<style scoped>
.header {
  height: 70vh;
}
.subheader {
  background-color: var(--palette-green-dark);
  color: var(--palette-blue);
}
.transition-links {
  padding: 5% 0;
  color: var(--text-color-light);
  background-color: var(--palette-blue);
}

.group-links {
  background-color: var(--palette-green);
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 100%;
  height: 100%;
}
</style>
