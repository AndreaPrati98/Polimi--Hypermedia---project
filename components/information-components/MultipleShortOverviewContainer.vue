<template>
    <section class="section">
        <div class="title">
            <h1>{{ title }}</h1>
        </div>
        <div class="content">
            <div class="indicies-container">
                <ul>
                    <li v-for="(element, index) of objList"
                        :key="`element-${index}`"
                        >
                        <button @click="visibleText = element" class="button">
                            {{element.tabTitle}}
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
    name: "TabBox",
    components: { ButtonAnimated },
    props: {
        title: {
            type: String,
            required: true,
        },
        /** expected structure:
         * 
         * {
         *  tabTitle: ____, [String]
         *  tabContent: ___, [String]
         *  link: ___, [Array]
         * }
         * 
         */
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