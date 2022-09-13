<template>
    <section class="section">
        <h1>Something wrong happend!</h1>
        <h3>Error code: {{error.statusCode}}</h3>
        <h2>{{error.message}}</h2>
        <img src="~/assets/images/icons/facepalm-oh-no.gif" alt="funny oh-no image" class="gif"/>
        <button-standard btnDst="/" btnText="Return to Home" class="button"/>           
    </section>
</template>

<script>
import ButtonStandard from '~/components/utilities-components/ButtonStandard.vue'
export default {
  components: { ButtonStandard },
    name: "RedirectedPage",
    layout: 'errorLayout',
    props: {
        error: {
            type: Object,
        }
    }
}
</script>

<style scoped>
    .section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section h1 {
        font-size: 60px;
    }

    .gif {
        max-height: 400px;
        max-width: 400px;
        margin: 50px 0;
    }

    .button {
        width: fit-content;
    }
</style>