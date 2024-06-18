<template>
    <button class="category">
        <component :is="icon" :icon="props.icon"></component>
        <span class="category__title">{{ title }}</span>
    </button>
</template>

<script setup>
import { defineProps, onMounted, shallowRef } from 'vue';
import CategoryIcon from '@/Icons/category-icon.vue';

const props = defineProps({
    title: String,
    icon: String
})

const icon = shallowRef(CategoryIcon)

</script>
