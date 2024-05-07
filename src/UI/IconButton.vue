<template>
    <button @click="test()">
        <img :src="`/src/assets/images/${icon}.svg`" :width="`${size}px`" :height="`${size}px`">
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: String,
    size: Number
})

function test(){
    console.log('CLICK!');
}
</script>

<style>
button{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>