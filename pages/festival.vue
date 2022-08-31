<template>

<section class="all-sections">
  <!-- SECTION 1 -->
  <div class="section1" id="section-1">
        <vertical-bars />
        <div class="heading">
          Festival Information
        </div>
  </div>

  <!-- SECTION 2 -->
  <div class="section2" id="section-2">
    <overview-component class="overview-component"
      :title="content.overviewTitle"
      :description="content.overviewDescription"/>
  </div>

  <!-- SECTION 3 -->
  <div class="section3" id="section-3">

    <div class="col" v-for="(element, index) of tabItems"
      :key="`col-${index}`">
      <div class="title">
        {{element.tabTitle}}
      </div>
      <div class="content">
        {{element.tabContent}}
      </div>

      <div v-if="element.link" class="text-button-container">
        <button-animated class="ticket-button"
          :btnText="element.link.button" 
          :btnDst="element.link.destination" 
          :isNuxtLink="element.link.nuxtLink" />
      </div>
    </div>
    
  </div>

  <!-- SECTION 4 -->
  <div class="section4" id="section-4">
    <h2 class="history-title"> History </h2>
    <timeline
      :items="timelineItems" />

  </div>
</section>
</template>

<script>
import TheHeaderWithImages from '~/components/headers/TheHeaderWithImages.vue';
import Card from '~/components/img-component/card.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';
import Default from '~/layouts/default.vue';
import VerticalBars from '~/components/img-component/VerticalBars.vue';
import Timeline from '~/components/Timeline.vue';
import ButtonAnimated from '~/components/utilities-components/ButtonAnimated.vue'

export default {
    components: { Map, TheHeaderWithImages, OverviewComponent, Card, OverviewComponent, MultipleShortOverviewContainer, Default, VerticalBars, Timeline, ButtonAnimated },
    name: "festival-intro",
    data() {
      const content = {
        overviewTitle: "OVERVIEW",
        overviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab accusantium harum! Nam placeat laboriosam ducimus odio et aut doloremque voluptatibus fugit odit harum? Quaerat aliquam quo sit? Mollitia facilis harum aliquid accusamus quasi error temporibus id totam ratione? Aperiam molestiae veniam sit? Odit, laborum. Explicabo minima doloremque dignissimos. Nihil ratione repudiandae quibusdam, incidunt qui veritatis nesciunt debitis velit quos. Quos tenetur neque repellendus aspernatur iste sed sunt porro rem adipisci labore nulla enim ea explicabo corporis ipsam officiis accusantium perferendis vero tempore soluta unde, aliquam reiciendis temporibus. Suscipit, explicabo doloribus? At nobis sequi voluptatum, quo ullam incidunt quos aspernatur?",
        tabComponentTitle: "Practical Information",
      }  

      const tabItems = [
        { 
          tabTitle: "Date", 
          tabContent: "01 June 2022 - 14 June 2022"
        },
        { 
          tabTitle: "Location", 
          tabContent: `Cloître Saint-Louis, 20 rue du Portail Boquier, 84000 Avignon`
        },
        { 
          tabTitle: "Tickets", 
          tabContent: "Day Passes or Full Passes are available.", 
          link: { 
                  button: "Buy Tickets", 
                  destination:"www.ticketmaster.com", 
                  nuxtLink:false
                }
        }]


      const timelineItems = [
        {date: "July 1998", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque sint pariatur sapiente recusandae vero?"},
        {date: "Aug 1998", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque sint pariatur sapiente recusandae vero?"},
        {date: "Sept 1998", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque sint pariatur sapiente recusandae vero?"},
        {date: "Oct 1998", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque sint pariatur sapiente recusandae vero?"},
        {date: "Nov 1998", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque sint pariatur sapiente recusandae vero?"},
      ]
      return {
        content: content,
        tabItems: tabItems,
        timelineItems: timelineItems,
      }
    },
}
</script>

<style scoped>

.heading {
  display: flex;
  font-family: "Poppins";
  font-weight: 800;
  font-size: 3rem;
  text-align: right;
  margin-right: 10px;
  color: var(--palette-blue);
}



.history-title {
  text-align: center;
  font-family: "Poppins";
  font-weight: 700;
  color: var(--text-color-light);
  font-size: 45px;
  padding: 4% 0% 6% 0%;
}


.all-sections {
display: flex;
flex-direction: column;
scroll-behavior: smooth;
}

.section1 {
  width: 100%;
  height: 90vh;
  background-color: var(--palette-green-dark);
  display: flex;
}

.section2 {
  width: 100%;
  background-color: var(--palette-soft-blue);
}

.section3 {
  width: 100%;
  background-color: var(--palette-green-dark);
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: 7% 0;
  justify-content: space-around;
  
}

.section4 {
  width: 100%;
  background-color: var(--palette-blue);
}

.overview-component {
  padding: 5% 15%;
}

.info-component {
  padding: 5% 15%;
}
  
.picture {
  overflow: hidden;
  object-fit: cover;
}


.col {
  display: flex;
  flex-direction: column;
  width: 25%;
  
}

.title {
  font-family: "Oswald";
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20%;
  color: var(--palette-red-dark);

}

.content {
  font-family: "Poppins";
  font-weight: 200;
  line-height: 1.7rem;
  font-size: 24px;
  letter-spacing: 1.2px;
  color: var(--palette-blue);
  margin-bottom: 10%;

}

</style>