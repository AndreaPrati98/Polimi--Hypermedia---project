<template>
  <div>
    <h1>Artist: {{ artistName }}</h1>
  </div>
</template>
<script>
export default {
    name: 'ArtistPage',
    async asyncData({ route, $axios }) {
        const  id  = +route.params.id
        const { data } = await $axios.get('/api/artists/' + id)
        return {
            id: data.id,
            name: data.name,
            img: data.img,
            date_of_birth: data.date_of_birth,
            description: data.description,
        }
    },
}





</script>
