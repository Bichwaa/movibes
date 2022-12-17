<script setup>
import {ref} from "vue";
import LoadingSpinner from './subcomponents/_LoadingSpinner.vue';


const loading = ref(true)
</script>

<template>
  <div class="field">
    <LoadingSpinner 
    hint="processing..."
    :done="loading"
    />
  </div>
</template>

<style scoped>
    .field {
        display: grid;
        place-items: center;
        height: 100vh;
        width:90vw;
        max-width:90%;
    }

</style>
