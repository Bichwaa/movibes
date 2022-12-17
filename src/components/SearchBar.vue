<template>
   <input type="text" placeholder="Search movies/shows..." />
</template>


<script setup>
import { ref } from "vue";

</script>

<style scoped>
input {
  display: block;
  width: 100%;
  background: #212121;
  border: none;
  border-radius: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

input::placeholder{
    color:#666666;
}
</style>