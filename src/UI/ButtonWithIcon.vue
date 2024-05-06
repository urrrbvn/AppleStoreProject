<template>
    <button class="button" :style="{ backgroundColor: color }">
        <img class="button__icon" :src="`/src/assets/images/${icon}.svg`">
        <span class="button__title">{{ title }}</span>
        <p class="button__special" v-if="special">{{ special }}</p>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props= defineProps({
    title: String,
    icon: String,
    color: String,
    special: Number
})
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.button{
    @include flexRow();
    padding: 12px 16px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: white;
    border: none;

    font-size: 20px;
    line-height: 23.87px;
}
.button__special{
    padding: 4px 12px 4px 12px;
    border-radius: 32px;
    box-shadow: 0px 4px 4px 0px #00000040 inset;

}

</style>