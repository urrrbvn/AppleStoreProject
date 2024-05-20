<template>
    <button class="category">
        <component class="category__icon" :is="icon" :icon="props.icon" :paintType="stroke"></component>
        <span class="category__title">{{ title }}</span>
    </button>
</template>

<script setup>
import { defineProps, onMounted, shallowRef } from 'vue';
import CategoryIcon from '@/Icons/category-icon.vue';

onMounted(()=>{
    console.log(props.icon);
})

const props = defineProps({
    title: String,
    icon: String
})

const icon = shallowRef(CategoryIcon)

</script>
