<template>
  <section class="section">
    <div class="header">
      <h2>{{ pageData.title }}</h2>
      <p>{{ pageData.subtitle }}</p>
    </div>
    <breadcrumbs-component class="breadcrumbs"/>
    <div
      v-for="(element, index) of arrArts"
      :key="`typeOfArts - ${index}`"
      class="box"
    >
      <div>
        <h1>
          {{ element.name }}
        </h1>
      </div>
      <p>
        {{ element.description }}
      </p>
    </div>
    <quote-component
      quoteText="The true work of art is but a shadow of the divine perfection."
      quoteAuthor="Michelangelo"
    />
  </section>
</template>

<script>
import QuoteComponent from "~/components/QuoteComponent.vue";
import BreadcrumbsComponent from '~/components/utilities-components/BreadcrumbsComponent.vue';
export default {
  components: { QuoteComponent, BreadcrumbsComponent },
  name: "typeOfArtsPage",
  head: {
    title: "Type of Arts",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "All the type of arts you can find at the Festival d'Avignon is described here.",
      },
    ],
  },
  data() {
    const pageData = {
      title: "All type of art",
      subtitle: "Let's get inspired...",
    };
    return { pageData };
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/api/typeofart");
    return {
      arrArts: data,
    };
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  background-color: var(--palette-soft-blue, rgb(75, 75, 173));
  color: seashell;
  padding: 20px;
}
.header h2 {
  font-size: 40px;
}

.header p {
  font-size: 30px;
}

.section {
  background-color: var(--palette-green);
  min-height: 100vh;
}

.box {
  max-width: 80%;
  margin: 40px auto;
}


.box::first-letter {
  text-transform: uppercase;
}

.breadcrumbs {
    background-color: var(--palette-red-dark);
    color: seashell;
}
</style>
