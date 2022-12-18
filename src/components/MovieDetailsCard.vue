<template>
    <div class="scaffold">
        <div class="info-bar">
            <span class="bold">{{currentMovie.original_title}}</span>
            <span class="bold">.</span>
            <span class="bold">{{currentMovie.release_date}}</span>
            <span class="bold">.</span>
            <span class="bold">{{currentMovie.adult?"Rated-R":"PG-13"}}</span>
        </div>
        <div class="more">
            <div class="summary-wrapper">
                <p class="summary">{{currentMovie.overview}}</p>
                <va-divider/>
                <p>Director: {{}}</p>
                <va-divider/>
                <p>Writers: {{}}</p>
                <va-divider/>
                <p>Stars: {{}}</p>
                <va-divider/>
                <va-button 
                icon="play_arrow"
                color="rgba(61, 210, 204, .7)" 
                text-color="#000000"
                class="mr-4 mb-2 btn"><span class="noblur">Top Rated  Movie #233</span>
                </va-button>
            </div>
            <div class="ads">
                <va-button 
                icon="play_arrow"
                color="rgba(61, 210, 204, 0.8)" 
                text-color="#000000"
                class="mr-4 mb-2 btn"><span class="noblur">See Showtimes</span>
                </va-button>
                <va-button 
                icon="play_arrow"
                color="rgba(18, 18, 18, 0.8)" 
                text-color="#ffffff80"
                class="mr-4 mb-2 btn"><span class="noblur">More Watch Options</span>
                </va-button>
                <MovieCard :movieData="currentMovie"/>
            </div>
        </div>
    </div>
 </template>
 
 
<script setup>
//  import { ref, watch } from "vue";
import { useConfigStore } from '../stores/tmdbConfig'
import { storeToRefs } from 'pinia'

import MovieCard from "../components/MovieCard.vue";

const store = useConfigStore()
const {currentMovie} = storeToRefs(store)

// watch(currentMovie, (a,b)=>{

// })
 </script>
 
 <style scoped>
    
.scaffold{
    display: flex;
    flex-direction: column;
}

.info-bar{
    display: flex;
    justify-content: flex-start;
}
.bold{
    margin-right:1rem;
    font-weight: 600;
}

.more{
    margin:1rem 0;
    display: flex;
    justify-content: space-between;
}

.summary-wrapper{
    flex-basis: 75%;
}

.ads{
    display: flex;
    flex-direction: column;
}
 </style>