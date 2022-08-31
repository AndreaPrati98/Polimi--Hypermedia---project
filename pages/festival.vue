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
    <MultipleShortOverviewContainer class="info-component"
      :title="content.tabTitle"
      :items="items" />
  </div>

  <div class="section4" id="section-4">
    <h2 class="history-title"> History </h2>
    <div class="timeline-component"> 

      <div class="timeline-box">

        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
        <div class="timeline-item-box">
          <div class="timeline-item">
            <h3 class="timeline-item-title">Date</h3>
            <p class="timeline-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime corrupti! Provident sapiente commodi maxime.</p>
          </div>
        </div>
      </div>
    </div>
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
import VerticalBars from '~/components/img-component/vertical-bars.vue';

export default {
    components: { Map, TheHeaderWithImages, OverviewComponent, Card, OverviewComponent, MultipleShortOverviewContainer, Default, VerticalBars },
    name: "festival-intro",
    data() {
      const content = {
        overviewTitle: "OVERVIEW",
        overviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab accusantium harum! Nam placeat laboriosam ducimus odio et aut doloremque voluptatibus fugit odit harum? Quaerat aliquam quo sit? Mollitia facilis harum aliquid accusamus quasi error temporibus id totam ratione? Aperiam molestiae veniam sit? Odit, laborum. Explicabo minima doloremque dignissimos. Nihil ratione repudiandae quibusdam, incidunt qui veritatis nesciunt debitis velit quos. Quos tenetur neque repellendus aspernatur iste sed sunt porro rem adipisci labore nulla enim ea explicabo corporis ipsam officiis accusantium perferendis vero tempore soluta unde, aliquam reiciendis temporibus. Suscipit, explicabo doloribus? At nobis sequi voluptatum, quo ullam incidunt quos aspernatur?",
        tabTitle: "Practical Information",
      }  

      const tabItems = [
        {tabTitle: "Date", tabContent: "This festival is usually held during the first two weeks of June. This year the festival starts with the Welcome Celebration held on n 1 June. For the first week, music events will be the focal point occuying our largest venues. For the second week, the festival will shift and highlight mainly theater and music events. Regardless, all visitors will be able to find an experience to suits their preferences!"},
        {tabTitle: "Location", tabContent: "text"},
        {tabTitle: "Tickets", tabContent: "these are tickets", link:{button: "Buy Tickets", destination:"www.google.com", nuxtLink:false}}
      ]
      return {
        content: content,
        items: tabItems,
      }
    }
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

/* Timeline Container */
.timeline-component {
  padding: 20px;
  display: flex;
 
  justify-content: center;
  

}

/* Outer Layer with the timeline border */
.timeline-box {
  border-left: 5px solid var(--palette-green);
}

/* Card container */
.timeline-item-box {
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  background: var(--palette-soft-blue);
  color: var(--palette-green-dark);
  width: 100%;
  max-width: 400px;
}

/* Information about the timeline */
.timeline-item {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

/* Title of the card */
.timeline-item-title {
  color: var(--palette-green-dark);
  position: relative;
  font-family: "Oswald";
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 1.1px;
}

/* Timeline dot  */
.timeline-item-title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--palette-green);
  border-radius: 999px;
  left: -40px;
  border: 3px solid var(--palette-green);
}

.timeline-item-text {
  font-family: "Poppins";
  font-weight: 300;
  letter-spacing: 1.1px;
  line-height: 1.2rem;
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

</style>