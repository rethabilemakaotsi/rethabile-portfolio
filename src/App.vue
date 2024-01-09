<template>

  <Navigation />

  <main class="container-fluid">

    <router-view/>
  </main>


  <Footer />
  

</template>


<script>

import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default{
  components: {
  
    Navigation,
    Footer
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color:#E3ddca ;
  
}

nav {
  padding: 30px;
  background-color: #84af9b;

  

}

nav a {
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  
}

nav a.router-link-exact-active {
  color: black;
}
</style>
