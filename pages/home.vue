<template>
    <div class="all-sections">
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
    <div class="all-descriptions">
      <div class="description">
        <div class="title">
          <h2>Events</h2>
        </div>
        <div class="text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat commodi officiis molestiae, atque velit libero.</p>
        </div>        
      </div>

      <div class="description">
        <div class="title">
          <h2>Artists</h2>
        </div>
        <div class="text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat commodi officiis molestiae, atque velit libero.</p>
        </div>        
      </div>

      <div class="description">
        <div class="title">
          <h2>Places</h2>
        </div>
        <div class="text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat commodi officiis molestiae, atque velit libero.</p>
        </div>        
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import Quote from '~/components/Quote.vue';
import Default from '~/layouts/default.vue';

export default {
    components: {Default, Quote },
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
}
</script>

<style scoped>

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
  justify-content: space-between;
}

.section2 {
  width: 100%;
  background-color: var(--palette-soft-blue);
}

.section3 {
  width: 100%;
  background-color: var(--palette-green);
  display: flex;
  flex-direction: column;
}


.picture {
  overflow: hidden;
  object-fit: cover;
}

@media (max-width:600px) {
  img {
    display: none;
  }
}
.all-descriptions {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.description {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

    
  align-items: center;
  justify-content: center;

    height: 70%;
    width: 90%;
    
    padding: 5% 5%;


    font-family: "Poppins";
    font-weight: 200;
    font-size: 20px;
    color: var(--palette-blue);
    letter-spacing: 1.4px;

}

.title {
  max-width: 120px;
  margin: 0 2%;
  color: var(--palette-red-dark);
}

.text {
  max-width: 800px;
  margin: 0 2%;
  color: var(--palette-blue);
}




</style>