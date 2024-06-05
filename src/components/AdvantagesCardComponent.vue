<template>
    <div class="advantages-card" :class="modificator">
        <div class="advantages-card__main">
            <figure class="advantages-card__img">
                <img :src="`/src/assets/images/${img}.svg`">
                <h2>{{ title }}</h2>
            </figure>
            <article class="advantages-card__description">
                <h4>{{ content }}</h4>
            </article>
        </div>
        <CasualButton :theme="'clearWhite'" title="подробнее"/>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import CasualButton from '@/UI/CasualButton.vue';

    const props = defineProps({
        img: String,
        title: String,
        content: String,
        modificator: String
    })
</script>