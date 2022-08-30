<template>
<section class="all-sections">
  <!-- SECTION 1 -->
  <div class="section1">
    <div class="scroll-header">
    <h1 class="themes-intro">Welcome to
      <div class="scroller">
        <span>
          Culture<br />
          Art<br />
          Ambition<br />
          Bravery<br />
          Color<br />
        </span>
      </div>


    </h1>
    </div>

    <img class="picture" src="https://www.culturelink.fr/sites/default/files/2020-03/cour%20d'honneur.jpg"/>

  </div>

  <!-- SECTION 2 -->
  <div class="section2">
    <overview-component class="overview-component"
      :title="content.title"
      :description="content.description"/>
  </div>

  <!-- SECTION 3 -->
  <div class="section3">
    <MultipleShortOverviewContainer class="info-component"
      :title="'Practical Information'" 
      :items="items" />
  </div>

  <div class="section4">







  </div>
</section>
</template>

<script>
import TheHeaderWithImages from '~/components/headers/TheHeaderWithImages.vue';
import Map from '~/components/map.vue';
import Card from '~/components/img-component/card.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';
import Default from '~/layouts/default.vue';

export default {
    components: { Map, TheHeaderWithImages, OverviewComponent, Card, OverviewComponent, MultipleShortOverviewContainer, Default },
    name: "festival-intro",
    data() {
      const content = {
        title: "OVERVIEW",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab accusantium harum! Nam placeat laboriosam ducimus odio et aut doloremque voluptatibus fugit odit harum? Quaerat aliquam quo sit? Mollitia facilis harum aliquid accusamus quasi error temporibus id totam ratione? Aperiam molestiae veniam sit? Odit, laborum. Explicabo minima doloremque dignissimos. Nihil ratione repudiandae quibusdam, incidunt qui veritatis nesciunt debitis velit quos. Quos tenetur neque repellendus aspernatur iste sed sunt porro rem adipisci labore nulla enim ea explicabo corporis ipsam officiis accusantium perferendis vero tempore soluta unde, aliquam reiciendis temporibus. Suscipit, explicabo doloribus? At nobis sequi voluptatum, quo ullam incidunt quos aspernatur?"
      }  

      const itemsA = [
        {tabTitle: "title1", tabContent: "text"},
        {tabTitle: "title2", tabContent: "text"},
        {tabTitle: "title3", tabContent: "these are tickets", link:{button: "Buy Tickets", destination:"www.google.com", nuxtLink:false}}
      ]
      return {
        content:content,
        items: itemsA,
      }
    }
}
</script>

<style scoped>


.scroll-header {
  width: 55ch;
  margin-left: 0%;
  border-left: 50px solid var(--palette-red-dark);
}

.themes-intro {
  font-family: "Poppins";
  font-weight: 700;
  font-size: 70px;
  color: var(--palette-blue)
  
}
/* Scroller styling */
.scroller {
  height: 1.2em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  width: 40em;
  margin-top: 0.5em;
  color: var(--palette-red-dark);
}
.scroller > span {
  position: absolute;
  top: 0;
  animation: slide 7s infinite;
  font-family: "Oswald";
  font-size: 70px;
  font-weight: 500;
  
}
@keyframes slide {
  0% {
    top: 0;
  }
  20% {
    top: -1.2em;
  }
  40% {
    top: -2.4em;
  }
  60% {
    top: -3.6em;
  }
  80%{
    top: -4.8em;
  }
}


.all-sections {
display: flex;
flex-direction: column;
}

.section1 {
  width: 100%;
  height: 100vh;
  background-color: var(--palette-green-dark);
  display: flex;
}

.section2 {
  width: 100%;
  background-color: var(--palette-soft-blue);
}

.section3 {
  width: 100%;
  background-color: var(--palette-green);
}

.overview-component {
  padding: 5% 15%;


}

.info-component {
  padding: 5% 15%;
  border: 1px solid red;
}
  
.picture {
  overflow: hidden;
  object-fit: cover;
}

</style>