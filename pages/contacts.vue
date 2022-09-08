<template>
  <section>
    <div class="header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
    </div>

    <div class="all-columns">
      <!-- PHONE -->
      <div class="col">
        <div class="icon-container">
          <div class="icon-border">
            <img
              class="icon"
              src="http://www.clipartbest.com/cliparts/xTg/89y/xTg89yXTA.png"
            />
          </div>

        </div>

        <div class="title">Phone</div>
        <div class="text">
          <p>
            +39 847 27 284 <br />
            Mon - Fri 8.00 - 17.00 CET
          </p>
        </div>
      </div>

      <!-- EMAIL -->
      <div class="col">
        <div class="icon-container">
          <div class="icon-border">
            <img
              class="icon"
              src="http://www.clipartbest.com/cliparts/9cp/LpB/9cpLpBqgi.png"
            />
          </div>
        </div>
        <div class="title">Email</div>
        <div class="text">
          <p>
            festival@culture.avignon.com <br />
            Art Director: director@culture.avignon.com <br />
            Marketing: marketing@culture.avignon.com <br />
            City Liason: city@culture.avignon.com
          </p>
        </div>
      </div>

      <!-- MAIL -->
      <div class="col">
        <div class="icon-container">
          <div class="icon-border">
            <img
              class="icon"
              src="https://cdn.onlinewebfonts.com/svg/img_559756.png"
            />
          </div>
        </div>
        <div class="title">Mail</div>
        <div class="text">
          <p>
            Send formal requests to<br />
            [PO BOX ADDRESS?]
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contactPage",
  data() {
    return {
      title: "Here our contacts",
      subtitle: "Feel free to catch us",
    };
  },
};
</script>

<style scoped>
.all-columns {
  background: var(--palette-green);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4%;
}
.header {
  text-align: center;
  background-color: var(--palette-soft-blue, rgb(75, 75, 173));
  color: seashell;
  padding: 20px;
}
.header h2 {
  font-size: 40px;
}

.header p {
  font-size: 30px;
}


.col {
  min-width: 25%;
  justify-content: center;
  margin: 0 25px;
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

  justify-self: center;
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

.text p {
  margin: 0 auto;
  max-width: 300px;

}

@media (max-width: 850px) {
  .all-columns {
    flex-direction: column;
    align-items: center;
  }
  .col {
    margin: 20px auto;
  }
}
</style>
