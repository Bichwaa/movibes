<template>
  <div class="backdrop">
    <div class="form-container">
        <RegistrationForm/>
    </div>
  </div>
</template>

<script setup>
import RegistrationForm from "../components/subcomponents/_RegistrationForm.vue"
</script>

<style scoped>
    .backdrop {
        display: flex;
        flex-direction: row-reverse;
        height: 100vh;
        width:90vw;
        background-image: url("https://picsum.photos/800?random=1");
        background-size:cover;
    }

    .form-container{
        z-index: 1000;
        height: 100vh;
        background-color: #050A10;
        padding: 2rem;
    }
</style>
