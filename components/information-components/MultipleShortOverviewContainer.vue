<template>
    <section class="section">
        <div class="title">
            <h1>{{ title }}</h1>
        </div>
        <span class="separator"></span>
        <div class="content">
            <div class="indices-container">
                <ul>
                    <li v-for="(element, index) of objList"
                        :key="`element-${index}`"
                        >
                        <button @click="visibleText = element" class="button">
                            {{element.name}}
                        </button>
                    </li>
                </ul>
            </div>
            <span class="separator"></span>
            <div class="inner-container">
                <div class="text-container">
                    <h1>{{ visibleText.name }}</h1>
                    <p>{{ visibleText.description }}</p>
                </div>
                <span class="separator"></span>
                <div class="text-button-container">
                    <button-animated class="ticket-button"
                        :btnText="'Buy tickets'" 
                        :btnDst="'google.com'" 
                        :isNuxtLink="false" />
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
        objList: {
            type: Array,
            required: true,
        }
    },
    data() {
        // set the default visible text as the first element in the objList
        return {
            visibleText: this.objList[0],
        }
    },
}
</script>

<style scoped>
    .section {
        width: 100%;
        height: 100%;
        margin: 30px 0;
    }

    .title h1 {
        font-size: 25px;
        font-family: "Poppins";
        font-weight: 600;
        /* margin-bottom: 10px; */
        text-align: center;
        letter-spacing: 1.2px;
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
        all: unset;
        margin: 5px 5px;
        display: inline-block;
        
    
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
        all: unset;
        display: inline-block;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
        padding: 11px 25px;
        color: var(--palette-blue);
        border-bottom: 3px solid var(--palette-green-dark);

        transition: box-shadow .3s ease-out,
                    transform .3s ease-out,
                    opacity .5s ease;

        
    }
    
    .text-container {
        display: flex;
        flex-flow: column;

        padding: 6px 20px;
    }

    .button:hover {
        box-shadow: 4px 4px 10px var(--palette-green-dark,#454545);
        transform: translate3d(-1.7px, -1.7px, 2px);
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