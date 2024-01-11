<template >
  <h1> Reviews</h1>
  <div class="reviews-container">
    <div class="row  mx-5">
        <div class="card text-black w-25 mx-5 mt-4 mb-4" v-for="testimonial in Testimonials" :key="testimonial">
  <img :src="testimonial.profile" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">   {{ testimonial.name }}</h5>

    <p class="card-text">{{testimonial.description }}</p>
   
  </div>
</div>
</div>
  </div>


</template>
<script>
export default{
  computed:{
   Testimonials(){
      return this.$store.state.testimonials
    }
  },
  mounted(){
    this.$store.dispatch("fetchTestimonials")
  }
}

</script>
<style >
    
</style>   
   
 