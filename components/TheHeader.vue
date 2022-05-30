<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark justify-content-center"
  >
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      
      <nuxt-link class="navbar-brand" to="/">Navbar</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class=" justify-content-end collapse navbar-collapse">
        <ul class="navbar-nav  mb-2 mb-lg-0 ">
          <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
          >  
            <nuxt-link :to="navItem.path" class="nav-link">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
        
      </div>
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
          path: '/pointOfInterest',
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
