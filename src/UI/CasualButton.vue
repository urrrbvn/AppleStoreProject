<template>
    <button :style="{width: `${width}px`}">
        {{ title }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';



const props = defineProps({
    title: String,
    width: Number
})
</script>

<style scoped lang="scss">
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
button{
    @include flexRow();
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 8px;

    color: white;
    background-color: $prime ;
    font-size: 16px;
    
}
</style>