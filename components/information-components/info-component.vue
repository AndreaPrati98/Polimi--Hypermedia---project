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
                        class="button"
                        >

                        <button @click="visibleText = info.content">
                            {{info.buttonTxt}}
                        </button>

                    </li>
                    <!-- <li>
                        <button-std 
                            :btnDst="'#'" 
                            :btnText="'Date'"/>
                    </li>
                    <li>
                        <button-std 
                            :btnDst="'#'"
                            :btnText="'Tickets'"/>
                    </li>
                    <li>
                        <button-std
                            :btnDst="'#'"
                            :btnText="'Location'"/>
                    </li>
                    <li>
                        <button-std
                            :btnDst="'#'"
                            :btnText="'Accessibility'"/>
                    </li> -->
                </ul>
            </div>
            <span class="separator"></span>
            <div class="text-content">
                {{ visibleText }}
            </div>
        </div>
    </section>
</template>

<script>
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
            visibleText: "Click on a button on the left side",
        };
    },
    components: { ButtonStd }
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

    .content a {
        text-decoration: none;
    }

    .indices-container {
        width: 100%;
    }

    .text-content {
        border: 1px solid black;
        height: 300px;
    }

</style>