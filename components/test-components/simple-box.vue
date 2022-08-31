<template> 
    <div class="card">
        {{artistId}}
        {{artistName}}
    </div>
  
</template>

<script>
export default {
    name: 'simple-test-box',
    props: {
        artistId: {
            type: String,
        },
        artistName: {
            type: String
        },
    },
}
</script>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
</style>