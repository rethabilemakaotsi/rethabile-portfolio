<template>
  <div class="about-container">
    <div class="about">
      <div class="text-container">
        <h2>About Me</h2>
        <p><strong>Name:</strong> Rethabile<br><strong>Surname:</strong> Makaotsi<br><strong>Age:</strong> 22</p>
        <p>
          I am a dynamic Full-stack Development enthusiast currently honing my skills at Life Choices. My passion lies in the art of transforming visionary ideas into robust, functional code. I thrive on the inherent challenges that coding presents, viewing each obstacle as an opportunity for growth.
        </p>
        <p>
          My journey is characterized by a relentless commitment to continuous learning, driven by a profound desire to contribute to impactful projects within the tech industry. As you peruse my portfolio, you'll witness not just a set of skills but a genuine dedication to delivering top-notch solutions in both front-end and back-end development.
        </p>
      </div>
      <img src="https://i.postimg.cc/3xS35VRf/IMG-20240107-WA0005-065850-removebg-preview.png" alt="Profile Image" height="200px">
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
}

.text-container {
  max-width: 60%;
  margin-left: 30px;
  margin-top: 40px;
  color: #333;
}

h2 {
  font-family: 'Inter', sans-serif;
  margin-top: 30px;
  color: #2c3e50;
  text-transform: uppercase;
}

img {
  max-width: 100%;
  height: auto;
  margin-right: 40px;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
  .about-container {
    width: 100%;
  }
  
  .about {
    flex-direction: column;
    text-align: center;
  }

  .text-container {
    max-width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }

  img {
    margin-right: 0;
  }
}
</style>

