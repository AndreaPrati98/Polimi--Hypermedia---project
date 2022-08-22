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
    </div>
    

    



    <footer />
  </section>
</template>

<script>
import Footer from '~/components/footer.vue';
import Default from '~/layouts/default.vue';
export default {
    name: "artists",
    components: {Footer, Default}

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
    justify-content: center;
    margin-top: 30px;
}

</style>