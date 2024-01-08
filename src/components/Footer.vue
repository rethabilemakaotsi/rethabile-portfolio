<template>
    <footer>
      <div class="container">
        <p>&copy; {{ currentYear }} Rethabile-Portfolio</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  }
  </script>
  
  <style scoped>
  .container{
    margin-top: 40%;
  }
  </style>
  