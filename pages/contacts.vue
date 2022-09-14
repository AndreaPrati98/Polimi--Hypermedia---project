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
              :src= "require(`~/assets/images/icons/${phoneInfo.img}`)"
              :alt="phoneInfo.title"
            />
          </div>

        </div>

        <div class="title">{{phoneInfo.title}}</div>
        <div class="text">
          <p>
            {{phoneInfo.text}}
          </p>
        </div>
      </div>

      <!-- EMAIL -->
      <div class="col">
        <div class="icon-container">
          <div class="icon-border">
            <img
              class="icon"
              :src= "require(`~/assets/images/icons/${emailInfo.img}`)"
              :alt="emailInfo.title"
            />
          </div>
        </div>
        <div class="title">Email</div>
        <div class="text">
          <p>
            {{emailInfo.text}}
          </p>
        </div>
      </div>

      <!-- MAIL -->
      <div class="col">
        <div class="icon-container">
          <div class="icon-border">
            <img
              class="icon"
              :src= "require(`~/assets/images/icons/${mailInfo.img}`)"
              :alt="mailInfo.title"
            />
          </div>
        </div>
        <div class="title">{{mailInfo.title}}</div>
        <div class="text">
          <p>
            {{mailInfo.text}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: "contactPage",
  head: {
    title: 'Contact\'s',
    meta: [
        { hid: 'description', name: 'description', content: "The important contacts are here. Phone number, email address and mail address are available at this page." }
    ],
  },
  data() {
    return {
      title: "Here our contacts",
      subtitle: "Feel free to catch us",
      phoneInfo: {
        title: "Phone",
        text: "+39 847 27 284 \n Mon - Fri 8.00 - 17.00 CET",
        img: "phoneIcon.png"
      },
      emailInfo: {
        title: "Email",
        text: "festival@culture.avignon.com \n Art Director: director@culture.avignon.com \n Marketing: marketing@culture.avignon.com \n City Liason: city@culture.avignon.com",
        img: "emailIcon.png"
      },
      mailInfo: {
        title: "Mail",
        text: "Send formal requests to \n 4 Cr Président Kennedy, 84000 Avignon, France",
        img: "mailIcon.png",
      }
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
  font-family: 'Oswald';
  font-weight: 400;
  font-size: 40px;
  margin: 5%;
}

.text {
  text-align: left;
  font-family: 'Open Sans';
  letter-spacing: 1.2px;
  line-height: 2em;
  white-space: pre-line;
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
