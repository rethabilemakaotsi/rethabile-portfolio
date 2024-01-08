<template>
    <div v-for="educationItem in education" :key="educationItem in Id">
        <p> {{ educationItem.schoolName }} - {{ educationItem.year }}</p>
        

        
    </div>
    <div v-for="skillItem in skill" :key="skillItem in Id">
        <P>{{ skillItem.skillName }} - {{ skillItem.image }}</P>
    </div>
</template>
<script>
import axios from 'axios';
export default{

    data(){
        return{
            education: [],
            skills: [],

        };
    },
    mounted() {
        axios.get()
    },
}
</script>
<style>

</style>