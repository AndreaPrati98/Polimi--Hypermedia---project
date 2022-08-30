<template>
  <div class="crumbs">
    <ul class="list">
        <li v-for="(crumb, index) in crumbs"
            :key="index"
            class="listItem"
            >
            <nuxt-link :to="crumb.path">
            {{ crumb.param }}
            </nuxt-link> 
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    crumbs() {
        const fullPath = this.$route.fullPath;
        const params = fullPath.startsWith("/")
            ? fullPath.substring(1).split("/")
            : fullPath.split("/");
        const crumbs = [];

        let path = ''
        
        params.forEach((param, index) => {
            path = `${path}/${param}`;
            const match = this.$router.match(path);

            if (match.name !== null) {
                param = "/ " + param
                crumbs.push({ param, path });
                
            }
        });

        return crumbs;
    },
  },
};
</script>

<style scoped>

    .crumbs ul {
        /* display: block; */
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .crumbs li {
        display: inline-block;
        padding: 10px 0 10px 10px;
        
    }


</style>
