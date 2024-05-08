<template>
    <button class="button" @click="btnHandler()" :style="backgroundStyles">
        <img class="button__icon" :src="`/src/assets/images/catalogIcon.svg`">
        <span class="button__title">Каталог товаров</span>
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
    background-color: $prime;

    font-size: 20px;
    line-height: 23.87px;
}

</style>