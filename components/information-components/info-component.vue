<template>
    <section class="section">
        <div class="title">
            <h1>Title</h1>
        </div>
        <span class="separator"></span>
        <div class="content">
            <div class="indices-container">
                <ul>
                    <li v-for="(info, infoIndex) of btnInfos"
                        :key="`information${infoIndex}`"
                        >
                        <button @click="visibleText = info" class="button">
                            {{info.buttonTxt}}
                        </button>
                    </li>
                </ul>
            </div>
            <span class="separator"></span>
            <div class="inner-container">
                <div class="text-container">
                    <h1>{{ visibleText.buttonTxt }}</h1>
                    <p>{{ visibleText.content }}</p>
                </div>
                <span class="separator"></span>
                <div class="text-button-container">
                    <button-std-animated class="ticket-button"
                        :btnText="'Buy tickets'" 
                        :btnDst="'google.com'" 
                        :isNuxtLink="false" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonStdAnimated from '../utilities-components/button-std-animated.vue';
import ButtonStd from '../utilities-components/button-std.vue';

export default {
    name: "info-component",
    data() {
        return {
            btnInfos: [
                {
                    buttonId: 1,
                    buttonTxt: "Date",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum quibusdam cumque, ipsam, officia quia dolorem voluptates labore repellat beatae, laudantium culpa molestias quisquam. Optio sunt sint cupiditate mollitia amet ullam, nemo, maiores in itaque incidunt perspiciatis unde, velit repudiandae consequatur omnis nihil delectus hic iure quas. Facere velit, magni rem reiciendis eius ad dolorum beatae repellendus id tenetur vero porro! Fugit, ratione? Vitae saepe sed quaerat, excepturi consequatur maiores? Deleniti dolorem, earum odit, consequatur cum, officia necessitatibus provident nobis distinctio dolore quibusdam soluta quo obcaecati nihil? Doloremque dolor accusamus iusto neque atque quos, soluta facilis. Nulla nisi reprehenderit nostrum atque. Ullam, odio. Doloremque dolorum quas eius ut laudantium accusamus explicabo sapiente quaerat amet suscipit obcaecati ullam, vel dolor ab illo sit? Voluptas accusantium ab vero quod suscipit, magni, esse unde natus eum, corporis beatae a. Ipsa aspernatur in eos, voluptates doloribus laboriosam sit expedita quo nulla sequi porro cum? Assumenda, modi consequatur impedit amet pariatur asperiores ullam voluptatum illum nulla animi est commodi libero fugiat veritatis unde maiores a sunt tempore architecto, dolorum reprehenderit. Accusamus libero similique velit eius corrupti deleniti ratione distinctio nostrum possimus perferendis? Ipsa placeat asperiores debitis consequatur illum nihil cum dolorum ullam deleniti, odio aperiam?",
                },
                {
                    buttonId: 2,
                    buttonTxt: "Tickets",
                    content: "This is content from botton 2",
                },
                {
                    buttonId: 3,
                    buttonTxt: "Location",
                    content: "This is content from botton 3",
                },
                {
                    buttonId: 4,
                    buttonTxt: "Accessibility",
                    content: "This is content from botton 4",
                },

            ],
            visibleText: {
                buttonTxt: "Click on the upper buttons",
                content: "",
            },
        }
    },
    components: { ButtonStd, ButtonStdAnimated },
}
</script>

<style scoped>
    .section {
        width: 35%;
        height: 100%;
        margin: 30px 0;
    }

    .title h1 {
        margin: 0;
    }
    .separator {
        border-top: 1px solid #333;
        width: 100%;
        height: 5px;
        display: block;   
    }

    .content {
        width: 100%;
    }
    .content ul {
        
        display: flex;
        /* flex-wrap: wrap; */
        
        /* to make the overflow: scroll work it's necessary to set justify-content: start*/
        justify-content: flex-start;
        overflow: scroll;

        padding: 0;
        width: 100%;
    }
    .content li{
        margin: 5px 5px;
        display: inline-block;
        font-weight: bold;
    }

    .indices-container {
        width: 100%;
    }

    .inner-container {
        border: 1px solid black;
        height: 300px;
        overflow: scroll;
    }
    .inner-container .separator {
        margin: 0 auto;
        border-top: 1px solid red;
        width: 40%;
    }

    .text-button-container {
        display: flex;
        justify-content: center;

        padding-bottom: 10px;
    }

    /* Button style */

    .button {
        display: inline-block;
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--text-color-light);
        padding: 11px 25px;
        background-color: var(--palette-red);
        transition: box-shadow .3s ease-out,
                    opacity .5s ease;

        border-radius: 5px;
    }
    
    .text-container {
        display: flex;
        flex-flow: column;

        padding: 6px 20px;
    }

    .button:hover {
        box-shadow: 4px 4px 2px #454545;
    }

    .button:active {
        box-shadow: 2px 2px 10px #454545;
        opacity: .6;
    }

    .ticket-button {
        width: 150px;
        font-size: 13px;
    }

</style>