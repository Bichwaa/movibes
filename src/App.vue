<script setup>
import { watchEffect, ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useColors } from 'vuestic-ui';
import { useConfigStore } from './stores/tmdbConfig'

const { presets, applyPreset, colors } = useColors()
const theme = ref('dark')

watchEffect(() => {applyPreset(theme.value)})

onMounted(()=>{
  const {getConfig} = useConfigStore()
  getConfig()
})
</script>

<template>

  <RouterView />
</template>

<style scoped>
</style>
