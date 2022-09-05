<template>
    <div class="seeall">
        <div class="see-text"><p>{{text}}</p></div>
        <div class="allButtons">
            <div class="button-box">
                <div v-for="(element, index) of listOfButtons"
                    :key="`group-link-button-${index}`" >
                    <button-standard class="group-btn" 
                        :btnText="element.btnText"
                        :btnDst="element.btnDst" 
                        :btnTextSize="`20px`" 
                        :btnBkgdColor="`var(--palette-red-dark)`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonStandard from '~/components/utilities-components/ButtonStandard.vue';
export default {
    name: "group-links",
    components: {
        ButtonStandard,
    },
    props: {
        text: {
            type: String,
            required: false,
            default: "See More"
        },
        listOfButtons: {
            type: Array,
            required: true,
            /** Expecected Structure:
             * listOfButtons: [
             *      button1: {
             *              btnText: " [string] "
             *              btnDst:  " [string] "
             *      }, 
             *      button2: {
             *              btnText: " [string] "
             *              btnDst:  " [string] "
             *      }, 
             *      button3: {
             *              btnText: " [string] "
             *              btnDst:  " [string] "
             *      }, ...
             *  ]
             */
        }
    }
}
</script>

<style scoped>

.group-btn {
    width:100%;
    margin:5% 0;
}

.button-box {
    width:80%;
    max-width: 180px;
}


.see-text {
    font-family: "Poppins";
    font-size: 36px;
    font-weight: 200;
    padding-bottom: 5%;
    color: var(--palette-blue)
}

.allButtons {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
}
.seeall {
    width: 100%;
    height: 100%;
    text-align: center;
}

</style>





