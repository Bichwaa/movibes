<template>
    <div class="banner">
        <va-image 
            :ratio="ratio"
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
 import { ref, watch, onMounted} from 'vue';
 import { storeToRefs } from 'pinia'
 import { useConfigStore } from '../stores/tmdbConfig';

 const props = defineProps({
    ratio:{
        type:Number,
        default:2.3
    },
})

const store = useConfigStore()
const { currentMovie } = storeToRefs(store)

 const picUrl = ref("http://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg")


 const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}

watch(currentMovie,(a,b) =>{
    // console.log("we doing something in the movie banner component")
    picUrl.value = store
    .buildBackdropImageUrl(a.backdrop_path)
})



onMounted(()=>{
    if(store.currentMovie.backdrop_path){
        picUrl.value = store.buildBackdropImageUrl(store.currentMovie.backdrop_path)
    }
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
        bottom:3%;
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