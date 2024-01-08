<template>
  <nav class="navbar">
    <ul>
  <li> <router-link to="/">Home</router-link> </li>
   <li>  <router-link to="/about">About</router-link></li> 
    <li>  <router-link to="/resume">Resume</router-link></li>
<li>     <router-link to="/projects">Projects</router-link></li> 
    <li> <router-link to="/reviews">Reviews</router-link></li> 
   <li>   <router-link to="/contact">Contact</router-link></li>
    </ul>
    


  </nav>
 
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
