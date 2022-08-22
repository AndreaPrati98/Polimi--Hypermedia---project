<template>
  <section>
    <div>
        <div class="bar">
            <h1>Name of Artist</h1>
            <div>
                <ul>
                    <li>Jazz musician</li>
                    <li>Active since 2014</li>
                    <li>Seattle, WA</li>
                </ul>
            </div>
        </div>
        <div class="left-slot"></div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum augue in lectus maximus volutpat. Ut ac libero pulvinar, dignissim ex in, placerat nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
        <div class="picure1">
            <img class="picture left" src="~/assets/imgs/artists/samples/sydney.jpg"/>
        </div>
        <p>Nullam at pharetra nisl. Vivamus lobortis elit in nisl feugiat, ac dapibus nibh vehicula. Fusce vel risus eu ante ultricies rutrum et id arcu. Ut massa tellus, consectetur non neque nec, fermentum consectetur risus. Ut ut venenatis diam, sit amet suscipit nunc. Vivamus sem urna, pellentesque non justo vel, faucibus aliquam sem.Cras lacus eros, ullamcorper suscipit suscipit at, eleifend et mauris. Suspendisse eleifend ante sed lacus ultrices lobortis. Etiam vitae massa eros. Cras vestibulum facilisis suscipit. Sed venenatis nisl non ante volutpat, vitae porta quam faucibus. Nam ultrices, enim nec aliquam iaculis, eros mi porta turpis, et fringilla augue est non nulla. Nam id quam a ligula accumsan elementum.Praesent dictum purus vitae nunc eleifend sodales. Nulla dignissim arcu eu arcu lacinia, in dapibus tellus tempus.</p>
        <div class="picture2">
            <img class="picture right" src="~/assets/imgs/artists/samples/violin.jpg"/>
        </div>
        <p> Praesent ipsum diam, scelerisque eu maximus vel, semper vitae urna. Nam egestas ac justo nec condimentum. Praesent egestas at mauris at pharetra. Nulla id risus nec tortor facilisis faucibus. Duis feugiat viverra mauris, eget blandit libero.</p>
    </div>
    
    
   

    <hr/>
    <div class="where">
        <h3>Events including this artist:</h3>
        <div class="scroll-window">
            <div class="events">

                <card-additional-content class="event" title="Event 1" content="Friday 22/06 10AM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 2" content="Saturday 19/06 7PM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 3" content="Saturday 19/06 19:30pm" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 4" content="Friday 22/06 10AM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 5" content="Saturday 19/06 7PM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 6" content="Saturday 19/06 19:30pm" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 7" content="Friday 22/06 10AM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 8" content="Saturday 19/06 7PM" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
                <card-additional-content class="event" title="Event 9" content="Saturday 19/06 19:30pm" :imgUrl="'https://cdn.pixabay.com/photo/2016/11/21/16/01/buildings-1846133_1280.jpg'" btnTxt="See More" btnDst="~/pages/events/event1"/>
            </div>
        </div>
    </div>

    <footer />
  </section>
</template>

<script>
import Footer from '~/components/footer.vue';
import CardAdditionalContent from '~/components/img-component/card-additional-content.vue';
import Default from '~/layouts/default.vue';
export default {
    name: "artists",
    components: {Footer, Default, CardAdditionalContent}

}
</script>

<style>
.bar {
    display: flex;
    background-color: red;
    width: 100%;
    height: 30vh;
    flex-direction: column;
}
.left-slot {
    background-image: url(~/assets/imgs/artists/music3.jpg);
    border-radius: 50%;
    align-items: right;
    width: 300px;
    height: 300px;
    float: right;
    position: relative;
    top: -150px;
    right: 10px;
}
h1 {
    padding-left: 5%;
    width: 100%;
    font-family: 'Open Sans';
    font-weight: 800;
    font-size: 2.5em;
}
ul {
    width: 100%;
    padding-left: 10%;
    font-family: 'Poppins';
}

p {
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 2%;
    font-family:'Open Sans';
    font-weight: 400;
}

img {
    height:35%;
    width: 25%;
}

.left{
    
    background: unset;
    padding: 12px;
    border-right: 1px solid red;
    float: left;
    margin-left: 2%
}

.right{
    
    background: unset;
    padding: 12px;
    border-left: 1px solid red;
    float: right;
    margin-right: 2%;
    }

.where {
    display:flex;
    position: relative;
}
hr {
    width:70%;
    margin-left: auto;
    margin-right: auto;
    color: red;
    margin-top: 30px;
    
}
section {
    display: flex;
    flex-wrap: wrap;
}

.where {
    width:100%;
    display: flex;
    text-align: center;
    margin-top: 30px;
    flex-direction: column;
}


.events{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-shrink: 1;
    overflow: scroll;
    scroll-behavior: smooth;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
}
.event {
    margin:25px;
}

.scroll-window{
    width:60%;
    margin-left: 20%;
    display: flex;


}

</style>