<template>
    <section class="description-container">
        <div class="description">

            <p>
                {{content}}
            </p>  
        </div>
    </section>
</template>

<script>
export default {
    name: 'descr-component',
    props: {
        title: {
            type: String,
            required: false,
        },
        content: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scope>
    .description-container {
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 100%; */  
    background-color: var(--palette-green-dark);
  }

  .description {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: center;

    height: 70%;
    width: 90%;
    
    border: 0.5px solid var(--palette-red);
    color: var(--palette);

    margin: 2% 0;
    padding: 7% 7%;


    font-family: "Poppins";
    font-weight: 200;
    font-size: 20px;
    color: var(--palette-blue);
    letter-spacing: 1.4px;
  }


</style>