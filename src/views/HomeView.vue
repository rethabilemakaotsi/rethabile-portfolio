<template>

  <div class="container">
    <div class="image-container">
      <img src="https://i.postimg.cc/3xS35VRf/IMG-20240107-WA0005-065850-removebg-preview.png" class="img">
    </div>
    <div class="text-container">
      <h1 class="title"><strong><span>Hi, I'm Rethabile Makaotsi</span><br><span>Aspiring Developer</span></strong></h1>
      <p>
        Welcome to my coding journey! Here, you'll find updates on my projects and the exciting challenges I encounter along the way. Join me as I learn, build, and grow in the ever-evolving landscape of software development.
      </p>
      <router-link to="/projects">
        <button class="btn" type="button">View My Work</button>
      </router-link>
    </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh; /* Adjusted height for better visibility */
}

p {
  font-family: 'Inter', sans-serif;
  color: #333;
}

.image-container {
  margin-left: 20px; 
}

.text-container {
  max-width: 50%;
  margin-top: 50px; 
  text-align: left; 
}

.img {
  max-width: 100%;
  height: auto;
}

h1 {
  color: #84af9b;
  font-family: 'Inter', sans-serif;
  text-transform: capitalize; 
  margin-bottom: 20px; 
}

.btn {
  background-color: #84af9b;
  color: white; 
  padding: 10px 20px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(132, 175, 155, 0.5);
}

.btn:hover {
  background-color: #688f7f;
}

</style>
