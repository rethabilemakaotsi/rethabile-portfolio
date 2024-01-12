<template>
  <footer>
    
     
      <p class="copyright"> &copy; Rethabile's Portfolio {{ currentYear }}</p>
   
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
@import "~bootstrap-icons/font/bootstrap-icons.css";

  


.copyright {
  font-weight: bolder;
  background-color: #84af9b;
  width: 100%;

  font-size: 12px;
  color: black;
text-align: center;
margin-top: 300px;
margin-bottom: 0px;
}
</style>

