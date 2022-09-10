<template>
  <section class="all-sections">
    <the-header-with-title
      class="header"
      :title="artist.name"
      :subtitle="artist.date_of_birth"
      :imgUrl="artist.img"
    />
    <breadcrumbs-component />
    <overview-component
      class="subheader"
      :title="overviewTitle"
      :description="artist.description"
    />
    <cards-additional-contentens-group
      class="transition-links"
      :title="'Other events related to this artist'"
      :objList="artist.list"
      :partialPath="'/events'"
    />
    <group-link-buttons-component
      class="group-links"
      :text="`See all Artists`"
      :listOfButtons="groupLinks"
    />
  </section>
</template>

<script>
import TheHeaderWithTitle from "~/components/headers/TheHeaderWithTitle.vue";
import BreadcrumbsComponent from "~/components/utilities-components/BreadcrumbsComponent.vue";
import OverviewComponent from "~/components/information-components/OverviewComponent.vue";
import CardsAdditionalContentensGroup from "~/components/CardsAdditionalContentensGroup.vue";
import GroupLinkButtonsComponent from "~/components/GroupLinkButtonsComponent.vue";
export default {
  name: "ArtistPage",
  head() {
    return {
      title: `Artis - ${this.artist.name}`,
      meta: [
        {
          hid: "description",
          name: "overview",
          content: this.artist.description,
        },
      ],
    };
  },
  components: {
    TheHeaderWithTitle,
    BreadcrumbsComponent,
    OverviewComponent,
    CardsAdditionalContentensGroup,
    GroupLinkButtonsComponent,
  },
  data() {
    // everything we see here has to be retrieved from the DB
    return {
      overviewTitle: "Description",
      eventsRelatedTitle: "This artist is involved...",
      groupLinks: [{ btnText: "All Artists", btnDst: "/artists" }],
    };
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get("/api/artists/" + id);
    const list = [];
    for (const element of data.events) {
      list.push({
        id: element.id,
        name: element.name,
        content: element.date,
        img: element.img,
      });
    }
    data.list = list;

    return {
      artist: data,
    };
  },
};
</script>

<style scoped>
.subheader {
  background-color: var(--palette-soft-blue);
  color: var(--text-color-light);
}

.transition-links {
  padding: 5% 0;
  background-color: var(--palette-green-dark);
  width: 100%;
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
