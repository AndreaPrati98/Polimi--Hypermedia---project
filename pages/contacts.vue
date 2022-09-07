<template>
    <div class="all-columns">
        <h2>data.title</h2>
        <p>data.subtitle</p>
        <!-- PHONE -->
        <div class="col">
            <div class="icon-container">
                <div class="icon-border">
                    <img class ="icon" src="http://www.clipartbest.com/cliparts/xTg/89y/xTg89yXTA.png" />
                </div>
            </div>

            <div class="title">Phone
            </div>
            <div class="text"> +39 847 27 284 <br/>
                Mon - Fri 8.00 - 17.00 CET
            </div>
        </div>

        <!-- EMAIL -->
        <div class="col">
            <div class="icon-container">
                <div class="icon-border">
                    <img class ="icon" src="http://www.clipartbest.com/cliparts/9cp/LpB/9cpLpBqgi.png" />
                </div>
            </div>
            <div class="title">Email
            </div>
            <div class="text"> festival@culture.avignon.com <br/>
                Art Director: director@culture.avignon.com <br/>
                Marketing: marketing@culture.avignon.com <br />
                City Liason: city@culture.avignon.com
            </div>
        </div>

        <!-- MAIL -->
        <div class="col">
            <div class="icon-container">
                <div class="icon-border">
                    <img class ="icon" src="https://cdn.onlinewebfonts.com/svg/img_559756.png" />
                </div>
            </div>
            <div class="title">Mail
            </div>
            <div class="text"> Send formal requests to<br/>
                [PO BOX ADDRESS?]
            </div>
        </div>


    </div>
    
</template>

<script>
export default {
    name: "contacts-page",
    

}
</script>

<style scoped>


.all-columns {
    background: var(--palette-green);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 4%;

}

.col {
    width: 25%;
    justify-content: center;
}

.icon-container {
    display: flex;
    justify-content: center;
}

.icon-border {
    height: 170px;
    width: 170px;
    border: 7px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    justify-self: center


}
.icon {
    object-fit: cover;

    margin: 3px 3px 3px 3px;
    max-width: 100px;
    max-height: 100px;
}

.title {
    text-align: center;
    font-family: "Oswald";
    font-weight: 400;
    font-size: 40px;
    margin: 5%;

}

.text {
    text-align: left;
    font-family: "Open Sans";
    letter-spacing: 1.2px;
    line-height: 2em;
}
</style>

