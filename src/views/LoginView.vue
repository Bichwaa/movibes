<template>
    <div class="backdrop" v-bind:style="{ 'background-image': 'url('+ imgPath + ')' }">
        <!-- <div class="fake"></div> -->
      <div class="form-container">
          <LoginForm/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import LoginForm from "../components/subcomponents/_LoginForm.vue";
  import { useConfigStore } from '../stores/tmdbConfig'

  const imgPath =  ref("http://image.tmdb.org/t/p/w1280/JvqaHXdKBtEAmm4EDVTGkoAGIj.jpg")
  
  onMounted(()=>{
    const store = useConfigStore();
    imgPath.value = store.imgPath
  })

  
  </script>
  
  <style scoped>
      .backdrop {
          display: flex;
          height: 100vh;
          width:90vw;
          background-image: url("https://um.photos/800?random=1");
          background-size:cover;
      }
  
      .form-container{
          z-index: 1000;
          height: 100vh;
          background-color: #050A10;
          padding: 2rem;
      }
  </style>
  