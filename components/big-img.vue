<template>
    <div>
        Qui l'immagine
        <nuxt-link class="nuxt-link-red" to="/" >This is the internal nuxt link</nuxt-link>
    </div>
</template>

<script>
export default {
    name: "BigImg",
}
</script>

<style scoped>
    .nuxt-link-red {
        border-block: solid;
        border-color: red;
    }

</style>

