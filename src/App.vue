<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200&display=swap" rel="stylesheet">

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
  /* font-weight: bold; */
  text-decoration: none;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: white;
  margin-right: 20px;
  
  
}

nav a.router-link-exact-active {
  color: black;
}
</style>
