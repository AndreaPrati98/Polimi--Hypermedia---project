<template>
    <div class="container">
        <div class="card">
            <img :src="imgUrl"/>
            <h3>{{ title }}</h3>
            <div class="focus-content">
<<<<<<< HEAD
                <p>
                    {{ content }}
                    <button-std 
                        :btnTextSize="'12px'"
                        :btnText="btnTxt"
                        :btnDst="btnDst"/>
                </p>
=======
                <p>{{ content }}</p>
                <button-std
                        :btnTextSize="'12px'"
                        :btnText="btnTxt"
                        :btnDst="btnDst"/>
                
                
>>>>>>> dev-d-2
            </div>
        </div>
    </div>
</template>

<script>
import buttonStd from '../utilities-components/button-std.vue'
export default {
  components: { buttonStd },
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

    .card {
    width: 300px;
<<<<<<< HEAD
    height: 280px;
=======
    height: 330px;
>>>>>>> dev-d-2
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    border-radius: 8px;
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
    font-weight: 500;
    font-size: 20px;
    }

    .card .focus-content {
    display: block;
    padding: 8px 12px;
    }

    .card p {
    margin: 0;
    line-height: 1.5;
<<<<<<< HEAD
=======
    padding: 8px 12px;

>>>>>>> dev-d-2
    }

    .card:hover img, .card:focus-within img {
    margin-top: -80px;
    }

    .card:hover h3, .card:focus-within h3 {
    padding: 8px 12px 0;
    }
<<<<<<< HEAD
=======

    .button-std{
        margin-top: 20px;
    }
>>>>>>> dev-d-2
</style>