<template>
  <div class="backdrop" v-bind:style="{ 'background-image': 'url('+ imgPath + ')' }">
    <div class="form-container">
        <RegistrationForm/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import RegistrationForm from "../components/subcomponents/_RegistrationForm.vue"
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../stores/tmdbConfig'

const store = useConfigStore()
const { movies } = storeToRefs(store)

const trending = ref({
  title:"ooooop",
  backdrop_path:"#"
})

const imgPath = ref("#")

const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}

watch(movies,(a,b) =>{
  console.log("movies------->",store.movies)
  trending.value = a[getRandomInt(store.movies.length-1)]
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
