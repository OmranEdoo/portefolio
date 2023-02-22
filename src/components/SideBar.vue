<template>
  <div>
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end bg-dark navbar-dark" tabindex="-1" id="offcanvasNavbar" data-bs-scroll="true" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Omran Edoo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link min-content" aria-current="page" href="#" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link min-content" href="#" to="/cursus">Cursus</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link min-content" href="#" to="/programmation">Programmation</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link min-content" href="#" to="/projects">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link min-content" href="#" to="/about">More</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link min-content" href="#" @click="scrollToBottom">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    methods: {
      scrollToBottom: function() {
        window.scrollBy(0, 1000);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.min-content {
  width: min-content;
  padding-left: 50px
}
</style>
