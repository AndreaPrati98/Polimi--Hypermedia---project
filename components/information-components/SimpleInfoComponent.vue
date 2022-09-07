<template>
    
    <div class="info-section">
        <div class="col" v-for="(element, index) of tabItems"
            :key="`col-${index}`">
            <div class="title">{{element.tabTitle}}</div>
            <div class="content">{{element.tabContent}}</div>
            
            <div v-if="element.link" class="text-button-container">
                <button-animated class="ticket-button"
                :btnText="element.link.button" 
                :btnDst="element.link.destination" 
                :isNuxtLink="element.link.nuxtLink" />
            </div>
        </div>
</div>
</template>

<script>
    export default {
        name: "SimpleInformation",
        props: {
            tabItems: {
                type: Array,
                required: true,
            }
        }

    }
</script>

<style scoped>
    .info-section {
        display: flex;
        flex-direction: row;

        width: 100%;
        background-color: var(--palette-green-dark);
        gap: 10%;
        padding: 7% 2%;
        justify-content: space-around;
    }
    .col {
        display: flex;
        flex-direction: column;
        width: 25%;
    }

    .title {
        font-family: "Oswald";
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20%;
        color: var(--palette-red-dark);
    }

    .content {
        font-family: "Poppins";
        font-weight: 200;
        line-height: 1.7rem;
        font-size: 24px;
        letter-spacing: 1.2px;
        color: var(--palette-blue);
        margin-bottom: 10%;
        text-align: center;
    }

    @media (max-width: 1100px) {
        .info-section {
            flex-direction: column;
            align-items: center;
        }

        .col {
            margin: 10px 0;
            width: 50%;
        }

        .title {
            margin-bottom: 5%;
        }
    }

</style>