<template>
  <SideBar></SideBar>
  <router-view/>
  <FooterBar></FooterBar>
</template>


<script>
import SideBar from './components/SideBar.vue'
import FooterBar from './components/FooterBar.vue'


export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    SideBar,
    FooterBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*overflow-x: hidden;*/
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
