<template>
  <section class="section">
    <div class="div-container">
        <div class="img">

        </div>
        <div class="text-container">
            <div class="title">
                <h2>
                    History
                </h2>
            </div>
            <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati in facere dolores. Culpa, illo. Natus debitis optio et voluptatum delectus magni quos nam perspiciatis dolores at, dolorum tempore aut!
            </p>
        </div>
    </div>
  </section>
</template>

<script>
export default {

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
        /* useful to use the % also with the children */
        height: 100%;  
    }

    .img {
        border: 2px solid red;
        height: 80%;   
    }

    .text-container {
        border: 2px solid purple;
        height: 100%;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
        font-size: 1.7rem;
        
    }

    .paragraph {
        
    }


</style>