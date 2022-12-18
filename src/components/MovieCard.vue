<template>
    <div class="scaffold">
        <span class="star-rating">
            <va-icon name="star"  size="17px"/>
            <span class="rating">{{movieData.vote_average ||7.3}}</span>
        </span>
    </div>
 </template>
 
 
 <script setup>
 import { ref } from "vue";

 const props = defineProps(['movieData'])
 const m = ref("d")
 </script>
 
 <style scoped>
    .scaffold{
        border-radius:15px;
        height:200px;
        /* width:100px;   */
        margin:1rem .5rem;
        background-color: rgba(75, 37, 78, 0.24);  
        position: relative;
    }

    .star-rating{
        background-color: rgba(240, 255, 255, 0.433);
        display: inline-flex;
        align-items: center;
        position: absolute;
        top:0;
        right:0;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        padding:3px 10px;
    }

    .rating{
        font-weight: 500;
        font-size:.9rem;
    }

 </style>