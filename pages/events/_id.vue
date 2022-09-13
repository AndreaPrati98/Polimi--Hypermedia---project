<template>
  <section class="all-sections">
    <the-header-with-title
      class="header"
      :title="event.name"
      :subtitle="`Event of type: ${event.typeOfArtName}`"
      :imgUrl="event.img"
    />
    <breadcrumbs />
    <overview-component
      class="subheader"
      title="OVERVIEW"
      :description="event.description"
    />
    <simple-info-component :tabItems="tabItems" />

    <cards-additional-contentens-group
      class="transition-links"
      :title="text"
      :objList="event.list"
      :partialPath="'/artists'"
    />

    <div class="group-links">
      <group-link-buttons-component
        :text="`See all events`"
        :listOfButtons="listOfGroupLinkButtons.slice(3, 4)"
      />
      <group-link-buttons-component
        :text="`See all events by`"
        :listOfButtons="listOfGroupLinkButtons.slice(0, 3)"
      />
    </div>
  </section>
</template>

<script>
import TheHeaderWithTitle from "~/components/headers/TheHeaderWithTitle.vue";
import OverviewComponent from "~/components/information-components/OverviewComponent.vue";
import CardsAdditionalContentensGroup from "~/components/CardsAdditionalContentensGroup.vue";
import Breadcrumbs from "~/components/utilities-components/BreadcrumbsComponent.vue";
import ButtonAnimated from "~/components/utilities-components/ButtonAnimated.vue";
import GroupLinkButtonsComponent from "~/components/GroupLinkButtonsComponent.vue";
import SimpleInfoComponent from "~/components/information-components/SimpleInfoComponent.vue";

export default {
  name: "artist-page",
  head() {
    return {
      title: `Event - ${this.event.name}`,
      meta: [
        {
          hid: "description",
          name: "overview",
          content: this.event.description,
        },
      ],
    };
  },
  components: {
    TheHeaderWithTitle,
    OverviewComponent,
    CardsAdditionalContentensGroup,
    ButtonAnimated,
    Breadcrumbs,
    GroupLinkButtonsComponent,
    SimpleInfoComponent,
  },
  async asyncData({ route, $axios, error }) {
    const { id } = route.params;
    // let's retrieve the events and the type of arts

    var [event, listOfArts] = await Promise.all([
      $axios.get("/api/events/" + id),
      $axios.get("/api/typeofart"),
    ]);

    if(!event.data) {
      redirect("/ERROR")
    }

    event = event.data;

    // here we want to make the format of the artist list usable on the components
    const list = [];
    for (const element of event.artists) {
      list.push({
        id: element.id,
        name: element.name,
        content: "",
        img: element.img,
      });
    }
    event.list = list;

    // here we build the copy of the page with the event info
    const tabItems = [
      {
        tabTitle: "Date",
        tabContent: "This event will take place on " + event.date,
      },
      {
        tabTitle: "Time",
        tabContent: "This event will be held at " + event.time,
      },
      {
        tabTitle: "Place",
        tabContent: "This event will take place at " + event.place.name,
        link: {
          button: "See More",
          destination: "/places/" + event.place.id,
          nuxtLink: true,
        },
      },
    ];
    // here we retrieve thetype of art (name) by using the ID
    const indexForData = event.typeOfArtId - 1;
    event.typeOfArtName = listOfArts.data[indexForData].name;

    return {
      event,
      tabItems,
      listOfGroupLinkButtons: [
        {
          btnText: listOfArts.data[0].name,
          btnDst:
            "/events?filter=" +
            listOfArts.data[0].id +
            "&filterName=" +
            listOfArts.data[0].name,
        },
        {
          btnText: listOfArts.data[1].name,
          btnDst:
            "/events?filter=" +
            listOfArts.data[1].id +
            "&filterName=" +
            listOfArts.data[1].name,
        },
        {
          btnText: listOfArts.data[2].name,
          btnDst:
            "/events?filter=" +
            listOfArts.data[2].id +
            "&filterName=" +
            listOfArts.data[2].name,
        },
        { btnText: "All Events", btnDst: "/events" },
      ],
    };
  },
  data() {
    return {
      text: "Artists Performing at this Event",
    };
  },
};
</script>

<style scoped>
/** Maybe make this into another component... */

.subheader {
  background-color: var(--palette-soft-blue);
  color: var(--text-color-light);
}

.transition-links {
  padding: 5% 0;
  background-color: var(--palette-blue);
  color: var(--text-color-light);
  width: 100%;
}

.group-links {
  background-color: var(--palette-green);
  display: flex;
  padding: 10%;
  width: 100%;
  height: 100%;
}

@media (max-width: 750px) {
  .group-links {
    flex-direction: column;
  }

  .seeall {
    margin: 20px 0;
  }
}
</style>
