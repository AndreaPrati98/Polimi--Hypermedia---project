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
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus reprehenderit 
                    odit praesentium, voluptas veritatis ullam quam voluptates corporis laboriosam 
                    nostrum tenetur et aliquid quia qui! Nesciunt autem adipisci quis? -->
                    {{visibleText}}
                </p>
                <nuxt-link to="/" class="more-info">
                    More Info
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "info-component",
    data() {
        return {
            informations: [
                {
                    buttonId: 1,
                    buttonTxt: "Date and Tickets",
                    content: "This is content from botton 1",
                },
                {
                    buttonId: 2,
                    buttonTxt: 'Location',
                    content: 'This is content from botton 2',
                },
                {
                    buttonId: 3,
                    buttonTxt: "Accessibility",
                    content: "This is content from botton 3",
                },
            ],
            visibleText: "Click on a button on the left side",
        }
    }
}
</script>

<style scoped>
    .section {
        border: 1px solid red;
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
        background-color: white;
        border: none;
    }
    .buttons-container {
        background-color: #c7c7c7;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .info-container {
        background-color: #eeeeee;
    }

    .more-info {
        margin: 0 auto;
    }
</style>