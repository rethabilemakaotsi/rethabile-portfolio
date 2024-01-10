<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

   <nav class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="">RM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active"  >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link active"  >About</RouterLink>
        </li>
        <li>
          <RouterLink to="/resume" class="nav-link active"  >Resume</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="nav-link active"  >Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/reviews" class="nav-link active"  >Reviews</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="nav-link active"  >contact</RouterLink>
        </li>
        
       
        



        
      </ul>
      
    </div>
  </div>
</nav>
    

  </nav>

   

 
</template>



<style scoped>
.navbar-brand{
  font-family: bolder ;

}



</style>



<script>

export default {
  name : 'NavigationComp'
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
