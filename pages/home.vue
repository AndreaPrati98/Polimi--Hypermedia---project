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
            <div class="quote-container">
                <div class="quote">
                    <h3>Culture is the arts elevated to a set of beliefs.</h3>
                </div>
                <p class="quote-by">Thomas Wolfe</p>
            </div>
        </div>

    <!-- SECTION 3 -->
    <div class="section3">
        <!--cards-additional-contentens-group :linkText="content.cardsTitle" :list="events"/-->
        <!-- VERTICAL BARS EXAMPLE -->
        <div class="vertical-bars-container">

            <div class="item">
                <div class="image" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
                <div class="bar-title"><p>Events</p></div>
                <div class="bar-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
            </div>

            <div class="item">
                <div class="image" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
                <div class="bar-title"><p>Venues</p></div>
                <div class="bar-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
            </div>

            <div class="item">
                <div class="image" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
                <div class="bar-title"><p>Performers</p></div>
                <div class="bar-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SECTION 4-->
    <div class="section4">

    </div>


  </div>
</template>

<script>
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import Default from '~/layouts/default.vue';

export default {
    components: { OverviewComponent, Default, CardsAdditionalContentensGroup },
    name: "home",
    data() {
        const content = {
            overviewTitle: "OVERVIEW",
            overviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab accusantium harum! Nam placeat laboriosam ducimus odio et aut doloremque voluptatibus fugit odit harum? Quaerat aliquam quo sit? Mollitia facilis harum aliquid accusamus quasi error temporibus id totam ratione? Aperiam molestiae veniam sit? Odit, laborum. Explicabo minima doloremque dignissimos. Nihil ratione repudiandae quibusdam, incidunt qui veritatis nesciunt debitis velit quos. Quos tenetur neque repellendus aspernatur iste sed sunt porro rem adipisci labore nulla enim ea explicabo corporis ipsam officiis accusantium perferendis vero tempore soluta unde, aliquam reiciendis temporibus. Suscipit, explicabo doloribus? At nobis sequi voluptatum, quo ullam incidunt quos aspernatur?",
            cardsTitle: "Explore Events",
        }
        return {
            content:content,
        }
    },
    
    /* Does not work */
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
        }*/
        
        return {
            events: events,
        }
    },
}
</script>

<style scoped>


/* VERTICAL BARS EXAMPLE */
.vertical-bars-container{
    display: flex;
    flex-direction: row;
    width: 70%;
    max-height: 60%;
}


.item {
  position: relative;
  width: 33%;
  height: inherit;
  min-height: 600px;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;}
  
.item:before, .item:after {
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
  }

.item:after {
    opacity: 1;
    transition: opacity 0.5s ease;
  }

.item:before {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%);
    z-index: 1;
    opacity: 0;
    /*transition: opacity 0.5s ease, transform 0.5s ease;*/
  }

.item:hover {
    width: 40% !important;
}


.item:hover::before {
      opacity: 1;
}
    
.bar-content {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }
  


.bar-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;}


.bar-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
    font-family: "Oswald";
    font-size: 1.728rem;
    line-height: 0;
}

.image {
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}



/* END OF MOVING VERTICAL BARS EXAMPLE */
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



.quote {
border:none;
font-family:Georgia, "Times New Roman", Times, serif;
margin-bottom:-30px;
position: relative; 
max-width: 400px; 
    margin: 0 auto; 
    padding-left: 0.4em; 
}

.quote h3 {
    font-size:35px;
    font-family: "Poppins";
    font-weight: 200;
    text-align: center;
    letter-spacing: 1.3px;

}





.quote h3:before { 
    content: "\201C";
    font-weight: bold;
    font-size:100px;
    color:var(--palette-red-dark);
    position: absolute; 
    top: -0.2em;
    left: -0.5em; 
    font-family: 'Georgia'; 
} 
.quote h3:after { 
    content: "\201D";
    font-weight: bold;
    font-size:100px;
    color:var(--palette-red-dark);
    position: absolute; 
    bottom: -0.6em;
    right: 0; 
    font-family: 'Georgia'; 
}

.quote-by {
    margin-top: 2em;
    text-align: center;
    font-family: "Oswald";
    font-weight: 200;
    font-size: 1.5rem;
    letter-spacing: 1.2px;
}


.quote-container {
    padding: 5%;
}



</style>