<template>
    <div class="input-block" :class="isActive">
        <button v-if="window < 1200" class="search-button" @click="SearchHandler()">
            <svg class="stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#B7B7B7" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#B7B7B7" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input class="input-block__item" type="text" :placeholder="window > 768 ? 'Поиск по каталогу товаров' : 'введите запрос'" v-model="searchInput">
        <button class="close-button" v-if="isActive === 'toggled' && window < 1200" @click="SearchHandler()">
            <img src="../assets/images/BurgerCloseIcon.svg" alt="">
        </button>
        <div class="toggled-block" v-if="result.length > 0">
            <div class="search-result">
                <div class="search-result__item" v-for="product in result" :key="product.id" @click="'/'">
                    <img :src="`src/assets/images/${product.image}.png`" width="64px" height="64px">
                    <div class="search-result__text">
                        <h2>{{ product.title }}</h2>
                        <p>{{ product.discountPrice }} ₽</p>
                    </div>
                    <a href="/">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCatalogStore } from '@/stores/catalog';
import { ref, watch, reactive } from 'vue';

const catalog = useCatalogStore()
const searchInput = ref('')
const result = reactive([])

watch(searchInput, ()=>{
    result.splice(0, result.length, ...catalog.getSearchProducts(searchInput.value))
},{deep:true})

const props = defineProps({
    window: Number
})
const emit = defineEmits(['toggle'])

const isActive = ref('unToggled')

const SearchHandler = ()=>{
    if(isActive.value === 'unToggled'){
        isActive.value = 'toggled'
        emit('toggle')
        return
    }
    if(isActive.value === 'toggled'){
        isActive.value = 'unToggled'
        emit('toggle')
        searchInput.value = ''
        return
    }
}
</script>
