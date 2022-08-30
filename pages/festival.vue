<template>
  <div>
    <the-header-with-images class="header" title="Festival" subtitle="this is the subtitle"/>
    <section class="overview-section">
      <div class="overview-container">
        <overview-component class="overview-component"
          :title="content.title"
          :description="content.description"/>
      </div>
    </section>
    <div class="double-section">
      <card class="card"/>
      <MultipleShortOverviewContainer :title="'Practical Information'" :items="items" class="info-component"/>
    </div>
    



    <!--



        title: {
            type: String,
            required: true,
        },
        items : {
            type: Array,
            required: true,
            /** expected structure:
             * 
             * {
             *  tabTitle: ____, [String]
             *  tabContent: ___, [String]
             * }
             * 
             */
        }
      -->
  </div>
</template>

<script>
import TheHeaderWithImages from '~/components/headers/TheHeaderWithImages.vue';
import Map from '~/components/map.vue';
import Card from '~/components/img-component/card.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';

export default {
    components: { Map, TheHeaderWithImages, OverviewComponent, Card, OverviewComponent, MultipleShortOverviewContainer },
    name: "festival-intro",
    data() {
      const content = {
        title: "Overview",
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

  .header {
    height: 90vh;
  }

  .double-section{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(232, 232, 232);
  }

  .overview-section {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .overview-container {
    margin: 30px;
    width: 70%;
  }

  .overview-component {
    text-align: center;
  }

</style>