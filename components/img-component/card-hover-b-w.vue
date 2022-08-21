<template>
    <div class="img" :style="cssProps">
        <div class="txt-wrapper">
            <div class="txt">
                <h2>{{this.titleTxt}}</h2>
                <!-- <p>Piccola descrizione</p> -->
                <p>{{this.descTxt}}</p>
                <button-std class="btn" :btnDst="this.btnDst" :btnText="this.btnTxt"/>
            </div>
        </div>
    </div>
</template>

<script>
import buttonStd from '../utilities-components/button-std.vue'
export default {
    name: "card-hover-b-w",
    components: { buttonStd },
    props: {
        titleTxt: {
            type: String,
        },
        descTxt: {
            type: String,
        },
        btnTxt: {
            type: String,
        },
        btnDst: {
            type: String,
            required: true,
            default: "/",
        },
        imgUrl: {
            type: String,
            required: true,
            default: "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg",
        }
    },
    computed: {
        cssProps() {
            // I have to compute the url like this because the url() css function
            // doesn't accept "var()" as variable
            let url = ""
            url = url.concat("url(", this.imgUrl,")")
            return {
                '--img-url': url,
            }
        }
    }
}
</script>

<style scoped>

    
    .img {
        background-position: center;
        background-repeat: no-repeat;
        
        background-image: var(--img-url);
        background-size: cover;
        
    }

    .txt-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 100%;

        border: 2px solid green;
        
        transition: backdrop-filter .3s ease-in .2s,
                    background-color .3s ease-out,
                        
    }

    .txt-wrapper:hover {
        backdrop-filter: grayscale(100%);
        background-color: rgba(255, 255, 255, 0.3);
    }

    .txt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow: scroll;

        padding: 10px;
        border: 1.5px solid black;
        border-radius: 10px;
    
        /* backdrop-filter: opacity(1); */
        background-color: rgba(255, 255, 255, 0.8);
    }

    .txt p {
        margin-bottom: 7px;
    }

</style>