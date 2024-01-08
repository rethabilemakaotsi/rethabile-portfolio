<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital@1&family=Nosifer&family=Poppins:ital@0;1&family=Roboto+Condensed:wght@100&display=swap" rel="stylesheet">
  <!-- <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/resume">Resume</router-link> 
    <router-link to="/projects">Projects</router-link> 
    <router-link to="/reviews">Reviews</router-link> 
    <router-link to="/contact">Contact</router-link>
    

  </nav> -->
  
  <router-view/>
  <Navigation />
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
  
}

nav {
  padding: 30px;
  background-color: #a02;

  

}

nav a {
  font-weight: bold;
  color: whi;
  text-decoration: none;
  margin-right: 30px;
  font-family: 'Roboto Condensed', sans-serif;
  
}

nav a.router-link-exact-active {
  color: black;
}
</style>
