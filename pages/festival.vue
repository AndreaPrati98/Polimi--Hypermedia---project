<template>
    <section class="all-sections">
        <!-- SECTION 1 -->
        <div class="header" id="section-1">
            <vertical-bars />
            <div class="header-text">
                <h1>Festival Information</h1>
            </div>
        </div>
        <breadcrumbs/>
        <!-- SECTION 2 -->
        <overview-component class="subheader" id="section-2"
            :title="content.overviewTitle"
            :description="content.overviewDescription"/>

        <!-- SECTION 3 -->
        <div class="info-section" id="section-3">
            <div class="col" v-for="(element, index) of tabItems"
                :key="`col-${index}`">
                <div class="title">{{element.tabTitle}}</div>
                <div class="content">{{element.tabContent}}</div>

                <div v-if="element.link" class="text-button-container">
                    <button-animated class="ticket-button"
                        :btnText="element.link.button" 
                        :btnDst="element.link.destination" 
                        :isNuxtLink="element.link.nuxtLink" />
                </div>
            </div>
        </div>

        <!-- SECTION 4 -->
        <div class="history-section" id="section-4">
            <h2 class="history-title"> History </h2>
            <timeline
                :items="timelineItems" />
        </div>
    </section>
</template>

<script>
import TheHeaderWithImages from '~/components/headers/TheHeaderWithImages.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';
import Default from '~/layouts/default.vue';
import VerticalBars from '~/components/img-component/VerticalBars.vue';
import ButtonAnimated from '~/components/utilities-components/ButtonAnimated.vue'
import Timeline from '~/components/timeline.vue'

export default {
    components: { 
      Map, 
      TheHeaderWithImages, 
      OverviewComponent, 
      OverviewComponent, 
      MultipleShortOverviewContainer, 
      Default, 
      VerticalBars, 
      Timeline, 
      ButtonAnimated, 
      Timeline,
    },
    name: "festival-intro",
    data() {
      const content = {
        overviewTitle: "OVERVIEW",
        overviewDescription: "Founded in 1947 by Jean Vilar, the Festival d’Avignon is one of the most important contemporary performing arts events in the world. Every year in July, Avignon becomes a city-theater, transforming its architectural heritage into various majestic and surprising performance venues, welcoming tens of thousands of theater-lovers of all ages. The Festival manages to bring together a popular audience and cutting-edge international creation. Avignon is also a state of mind: the city is an open-air forum where festival-goers discuss the shows and share their experiences as spectators. For a month, everyone can have access to a contemporary and living culture. The programme includes shows, but also readings, exhibitions, films, and debates, which are so many gateways into the worlds of the artists and intellectuals invited to the Festival. Every evening, there is at least one show première, making Avignon a place of true creation and adventure for artists and spectators alike.“To provide theatre, and collective art, with something other than indoors spaces; to reconcile architecture and dramatic poetry.” – Jean Vilar The Festival's directors are appointed by the board, and have to be formally approved by the Mayor of Avignon and the French Minister of Culture. Since Jean Vilar, the artistic director has been entirely free to draw his or her programme up. This independence from any interference has always been guaranteed, regardless of the political context.",
        tabComponentTitle: "Practical Information",
      }  

      const tabItems = [
        { 
          tabTitle: "Date", 
          tabContent: "01 July 2022 - 07 July 2022"
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
            {date: "July 1947", text: "The Festival d'Avignon was founded by Jean Vilar."},
            {date: "1947-1963", text: "For 17 years, the Festival reflected the work of one man, one team, one location and thus was the embodiment of one spirit. Jean Vilar's aim was to attract a young captivated and fresh audience, through a type of theatre that was different from what could be seen in Paris at that time."},
            {date: "March 1967", text: "Cloître des Carmes was added to the festival as an official venue."},
            {date: "February 1968", text: "Cloître des Célestins was added to the festival as another official venue."},
            {date: "Janaury 1966", text: "Vilar opened the festival to other artistic disciplines and added Maurice Béjart and his 'Twentieth Century Ballet' to the itinerary of events."},
            {date: "May 1967", text: "Cinema made its first appearance at the Festival d'Avignon with an avant-première of Jean-Luc Godard La Chinoise in the Cour d'honneur."},
            {date: "June 1968", text: "Vilar opened the festival to other artistic disciplines and added Maurice Béjart and his 'Twentieth Century Ballet' to the itinerary of events."},
            {date: "July 1969", text: "Vilar introduced musical theatre with Orden, directed by Jorge Lavelli."},
            {date: "November 1971", text: "Vilar passed away in 1971, after a heart attack. Paul Puaux, with his years of experience at the Festival, was well-placed to continue Vilar's work."},
            {date: "April 1985", text: "In 1985, Alain Crombecque, former artistic director of the Festival d'Automne (Autumn Festival of Paris), took charge of the festival d'Avignon and remained for eight years."},
            {date: "Janaury 1966", text: "Vilar opened the festival to other artistic disciplines and added Maurice Béjart and his 'Twentieth Century Ballet' to the itinerary of events."},
            {date: "June 2003", text: "In 2003, the Festival was cancelled due to strikes which affected live performances all over France."},
            {date: "September 2013", text: "Olivier Py became the first artist to be appointed director of the Festival d’Avignon since Jean Vilar."},
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

    .header {
        flex-direction: row;
        background-color: var(--palette-green-dark);
        color: var(--palette-blue);

        margin-right: 10px;
        
        font-family: "Poppins";
        font-weight: 800;
        font-size: 60px;
        text-align: right;
    }

    .header-text {
        padding: 15px;
    }

    .all-sections {
        scroll-behavior: smooth;
    }

    .subheader {
        background-color: var(--palette-soft-blue);
        color: var(--text-color-light);
    }

    .info-section {
        display: flex;
        flex-direction: row;

        width: 100%;
        background-color: var(--palette-green-dark);
        gap: 10%;
        padding: 7% 2%;
        justify-content: space-around;
    }

    .history-section {
        width: 100%;
        background-color: var(--palette-blue);
    }

    .history-title {
        text-align: center;
        font-family: "Poppins";
        font-weight: 700;
        color: var(--text-color-light);
        font-size: 45px;
        padding: 4% 0% 6% 0%;
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
        text-align: center;
    }

    @media (max-width: 1250px) {
        .header {
            flex-direction: column-reverse;
            font-size: 4vw;
            text-align: center;
        }
    }

    @media (max-width: 1100px) {
        .info-section {
            flex-direction: column;
            align-items: center;
        }

        .col {
            margin: 10px 0;
            width: 50%;
        }

        .title {
            margin-bottom: 5%;
        }
    }
</style>