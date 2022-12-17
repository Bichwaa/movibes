<script setup>
import logo from "../assets/logo.svg"
</script>

<template>
    <div class="panel">
        <img class="rotate-center" :src="logo" alt="movibe logo" width="100" height="100">
    </div>
</template>

<style scoped>
    .panel {
        display: grid;
        place-items: center;
        height:100vh;
    }

    @-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }
    @keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }

    .rotate-center {
	-webkit-animation: rotate-center 1.5s linear infinite both;
	        animation: rotate-center 1.5s linear infinite both;
}

</style>
