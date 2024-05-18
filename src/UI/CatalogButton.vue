<template>
    <button class="catalog-button" @click="btnHandler()" :style="backgroundStyles">
        <img class="catalog-button__icon" :src="`/src/assets/images/catalogIcon.svg`">
        <span class="catalog-button__title">Каталог товаров</span>
    </button>
    <article class="catalog-button__title">  
        <p v-if="catalogBtnClicked">Категории</p>
    </article>
</template>

<script setup>
import { computed, ref } from 'vue';

const catalogBtnClicked = ref(false)

const backgroundStyles = computed(()=>{
    return{
        backgroundColor: catalogBtnClicked.value ? '#9747FF' : ''
    }
})

function btnHandler(){
    console.log('123')
    catalogBtnClicked.value = !catalogBtnClicked.value;
    // далее будут добавлены функции связанные с логикой бэкэнда
}
</script>
