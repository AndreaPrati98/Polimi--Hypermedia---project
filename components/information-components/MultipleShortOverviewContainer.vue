<template>
    <section class="section">
        <div class="title">
            <h1>{{ title }}</h1>
        </div>
        <div class="content">
            <div class="indicies-container">
                <ul>
                    <li v-for="(tab, index) of items" :key="`tab-${index}`">
                        <button @click="visibleText = tab" class="button">
                            {{tab.tabTitle}}
                        </button>
                    </li>
                </ul>
            </div>
            <div class="inner-container">
                <div class="text-container">
                    <h1>{{ visibleText.tabTitle }}</h1>
                    <p>{{ visibleText.tabContent }}</p>
                </div>
                <div v-if="visibleText.link" class="text-button-container">
                    <button-animated class="ticket-button"
                        :btnText="visibleText.link.button" 
                        :btnDst="visibleText.link.destination" 
                        :isNuxtLink="visibleText.link.nuxtLink" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonAnimated from '../utilities-components/ButtonAnimated.vue';

export default {
    name: "info-component",
    components: { ButtonAnimated },
    props: {
        title: {
            type: String,
            required: true,
        },
        items : {
            type: Array,
            required: true,
            /** expected structure:
             * 
             * {
             *  tabTitle: ____, [String]
             *  tabContent: ___, [String]
             * }
             * 
             */
        }
    },
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
                buttonTxt: "",
                content: "",
            },
            activeState: {
                activeState: false,
            }
        }
    },
}



</script>

<style scoped>


.inner-container {
    /*border: 1px solid black;*/
    height: 300px;
    overflow: scroll;
}

.text-button-container {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;

}

.text-container {
    display: flex;
    flex-flow: column;
    padding: 6px 20px;
    font-family: "Poppins";
    font-weight:300;
}
 
.ticket-button {
    width: 150px;
    font-size: 13px;
    margin: 30px;
}


.separator {
    margin: 0 auto;
    border-top: 1px solid red;
    width: 40%;
    height: 5px;
    display: block;   
}

.section {
    width: 100%;
    height: 100%;
    margin: 30px 0px;
}

.title h1 {
    width: 100%;
    font-size: 25px;
    font-family: "Poppins";
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: 1.2px;
}

.content {
    width: 100%;
}

.content ul {
    display: flex;
    justify-content: center;
    
}

.content li {
    margin: 5px 5px;
    display: inline-block;
    color: var(--palette-blue);
    border-bottom: 3px solid var(--palette-green-dark);
    
}

.indicies-container {
    width: 100%;
}

.button {
    all: unset;
    cursor: pointer;
    display: inline-block;
    font-family: "Poppins";
    font-weight: 200;
    font-size: 18px;
    text-decoration: none;
    padding: 11px 25px;
    transition: 0.2s ease-in;
}

.button:hover {
    background-color: var(--palette-green);
}



</style>