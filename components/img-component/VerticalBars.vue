<template>
    <div class="vertical-bars-container">
        <div class="item">
            <div class="image" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
            <a href="#section-2"><div class="bar-title"><p>Overview</p></div></a>
        </div>
        <div class="item">
            <div class="image" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
            <a href="#section-3"><div class="bar-title"><p>Information</p></div></a>
        </div>
        <div class="item">
            <div class="image" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
            <a href="#section-4"><div class="bar-title"><p>History</p></div></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "VerticalBars",

}
</script>

<style scoped>
.bar-button {
  all:unset;
  cursor: pointer;
}
/* VERTICAL BARS EXAMPLE */
.vertical-bars-container{
    display: flex;
    flex-direction: row;
    width: 70%;
    height: 100%;
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
  width: 100%; 
  height: 100%;
  top: 0; left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);

}


</style>