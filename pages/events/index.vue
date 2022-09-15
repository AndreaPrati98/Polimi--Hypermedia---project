<template>
  <section class="all-sections">
    <the-header-with-title
      class="header"
      :title="pageData.title"
      :subtitle="pageData.shortDescription"
      :imgUrl="pageData.imgUrl"
    />
    <breadcrumbs-component />
    <subheader-component class="subheader" :content="pageData.description" />
    <!--     
    <div class="typeOfArtsBtn-box">
      <button-standard :btnText="pageData.btnTypesOfArtsTxt" :btnDst="pageData.btnTypesOfArtsDst" class="typeOfArtsBtn"/>
    </div>
     -->
    <div class="dropdown-bar">
      <div class="filter-div">
        <p>Filter:</p>
        <dropdown-component
          :formName="'type of art selector'"
          :objList="allTypeOfArts"
          @change="filterObjList"
        />
      </div>
      <div class="typeOfArtsBtn-box">
        <button-standard
          :btnText="pageData.btnTypesOfArtsTxt"
          :btnDst="pageData.btnTypesOfArtsDst"
          class="typeOfArtsBtn"
        />
      </div>
    </div>
    <grid-component :partialPath="'events'" :objList="eventsToDisplay" />
  </section>
</template>

<script>
import TheHeaderWithTitle from "~/components/headers/TheHeaderWithTitle.vue";
import SubheaderComponent from "~/components/information-components/SubheaderComponent.vue";
import GridComponent from "~/components/medium-components/GridComponent.vue";
import DropdownComponent from "~/components/utilities-components/DropdownComponent.vue";
import BreadcrumbsComponent from "~/components/utilities-components/BreadcrumbsComponent.vue";
import ButtonStandard from "~/components/utilities-components/ButtonStandard.vue";

export default {
  name: "EventsPage",
  head: {
    title: "Festival Events",
    meta: [
      {
        hid: "description",
        name: "All Events",
        content:
          "The list of all the events of the Avignon's Festival. It's also possible to click on one Event to know more about artists and place",
      },
    ],
  },
  components: {
    TheHeaderWithTitle,
    SubheaderComponent,
    GridComponent,
    DropdownComponent,
    BreadcrumbsComponent,
    ButtonStandard,
  },
  data() {
    const pageData = {
      title: "All the Events",
      shortDescription:
        "Here we are with all the upcoming events of the festival",
      description:
        "The programme includes shows, but also readings, exhibitions, films, and debates, which are so many gateways into the worlds of the artists and intellectuals invited to the Festival. Every evening, there is at least one show première, making Avignon a place of true creation and adventure for artists and spectators alike.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/05/29/19/18/crowd-789652_1280.jpg",
      btnTypesOfArtsTxt: "More about types of arts",
      btnTypesOfArtsDst: "/typeOfArts",
    };
    return { pageData };
  },
  async asyncData({ route, $axios }) {
    // here we retrieve also type of art so that we can create the proper filter
    const [events, typeOfArts] = await Promise.all([
      $axios.get("/api/events"),
      $axios.get("/api/typeofart"),
    ]);

    const result = {
      allEvents: events.data,
      eventsToDisplay: events.data,
    };

    // check if route.query is empty or not
    const isEmptyQuery = Object.keys(route.query).length === 0;
    // if the route has some query, filter the events
    let filterQuery = {
      id: undefined,
      name: undefined,
    };

    // in case of empty query this piece of code is not executed
    if (!isEmptyQuery) {
      /* 
      it is necessary so that it's possible to create wherever a link 
      that leads directly into the filtered page
      */
      filterQuery.id = route.query.filter;
      filterQuery.name = route.query.filterName;
    }

    return {
      allEvents: result.allEvents,
      eventsToDisplay: result.eventsToDisplay,
      allTypeOfArts: typeOfArts.data,
      filterQuery,
      isEmptyQuery,
    };
  },
  created() {
    // this piece of code is used to access the static data of the page and manipulate them in case of a query in the URL
    if (!this.isEmptyQuery && this.filterQuery.id !== undefined) {
      this.eventsToDisplay = this.allEvents.filter(
        (el) => el.typeOfArtId === +this.filterQuery.id
      );
      console.log(this.filterQuery.id);
      this.pageData.title = "Events about " + this.filterQuery.name;
      this.pageData.shortDescription =
        "Here we are with all the upcoming events about " +
        this.filterQuery.name;
    }
  },
  methods: {
    // the followuing method is used to filter the events by name
    filterObjList(art_id) {
      // let's filter over the type of art Id
      if (art_id !== "All") {
        this.eventsToDisplay = this.allEvents.filter(
          (el) => el.typeOfArtId === art_id
        );
        const localFilter = this.allTypeOfArts.filter((el) => el.id === art_id);
        // in order to be consistent we change the title and subtitle of the page
        const newTitle = "Events about " + localFilter[0].name;
        const newSubtitle =
          "Here we are with all the upcoming events about " +
          localFilter[0].name;
        this.changePageCopy(newTitle, newSubtitle);
      } else {
        this.eventsToDisplay = this.allEvents;
        const newTitle = "All Events";
        const newSubtitle =
          "Here we are with all the upcoming events of the festival ";
        this.changePageCopy(newTitle, newSubtitle);
      }
    },
    changePageCopy(title, subtitle) {
      this.pageData.title = title;
      this.pageData.shortDescription = subtitle;
    },
  },
};
</script>

<style scoped>
.dropdown-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: var(--palette-red-dark);
  width: 100%;
  padding: 5px;
  /* align-items: center; */
  font-weight: 200;
  color: var(--text-color-light);
}

.filter-div{
  display: flex;
  align-items: center;
}

.typeOfArtsBtn {
  width: fit-content;
  margin: 0 auto;
}

.typeOfArtsBtn-box {
  background-color: var(--palette-red-dark);
  text-align: center;
}

@media (max-width: 432px) {
  .dropdown-bar {
    flex-direction: column;
  }

}
</style>
