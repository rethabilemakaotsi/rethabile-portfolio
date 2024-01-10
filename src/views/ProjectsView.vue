<template >
        <div class="card text-black" style="width: 18rem;" v-for="project in Projects" :key="project">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">   {{ project.name }}</h5>
    {{ this.$store.state.projects }}
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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