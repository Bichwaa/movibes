<template>
  <div class="backdrop" v-bind:style="{ 'background-image': 'url(' + trending.title + ')' }">
    <div class="form-container">
        <RegistrationForm/>

        {{trending.title}}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import RegistrationForm from "../components/subcomponents/_RegistrationForm.vue"
import {useHttpGet} from "../composables/useHttpGet"

const trending = ref()
const path = ref("")

const httpGet = useHttpGet({})
const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c55bc7d3a124e923aa524f9b27699385'

onMounted(()=>{
  httpGet(url).then(res=>{
    console.log(res.data.results)
    trending.value = res.data.results[0]
    console.log(trending.value)
  })
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
    }
</style>
