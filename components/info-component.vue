<template>
    <section class="section">
        <div class="div-container">
            <div class="buttons-container">
                <!-- <button class="button" onclick="console.log('Button clicked')">Date and tickets</button> -->
                <!-- <button class="button" onclick="console.log('Button clicked')">Location</button> -->
                <!-- <button class="button" onclick="console.log('Button clicked')">Accessibility</button> -->
                <button 
                v-for="(info, infoIndex) of informations"
                :key="`information${infoIndex}`"
                @click="visibleText = info.content"
                class="button"
                onclick="console.log('Hey there')"
                >
                {{info.buttonTxt}}
                </button>
            </div>
            <div class="info-container">
                <p class="text-container">
                    {{visibleText}}
                </p>
                <div class="info-button-wrapper">
                    <ButtonStd :btnDst="'/festival-practical-info'" :btnText="'More Info'" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonStd from './utilities-components/button-std.vue';

export default {
    name: "info-component",
    data() {
        return {
            informations: [
                {
                    buttonId: 1,
                    buttonTxt: "Date and Tickets",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum quibusdam cumque, ipsam, officia quia dolorem voluptates labore repellat beatae, laudantium culpa molestias quisquam. Optio sunt sint cupiditate mollitia amet ullam, nemo, maiores in itaque incidunt perspiciatis unde, velit repudiandae consequatur omnis nihil delectus hic iure quas. Facere velit, magni rem reiciendis eius ad dolorum beatae repellendus id tenetur vero porro! Fugit, ratione? Vitae saepe sed quaerat, excepturi consequatur maiores? Deleniti dolorem, earum odit, consequatur cum, officia necessitatibus provident nobis distinctio dolore quibusdam soluta quo obcaecati nihil? Doloremque dolor accusamus iusto neque atque quos, soluta facilis. Nulla nisi reprehenderit nostrum atque. Ullam, odio. Doloremque dolorum quas eius ut laudantium accusamus explicabo sapiente quaerat amet suscipit obcaecati ullam, vel dolor ab illo sit? Voluptas accusantium ab vero quod suscipit, magni, esse unde natus eum, corporis beatae a. Ipsa aspernatur in eos, voluptates doloribus laboriosam sit expedita quo nulla sequi porro cum? Assumenda, modi consequatur impedit amet pariatur asperiores ullam voluptatum illum nulla animi est commodi libero fugiat veritatis unde maiores a sunt tempore architecto, dolorum reprehenderit. Accusamus libero similique velit eius corrupti deleniti ratione distinctio nostrum possimus perferendis? Ipsa placeat asperiores debitis consequatur illum nihil cum dolorum ullam deleniti, odio aperiam?",
                },
                {
                    buttonId: 2,
                    buttonTxt: "Location",
                    content: "This is content from botton 2",
                },
                {
                    buttonId: 3,
                    buttonTxt: "Accessibility",
                    content: "This is content from botton 3",
                },
            ],
            visibleText: "Click on a button on the left side",
        };
    },
    components: { ButtonStd }
}
</script>

<style scoped>
    .section {
        width: 35%;
        height: 40vh;
        margin: 30px 0;
    }

    .div-container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: 100%;
    }

    .button {
        margin: 1rem;
        background-color: #ffffff;
        border: none;
        
    }

    .button:active {
        background-color: #f4f4f4;
    }

    .buttons-container {
        background-color: #c7c7c7;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .info-container {
        background-color: #eeeeee;
        overflow-y: scroll;
        
    }

    .info-button-wrapper {
        display: flex;
        justify-content: center;
        padding: 20px 0;
    } 

    .more-info {
        padding-top: 5px;
        padding-bottom: 10px;
    }

    .text-container {
        width: max(100%, 10ch);
        padding: 5%;
        
    }
</style>