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
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Link</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </nuxt-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><nuxt-link class="dropdown-item" to="/">Action</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/">Another action</nuxt-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><nuxt-link class="dropdown-item" to="/">Something else here</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link disabled"
              to="/"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</nuxt-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  // data() {
  //   return {
  //     headerList: [
  //       {
  //         name: 'Home',
  //         path: '/',
  //       },
  //       {
  //         name: 'Town',
  //         path: '/',
  //       },
  //       {
  //         name: 'Things To Do',
  //         path: '/',
  //       },
  //       {
  //         name: 'Services',
  //         path: '/',
  //       },
  //       {
  //         name: 'Contact Us',
  //         path: '/',
  //       },
  //     ],
  //   }
  // },
}
</script>
