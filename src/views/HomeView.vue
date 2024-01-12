<template>

  <div class="container">
    <div class="image-container">
      <img src="https://i.postimg.cc/3xS35VRf/IMG-20240107-WA0005-065850-removebg-preview.png" class="img">
    </div>
    <div class="text-container">
      <h1 class="title" id="animation"><strong><span>Hi, I'm Rethabile Makaotsi</span><br><span>Aspiring Developer</span></strong></h1>
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
    #animation {
   
   color: transparent;
   text-transform: uppercase;
   -webkit-background-clip: text;
   background-clip: text;
   background-size: 400%;
   animation: move 5s ease infinite;
   background-image: linear-gradient(68.7deg, rgb(75, 146, 116) 13.2%, rgb(111, 118, 177) 29.8%, rgb(169, 107, 160) 48.9%, rgb(210, 115, 145) 68.2%, rgb(159, 169, 108) 86.4%);
}

@keyframes move {
   0%, 100% {
       background-position: 200% 0%;
   }

   50% {
       background-position: 0% 200%;
   }
}

.additional-color {
   color: #808080;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh; 
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

</style>
