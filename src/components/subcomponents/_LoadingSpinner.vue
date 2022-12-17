<template>
  <div v-if="done" class="panel">
    <CircleProgress
    :percent="percent"
    :transition="0"
    :border-width="5"
    :border-bg-width="5"
    :is-bg-shadow="true"
    :viewport="true"
    fill-color="#3DD2CC"
    :bg-shadow="{
        inset: true,
        vertical: 2,
        horizontal: 2,
        blur: 4,
        opacity: .4,
        color: '#000000'
    }"
    />
    <p class="hint">{{props.hint}}</p>
  </div>

  <div v-else class="panel">
    <img :src="proessingDone" alt="loading done" width="180" height="180">
  </div>
</template>

<script setup>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import proessingDone from "../../assets/done.svg";
import { onMounted, ref } from "vue";

const percent = ref(0);

const props = defineProps(['hint', 'done'])

onMounted(() => {
      setInterval(() => {
        console.log("begin")
        if (percent.value < 99) {
          percent.value +=.5;
        } else {
          percent.value = -100;
          console.log("end")
        }
      }, 60);
    });
</script>

<style scoped>
.panel {
        display: grid;
        place-items: center;
    }

.hint {
  margin-top:1rem;
}
</style>
