<template>
    <button class="category">
        <img class="category__icon" :src="`/src/assets/images/${icon}.svg`" width="48px" height="48px">
        <span class="categpry__title">{{ title }}</span>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    icon: String
})

</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.category{
    @include flexRow();
    gap: 8px;
    font-size: 20px;
    font-weight: 400;
    text-wrap: nowrap;
    .category__icon{
        fill: red;
    }
}

</style>