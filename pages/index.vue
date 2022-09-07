<template>
    <div class="all-sections">
        <!-- SECTION 1 -->
        <div class="header">
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
        <quote-component class="subheader"
            :quoteText="content.quoteText" 
            :quoteAuthor="content.quoteAuthor"/>
        <!-- SECTION 3 -->
        <div class="all-descriptions">
            <div class="description">
                <h2 class="title">Events</h2>
                <p class="text">{{content.textEvents}}
                <br />
                <nuxt-link class="text" to="events/">&lt;&lt;See More&gt;&gt; </nuxt-link></p>
            </div>
            <div class="description">
                <h2 class="title">Artists</h2>
                <p class="text">{{content.textArtists}}
                <br />
                <nuxt-link class="text" to="artists/">&lt;&lt;See More&gt;&gt; </nuxt-link></p>
            </div><div class="description">
                <h2 class="title">Places</h2>
                <p class="text">{{content.textPlaces}}
                <br />
                <nuxt-link class="text" to="places/">&lt;&lt;See More&gt;&gt; </nuxt-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import Default from '~/layouts/default.vue';
import QuoteComponent from '../components/QuoteComponent.vue';

export default {
    components: {
      Default,
      QuoteComponent
    },
    name: "Home",
    data() {
        const content = {
            quoteText: "Culture is the arts elevated to a set of beliefs.",
            quoteAuthor: "Thomas Wolfe",
            textEvents: "The Festival d'Avignon started with the idea to immerse audiences into the arts. Each year events are curated to excite the public about the arts for generations. About 80% of the performances during the Festival are having thier French priemiere at the Festival.",
            textArtists: "The Festival is a mecca for artists. Firstly, artists work with the Festival directors in organizing the Festival each year. The Festival also organizes Theorem, an association of theatres and festivals seeking to produce and promote young artists from countries in Central and Eastern Europe. The Festival also supports the International Centre for Creative Research (CIRCA). It is a residence for artists where are held exhibitions and concerts and, it also welcomes an event called 'Rencontres Internationales' (International Encounters) each summer during the Festival. Today, the Festival features international renowned as well as budding creatives including solo choreographers, spoken word performers, music groups, string quartets, dancers, playwright directors, opera singers, and improv actors.",
            textPlaces: "The Festival has been accumulating venues since it's inception. Today more than 5 venues help bring the festival to life each year. Each venue hosts a varying number of occupants: one of our largest venues, has drawn historical crowds upwards of 30,000 spectators, whereas some more intimate shows can bring together crowds as small as 5 for a more personal experience. ",
        }
        return {
            content:content,
        }
    },
}
</script>

<style scoped>

    /* Styling for header title with cycling words */
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
        0%    {top: 0;}
        20%   {top: -1.2em;}
        40%   {top: -2.4em;}
        60%   {top: -3.6em;}
        80%   {top: -4.8em;}
    }
    /** End of scroller styling */

    .header {
        background-color: var(--palette-green-dark);
        justify-content: space-between;
    }

    .picture {
        overflow: hidden;
        object-fit: cover;
    }

    @media (max-width:1400px) {
        img {
            display: none;
        }
    }
    @media (max-width: 400px) {
        .themes-intro {
            font-size: 50px;
        }
    }

    .subheader {
        background-color: var(--palette-soft-blue);
        color: var(--text-color-light);
    }

    /** Styling of the text describing events, artists, and places */
    .all-descriptions {
        width: 100%;
        background-color: var(--palette-green);
        display: flex;
        flex-direction: column;
        padding: 5% 5%;
    }

    .description {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
        /*align-items: center;*/
        justify-content: center;

        height: 70%;
        width: 90%;
        padding: 2%;

        font-family: "Poppins";
        font-weight: 200;
        font-size: 20px;
        color: var(--palette-blue);
        letter-spacing: 1.4px;
    }

    .title {
        max-width: 120px;
        margin: 0 2% 7% 2%;
        color: var(--palette-red-dark);
    }

    .text {
        max-width: 800px;
        margin: 0 2%;
        color: var(--palette-blue);
        text-align: left;
        justify-content: left;
        line-height: 26px;
    }
</style>