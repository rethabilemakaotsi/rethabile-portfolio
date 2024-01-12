import { createStore } from 'vuex'
const dataUrl ="https://rethabilemakaotsi.github.io/vue-portfolio-data/data/";


export default createStore({
  state: {
    education: null,
    skills: null,
    projects: null,
    testimonials: null,
    isLoading: false,
  },
  getters: {},
  
  mutations: {
    setEducation(state, value){
      state.education = value;
    },
    setSkills(state, value){
      state.skills = value;
    },
    setProjects(state, value){
      state.projects= value;
    },
    setTestimonials(state, value){
      state.testimonials = value;
    },
    setLoading(state, value){
      state.isLoading = value;
    },
  },
  actions: {
    async fetchData(context, { endpoint, mutation}){
      try {
        context.commit("setLoading", true)

        let res =await fetch('${dataUrl}${endpoint}');
        let data = await res.json();
        context.commit(mutation, data[endpoint]);
      } catch (error) {
        console.error(error);
      } finally {
        context.commit ("setLoading", false);
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl);
        let education = await res.json();
        context.commit("setEducation",education.education);

      }
      catch (error) {
        console.log(error);
      }
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataUrl);
        let skills = await res.json();
        context.commit("setSkills",skills.skills);

      }
      catch (error) {
        console.log(error);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let projects = await res.json();
        console.log(projects);
        context.commit("setProjects",projects.projects);

      }
      catch (error) {
        console.log(error);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl);
        let testimonials= await res.json();
        context.commit("setTestimonials",testimonials.testimonials);

      }
      catch (error) {
        console.log(error);
      }
    },
    

  },

  
  modules: {
  }
})
