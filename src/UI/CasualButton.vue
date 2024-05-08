<template>
    <button :style="{width: `${width}px`}, themeColor">
        {{ title }}
    </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    title: String,
    width: Number,
    theme: String,
})

const themeColor = computed(()=>{
    if(theme == 'white'){
        const backgroundColor = `white`
    } else if(theme == 'blue'){
        const backgroundColor = '$prime'
    }
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