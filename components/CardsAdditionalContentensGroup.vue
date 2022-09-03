<template>
    <section>
        <h3 class="title">{{title}}</h3>
        <div class="wrapper">
            <button @click="slideLeft">&lt;</button>
            <div class="wrapper-box">
                <div class="box">
                    <card-additional-content class="item" v-for="(element, index) of objList" :id="`item${index}`"
                        :key="`card-${index}`"
                        :title="element.name"
                        :content="element.content"
                        :imgUrl="element.img"
                        :btnTxt="`See More`"
                        :btnDst="`${partialPath}/` + element.id" />
                </div>
            </div>
            <button @click="slideRight">&gt;</button>
        </div>
    </section>
</template>

<script>


import CardAdditionalContent from '~/components/img-component/CardHoverAdditionalContent.vue';
export default {
    name: "transitional-links",
    components: { 
        CardAdditionalContent
    },
    props: {
        title: {
            type: String,
            required: true,
        },

        objList: {
            type: Array,
            required: true,
        },
        partialPath: {
            type: String,
            required: true,
        }
    },
    methods: {
        slideLeft() {
            let content = document.querySelector(".wrapper-box");
            content.scrollLeft -= 200;
        },
        slideRight() {
            let content = document.querySelector(".wrapper-box");
            content.scrollLeft += 200;
        }
    }
};
</script>

<style scoped>

/**jgvefhbnwgrejkihgfvhbjkhgftrgvbhjhgfvbhjuh */

.title {
    width: 100%;
    font-size: 25px;
    font-family: "Poppins";
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: 1.2px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
.wrapper-box {
  height: 100%;
  width: 70%;
  max-width: 700px;
  overflow: auto;
  scroll-behavior: smooth;
  margin: 0 10px;
}
.box {
  width: 1000px;
  height: 100%;
  position: relative;
  display: flex;
  
}
.box .item {
  position: relative;
  height: 100%;
  width: 100%;
  margin:25px;
}

button {
  all: unset;
  height: 320px;
  padding: 5px 20px;
  background-color: inherit;
  cursor:pointer;
}

button:hover {
    border: 0.5px solid grey;
    transition: .7s ease;

}

</style>















</style>