<template>
    <section class="description-container">
        <div class="description">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus qui deleniti vero dignissimos consequatur earum officiis ut aut aspernatur omnis 
            illum quaerat assumenda odit, laborum dicta iure ea saepe. Vel.
            </p>  
        </div>
    </section>
</template>

<script>
export default {

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