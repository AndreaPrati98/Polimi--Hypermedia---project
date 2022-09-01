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
    <button @click="goToPrev">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "breadcrumbs",
  
  computed: {
    crumbs() {
        const fullPath = this.$route.fullPath;
        const params = fullPath.startsWith("/")
            ? fullPath.substring(1).split("/")
            : fullPath.split("/");
        const crumbs = [];

        let path = ''

        crumbs.push({ param: "Home", path: "/" })

        params.forEach((param, index) => {
            param = param.split("?")
            path = `${path}/${param[0]}`;
            const match = this.$router.match(path);

            if (match.name !== null) {
                param[0] = "/ " + param[0]
                crumbs.push({ param: param[0], path });
                
            }
        });

        return crumbs;
    },
  },
};
</script>

<style scoped>

    .crumbs {
      display: flex;
      justify-content: space-between;
      background-color: var(--palette-green);
      margin: 0 30px;
    }
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
