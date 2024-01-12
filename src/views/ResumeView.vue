<template>
  <div>
    <h3 class="main2">Education</h3>

    <div id="education-container" class="row">
      <div v-for="edu in Education" :key="edu.id" class="col-sm-6 col-md-4">
        <div class="education-border">
          <h2 class="mt-3"><i class="bi bi-mortarboard"></i></h2>
          <h3>{{ edu["School Name"] }}</h3>
          <h5>({{ edu.year }})</h5>
        </div>
      </div>
    </div>

    <h3 class="main mt-3">Skills</h3>
    <ul class="skills-list">
      <li v-for="skill in Skills" :key="skill.title" class="skill-item">
        <img :src="skill.icon" alt="" /><br />
        <strong class="title">{{ skill.title }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    Education() {
      return this.$store.state.education;
    },
    Skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style >
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

#education-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 200px;
}

.education-border {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px; 
  margin-bottom: 20px;
}

.main {
  background-color: #84af9b;
  color: black;
  text-transform: uppercase;
  font-weight: bolder;

}

.main2 {
  background-color: #84af9b;
  color: black;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bolder;
 
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skill-item {
  width: 48%;
  margin-bottom: 20px; 
}

.skill-item img {
  width: 100%; 
  max-width: 100px; 
}
@media screen and (max-width: 600px) {
  #education-container {
    width: 100%;
  }

  .skill-item {
    width: 100%;
    
  }
}
</style>
