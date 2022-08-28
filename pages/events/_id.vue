<template>
    <section class="section">
        <the-header-with-title :title="title" class="header"/>

        <div class="all-sections">
            <div class="section1">
                <div class="overview-comp">
                    <overview-component title="OVERVIEW" :description="description"/>
                </div>

                
                <div class="img-comp">
                    <img :src="img" alt="funny cat" class="image">
                </div>
            </div>
            <div class="section2">
                <tab-box :title="'Artists Involved'" class="info-comp"/>
            </div>


            <div class="section3">
                <cards-additional-contentens-group class="events-comp" :linkText="text" :events="eventsList"/>
            </div>

            <div class="section4">
                <div class="seeall">
                    <div class="see-text">
                        <p>See all other events</p>
                    </div>
                    <div class="allButtons">
                        <div class="button-box">
                            <div class="all-other-btn">
                                <button-standard class="group-btn" btnText="All Events" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="seeallby">
                    <div class="see-text">
                        <p>See all events by...</p>
                    </div>
                    <div class="allButtons">
                        <div class="button-box">
                            <div class="theater-btn">
                                <button-standard class="group-btn" btnText="Theater" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                            <div class="music-btn">
                                <button-standard class="group-btn" btnText="Music" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                            <div class="dance-btn">
                                <button-standard class="group-btn" btnText="Dance" btnDst="/events" btnTextSize="20px" :btnBkgdColor="`var(--palette-red-dark)`" />
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import InfoComponent from '~/components/information-components/MultipleShortOverviewContainer.vue';
import TheHeaderWithTitle from '~/components/headers/TheHeaderWithTitle.vue';
import OverviewComponent from '~/components/information-components/OverviewComponent.vue';
import MultipleShortOverviewContainer from '~/components/information-components/MultipleShortOverviewContainer.vue';
import TabBox from '~/components/information-components/TabBox.vue';
import CardsAdditionalContentensGroup from '~/components/CardsAdditionalContentensGroup.vue';
import ButtonStandard from '~/components/utilities-components/ButtonStandard.vue';
export default {
    name: "artist-page",
    components: {
    InfoComponent,
    TheHeaderWithTitle,
    OverviewComponent,
    MultipleShortOverviewContainer,
        TabBox,
        CardsAdditionalContentensGroup,
        ButtonStandard
    },
    props: {
        eventTitle: {
            type: String,
            required: true,
        }
    },

data() {
    return{
        text: "Places for this Event",
        eventsList: [{"id":1,"title":"Theater 1","description":"Theater 1 um dolor sit ame elit. Integer cursus eleifend mi id dapibus. ","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"17/06/2022","time":"18:15","details":"blah "},{"id":2,"title":"Theater 2","description":"Theater 2 um dolor sit amet, consectetur adipisnd mi id dapibus. ","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"18/06/2022","time":"18:15","details":"blah "},{"id":3,"title":"Theater 3","description":"Theater 3 um dolor sit amet, consecteger cursus eleifend mi id dapibus. Ut vestibulum pellentesque molestie. ","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"19/06/2022","time":"18:15","details":"blah "},{"id":4,"title":"Theater 4","description":"Theater 4 um dolor sit amet, consectetur adipiscing apibus. Ut vestib","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"20/06/2022","time":"18:15","details":"blah "},{"id":5,"title":"Theater 5","description":"Theater 5 um dolor sit amet, conseifend mi id dapibus. Ut vestibulum pellentesque molestie.","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"21/06/2022","time":"18:15","details":"blah "},{"id":6,"title":"Theater 6","description":"Theater 6 um dolor selit. Integer cursus eleifend mi id dapibus. Ut vestibulum pellentesq","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"17/07/2022","time":"18:15","details":"blah "},{"id":7,"title":"Theater 7","description":"Theater 7 um dolor sit amet, consectetur adipiscing elit. Integer cursus bus.","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"18/07/2022","time":"18:15","details":"blah "},{"id":8,"title":"Theater 8","description":"Theater 8 um dolor sit amet, consectetur adipiscing elit. Integer","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"19/07/2022","time":"18:15","details":"blah 8"},{"id":9,"title":"Theater 9","description":"Theater 9 um dolor sit amet, consectetur adipiscing elit. Integepib","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"20/07/2022","time":"18:15","details":"blah "},{"id":10,"title":"Theater 10","description":"Theater 10 um dolor sit amet, consectetur adipiscingdapibus. Ut vesti","img":"https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg","date":"21/07/2022","time":"18:15","details":"blah "}],

        }
    },

    async asyncData({ route, $axios }) {
        const { id }  = route.params
        const { data } = await $axios.get('/api/events/' + id)
        return {
            id: data.id,
            title: data.title,
            description: data.description, 
            img: data.img,
            date: data.date,
            time: data.time,
            placeId: data.placeId,
            artists: data.EventArtist
        }
    },


    
}
</script>

<style scoped>



.see-text {
    font-family: "Poppins";
    font-size: 36px;
    font-weight: 200;
    padding-bottom: 5%;
    color: var(--palette-blue)
}
.allButtons {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
}

.button-box {
    width:80%;
    max-width: 180px;
}

.group-btn {
    width:100%;
    margin:5% 0;
}




.all-sections {
    display: flex;
    flex-direction: column;
}
.section1 {
    background-color: var(--palette-soft-blue);
    color: var(--text-color-light);
    display: flex;
    
}
.section2 {
    background-color: var(--palette-green-dark);
}
.section3 {
    background-color: var(--palette-blue);
    color: var(--text-color-light)
}


.section4 {
    background-color: var(--palette-green);
    display: flex;
    flex-direction: row;
    padding: 10%;
    width: 100%;
    height:100%;
}






.seeall {
    width: 50%;
    text-align: center;



}

.seeallby{
    border-left: 4px solid var(--palette-red-dark);

    display: flex;
    flex-direction: column;
    padding-left:20px;
    width: 50%;
    justify-self: center;
    text-align: center;


    

}

.overview-comp {
    padding: 15% 5%;

}

.img-comp {
    margin: 5% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-comp {
    width: 100%;
    padding: 5% 15%;  
}

.events-comp {
    padding: 5%;
}

.image {
    width: 100%;
}




.wrapper{ 
    height: 100%;
    display: grid;
    place-items: center;
}

.typing{
    width: 22ch;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid black;
    font-family: monospace;
    font-size: 2em;
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from {
        width: 0
    }
    
}



</style>