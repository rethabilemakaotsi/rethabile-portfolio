<template >
  <h1> Projects</h1>
  <div class="row  mx-5">
        <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="project in Projects" :key="project">
  <img :src="project.image" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">   {{ project.name }}</h5>

    <p class="card-text">{{ project.description }}</p>
    <a href="#" class="btn btn-primary">Github </a>
    <a href="#" class="btn btn-primary">Vercel </a>

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
    
</style>      