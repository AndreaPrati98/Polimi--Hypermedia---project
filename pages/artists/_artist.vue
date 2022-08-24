<template>
  <div>
    <h1>Artist: {{ artistName }}</h1>
    <NuxtLink to="/artists">Back to All Artists</NuxtLink>
  </div>
</template>
<script>
export default {
    name: 'ArtistPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/artists/' + id)
        return {
            name: data.name

        }
    },
}





</script>
