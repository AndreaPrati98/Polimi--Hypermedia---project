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
    background-color: var(--palette-red);
  }

  .description {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: center;

    height: 70%;
    width: 90%;
    
    border: 2px solid var(--text-color-light);
    color: var(--text-color-light);

    margin: 2% 0;
    padding: 8px 10px;
    font-size: 30px;
  }
</style>