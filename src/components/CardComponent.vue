<template>
    <div class="card">
        <div class="card__functional">
            <!-- stars n buttons -->
        </div>
        <div class="card__main">
            <article class="card__main-title">
                <h2>{{ title }}</h2>
            </article>
            <figure>
                <img :src="`/src/assets/images/${img}.png`">
            </figure>
        </div>
        |<div class="card__info">
            <div class="card_info-availible">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#52D116"/>
                </svg>
            </div>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    img: String
})

</script>

<style lang="scss" scoped>

</style>