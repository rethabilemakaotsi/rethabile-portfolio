<template >
    <div v-if="isLoading" class="spinner-container">
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue';
export default {
    component: {
        Spinner,
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;

        },

    }
}
 

</script>
<style scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255 , 255, 0.8);
}
    
</style>