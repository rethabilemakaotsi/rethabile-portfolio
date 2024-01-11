<template>
    <div>
      <h1>Education</h1>
      <ul>
        <li v-for="edu in Education" :key="edu">
          
          <strong> {{ edu["School Name"] }}</strong> - {{ edu.qualification }} ({{ edu.year }}) <br> <img src="edu.image">
        </li>
      </ul>
  
      <h1>Skills</h1>
      <ul>
        <li v-for="skill in Skills" :key="skill.title">
          <strong>{{ skill.title }}</strong> - <img :src="skill.icon" alt="">
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
      }
    },
    mounted() {
      this.$store.dispatch("fetchEducation");
      this.$store.dispatch("fetchSkills");
    }
  };
  </script>
  
  <style>
 
  </style>
  