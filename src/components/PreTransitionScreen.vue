<script setup>
import logo from "../assets/logo.svg"
import movibesLogo from "../assets/movibes-logo.svg"
</script>

<template>
    <div class="panel">
        <div class="logos">
            <img class="rotate-center" :src="logo" alt="movibes logo" width="100" height="100"/>
            <img class="rotate-center" :src="movibesLogo" alt="movibes word logo"  height="90" />
        </div>
    </div>
</template>

<style scoped>
    .panel {
        display: grid;
        place-items: center;
        height: 100vh;
        width:90vw;
        max-width:90%;
    }

    .logos{
        display: flex;
        justify-content: center;
    }

</style>
