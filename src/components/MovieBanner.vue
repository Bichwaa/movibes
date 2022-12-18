<template>
    <div class="banner">
        <va-image 
            :ratio="2.3"
            :src="picUrl"
            class="rounder"
             />

        <div class="banner-btns">
            <va-button 
                preset="primary"
                icon="play_arrow"
                color="rgba(232, 232, 232, 1)" 
                text-color="#ffffff80"
                gradient
                class="mr-4 mb-2 btn"><span class="noblur">Play</span></va-button>
            <va-button 
                preset="primary"
                icon="info" 
                color="rgba(232, 232, 232, 1)"
                text-color="#ffffff80"
                gradient
                class="mr-4 mb-2 btn"><span class="noblur">More info</span></va-button>
        </div>
    </div>
 </template>
 
 
 <script setup>
 import { ref, watch, onUpdated} from 'vue';
 import { storeToRefs } from 'pinia'
 import { useConfigStore } from '../stores/tmdbConfig'

const store = useConfigStore()
const { movies } = storeToRefs(store)

 const picUrl = ref("https://picsum.photos/1500/500")


 const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}

watch(movies,(a,b) =>{
    // console.log("we doing something in the movie banner component")
    picUrl.value = store
    .buildBackdropImageUrl(a[getRandomInt(store.movies.length-1)]
    .backdrop_path)
})

onUpdated(()=>{
    picUrl.value = store
    .buildBackdropImageUrl(store.movies[getRandomInt(store.movies.length-1)]
    .backdrop_path)
})
 
 </script>
 
 <style scoped>
    .banner{
        height:300px;
        position: relative;
    }

    .banner-btns{
        position: absolute;
        right:2%;
        bottom:10%;
    }

    .btn{
        filter: sepia(90%);
    }

    .noblur{
        filter: none;
        font-weight: 700;
        color:white
    }

    .rounder{
        border-radius: 40px;
    }
 </style>