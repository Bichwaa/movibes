<script setup>
import { watchEffect, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useColors } from 'vuestic-ui';

const { presets, applyPreset, colors } = useColors()
const theme = ref('dark')

watchEffect(() => {applyPreset(theme.value)})
</script>

<template>

  <RouterView />
</template>

<style scoped>
</style>
