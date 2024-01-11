<template >
  <h1> Projects</h1>
  <div class="row  mx-5">
        <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="project in Projects" :key="project">
  <img :src="project.image" class="card-img-top" alt="" height="150px" width="100px">
  <div class="card-body">
    <h5 class="card-title">   {{ project.name }}</h5>

    <p class="card-text">{{ project.description }}</p>
    <a href="#" class="btn btn-primary " id="btn-space">Github </a>
    <a href="#" class="btn btn-primary"  id="btn-space">Vercel </a>

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
  color: #84af9b;
}
#btn-space{
  margin-left: 40px;
}



    
</style>      