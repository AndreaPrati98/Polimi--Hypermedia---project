<template>
  <nav>
    <div class="logo">
      Festival d'Avignon
    </div>
    <div>
      <ul class="nav-landmark-container">
        <li
        v-for="(navItem, navItemIndex) of headerList"
        :key="`navItem${navItemIndex}`"
        class="nav-landmark"
        >  
          <nuxt-link :to="navItem.path" class="nuxt-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Town',
          path: '/',
        },
        {
          name: 'Things To Do',
          path: '/',
        },
        {
          name: 'Services',
          path: '/',
        },
        {
          name: 'Contact Us',
          path: '/',
        },
      ],
    }
  },
}
</script>

<style scoped>
  .div {
    height: 40px;
    border-bottom: 1px solid black;
    display: flex;
    align-content: center;
    justify-content: space-between;
    position: fixed; 
    width: 100%;
    font-size: 22px;
    z-index: 10;
    background-color: var(--palette-red);
  }

  nav div {
    display: flex;
    margin: 0 10px;
  }

  nav li {
    display: inline-block;
    text-decoration: underline;
    margin: 0 10px;
  }


  .nuxt-link{
    color: var(--text-color);
  }



</style>