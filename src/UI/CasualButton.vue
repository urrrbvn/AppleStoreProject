<template>
    <button class="casualBtn" :style="buttonStyles">
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

const buttonStyles = computed(()=>{
    if(props.theme == 'clearWhite'){
        const backgroundColor = `transparent`
        const width = `${props.width}px`
        const color = '#0071E4'
        const border = `1px solid #0071E4`
        return{backgroundColor,  width, color, border}
    } 
    if(props.theme == 'clearDark'){
        const backgroundColor = 'transparent'
        const width = `${props.width}px`
        const border = `1px solid white`
        return{backgroundColor,  width, border}       
    }
    if(props.theme == 'grey'){
        const backgroundColor = '#E7E7E7'
        const width = `${props.width}px`
        const color = `#585656`
        return{backgroundColor,  width, color}  
    } else{
        const backgroundColor = '#0071E4'
        const width = `${props.width}px`
        return{backgroundColor,  width}       
    }
})
</script>

