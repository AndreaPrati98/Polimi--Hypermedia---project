<template>
    <div>
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
            <quote 
              :quoteText="content.quoteText"
              :quoteAuthor="content.quoteAuthor" />
        </div>

    <!-- SECTION 3 -->
    <div class="section3">
        <div class="both-boxes">
            <div class="background-box"></div>
            <div class="explore-box"><a class="explore-button" href="../events">
                <overview-component class="explore"
                    :title="content.overviewTitle" 
                    :description="content.overviewDescription" /></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import Quote from '~/components/quote.vue';
import Default from '~/layouts/default.vue';

export default {
    components: { OverviewComponent, Default, Quote },
    name: "home",
    data() {
        const content = {
            overviewTitle: "Explore Events",
            overviewDescription: "Check out all of the events this year. You can explore by different types of performances and learn more about the artists performing at the events, the venues hosting the events, and much more!",
            cardsTitle: "Explore Events",
            quoteText: "Culture is the arts elevated to a set of beliefs.",
            quoteAuthor: "Thomas Wolfe",
        }
        return {
            content:content,
        }
    },
    
    /* Does not work 
    async asyncData({ route, $axios }) {
        const  {events}     = await $axios.get("/api/events");
        const listEvents = []
        /*for (element in events) {
            listEvents.push({
                title: "element.title",
                content:"element.date",
                imgUrl:"element.img",
                destination: "/events/" + "element.id",
            })
        }
        
        return {
            events: events,
        }
    },*/
}
</script>

<style scoped>

/* Explore Box (with link))with translation effect */
.explore-button {
    all:unset;
}

.both-boxes {
    width: 30%;
    height: 40%;
    padding: 5%;
}
.background-box{
    background: var(--palette-red);
    position: absolute;
    transition: transform 0.8s;
    width: inherit;
    height: inherit;
}
.explore-box {
    background: var(--palette-green-dark);
    transition: transform 0.8s;
    position: absolute;
    width: inherit;
    height: inherit;
    cursor: pointer;
}

.explore-box:hover {
    transform: translate(5%,5%);
}


/* Header title with cycling words */
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
  max-width: 400px;
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
width: 100%;
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
  height: 800px;
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