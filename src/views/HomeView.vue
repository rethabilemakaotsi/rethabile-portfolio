<template>

  <div class="container">
    <div class="image-container">
      <img src="https://i.postimg.cc/3xS35VRf/IMG-20240107-WA0005-065850-removebg-preview.png" class="img">
    </div>
   <div class="text-contianer">
    
      <h1 > I'm Rethabile Makaotsi <br>Aspiring Developer</h1>
      <p>Welcome to my coding journey, here you will find updates on my projects and the exciting challenges i encounter along the way.<br>Join as i learn ,build and grow in the ever-evolving landscape of software development.</p>
      <router-link to="../views/ProjectsView.vue">
        <button class="btn " type="button">view my work</button>
      </router-link>
     
   </div>
  
    </div>
     
    
  
  
</template>

<script>




</script>
<style scope>
.container {
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 600px;
}


.image-container {
 margin-left: 50px;
}
.text-container {
 max-width: 50%;
 margin-top: 100px;
}
.img {
 max-width: 100%;
 height: auto;
}
h1{
  color: #84af9b;
  font-family: 'Inter', sans-serif;
}
.btn{
  background-color: #84af9b;
  
  box-shadow: 0 0 20px #84af9b;
  
}






</style>
