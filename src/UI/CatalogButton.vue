<template>
    <button class="catalog-button" @click="btnHandler()" :style="backgroundStyles">
        <img v-if="windowWidth > 1200" class="catalog-button__icon" src="/src/assets/images/catalogIcon.svg">
        <img v-if="windowWidth < 1200" src="/src/assets/images/catalog-mobileIcon.svg" alt="">
        <span v-if="windowWidth > 1200"class="catalog-button__title">Каталог товаров</span>
        <span v-if="windowWidth < 1200"class="catalog-button__title">Каталог</span>
    </button>
    <!-- <article class="catalog-button__title">  
        <p v-if="catalogBtnClicked">Категории</p>
    </article> -->
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

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
const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>
