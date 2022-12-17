<template>
    <va-card>
        <va-card-content>
            <div v-for="item in items">
            <div class="line-item" >
                <span class="name">{{item.title}}</span>
                <va-checkbox v-model="item.checked"/>
            </div>
            <va-divider />
            </div>
            <p class="see">see more</p>
        </va-card-content>
    </va-card>
</template>

<script setup>
const props = defineProps(['items'])
</script>

<style>
.line-item{
    display: flex;
    justify-content: space-between;
}
.see{
    text-align: center;
    cursor: pointer;
    }
</style>