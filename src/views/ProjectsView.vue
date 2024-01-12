<template>
  <h2>Projects</h2>
  <div class="row mx-5">
    <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="project in Projects" :key="project">
      <img :src="project.image" class="card-img-top" alt="" height="150px" width="100px">
      <div class="card-body">
        <h5 class="card-title ">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a :href="project.gitHub"  class="btn btn-primary" id="btn-space">Github </a>
        <a :href="project.vercel" class="btn btn-primary" id="btn-space">Vercel </a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  computed:{
    Projects(){
      return this.$store.state.projects
    }
  },
  mounted(){
    this.$store.dispatch("fetchProjects")
  }
}

</script>
<style >
  @media screen and (max-width: 500px){
    .row{
      width: 100%;
    }
  }
h2{
  font-family: 'Inter', sans-serif;
  margin-top: 30px;
  color: #84af9b;
  text-transform: uppercase;
  font-weight: bolder;

}
.card{
  border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color:#E3ddca  ;

}
.card-text{
  font-family: 'Inter', sans-serif;
 
}
.card-title{
  color:black;
}
.btn {
  background-color: #84af9b;
  color: black; 
  padding: 10px 20px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(132, 175, 155, 0.5);
}

.btn:hover {
  background-color: #688f7f;
}
#btn-space{
  margin-left: 40px;
}


</style>

     