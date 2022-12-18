<script setup>
import { watchEffect, ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useColors } from 'vuestic-ui';
import {useHttpGet} from "./composables/useHttpGet"
import { useConfigStore } from './stores/tmdbConfig'

const { presets, applyPreset, colors } = useColors()
const theme = ref('dark')

const httpGet = useHttpGet({})
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`

watchEffect(() => {applyPreset(theme.value)})

onMounted(async ()=>{
  const store = useConfigStore()
  await store.getConfig()
  await store.getMovies()
  
  // await store.buildBackdropImageUrl()
})
</script>

<template>

  <RouterView />
</template>

<style scoped>
</style>
