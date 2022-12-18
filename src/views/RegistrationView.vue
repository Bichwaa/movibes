<template>
  <div class="backdrop" v-bind:style="{ 'background-image': 'url('+ imgPath + ')' }">
    <div class="form-container">
        <RegistrationForm/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import RegistrationForm from "../components/subcomponents/_RegistrationForm.vue"
import {useHttpGet, buildURL} from "../composables/useHttpGet"
import { useConfigStore } from '../stores/tmdbConfig'

const trending = ref({
  title:"ooooop",
  backdrop_path:"#"
})
const imgPath = ref("#")

const httpGet = useHttpGet({})
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`

const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}

onMounted(async()=>{
  const store = useConfigStore()
  const data = await httpGet(url)
  trending.value = data.data.results[getRandomInt(data.data.results.length-1)] //one movie
  imgPath.value = store.buildBackdropImageUrl(trending.value.backdrop_path)
})


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
        flex-basis: 40%;
    }
</style>
