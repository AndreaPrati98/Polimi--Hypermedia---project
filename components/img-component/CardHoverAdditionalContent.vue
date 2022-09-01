<template>
    <div class="container">
        <nuxt-link :to="btnDst">
        <div class="card">
            <img :src="imgUrl"/>
             <h3>{{ title }}</h3>
            <div class="focus-content">
            <p>{{ content }}</p>
            <button-standard
                :btnTextSize="'12px'"
                :btnText="btnTxt"
                :btnDst="btnDst"/>
            </div>
        </div>
        </nuxt-link>
    </div>
</template>

<script>
import ButtonStandard from '../utilities-components/ButtonStandard.vue';
export default {
  components: { ButtonStandard },
    name: "card-additional-content",
    props: {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        imgUrl: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg', 
            required: true,
        },
        btnTxt: {
            type: String,
        },
        btnDst: {
            type: String,
        }
    }
}
</script>

<style scoped>

h3 {

  width: 100%;
  font-size: 25px;
  font-family: "Poppins";
  font-weight: 100;
  margin-bottom: 50px;
  text-align: center;
  /*letter-spacing: 1.2px;*/
}


p {
    font-family: "Oswald";
    font-weight: 300;
}


    .card {
    width: 300px;
    /* height: 280px; */
    height: 330px;
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    box-sizing: border-box;
    overflow: hidden;
    }

    .card * {
    transition: 0.3s ease all;
    }

    .card img {
    margin: 0;
    width: 300px;
    height: 224px;
    object-fit: cover;
    display: block;
    }

    .card h3 {
    margin: 0;
    padding: 12px 12px 48px;
    line-height: 32px;
    font-weight: 400;
    font-size: 20px;
    }

    .card .focus-content {
    display: block;
    padding: 8px 12px;
    }

    .card p {
    margin: 0;
    line-height: 1.5;

    padding: 8px 12px;

    }

    .card:hover img, .card:focus-within img {
    margin-top: -80px;
    }

    .card:hover h3, .card:focus-within h3 {
    padding: 8px 12px 0;
    }
    .button-std{
        margin-top: 20px;
    }

</style>