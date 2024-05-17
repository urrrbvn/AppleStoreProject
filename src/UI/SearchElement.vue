<template>
    <div class="input">
        <img class="input__icon" src="../assets/images/searchIcon.svg" width="24px" height="24px">
        <input class="input__item" type="text" placeholder="Поиск по каталогу товаров" v-model="searchInput">
        <div class="search-result" v-if="result.length > 0">
            <div class="search-result__block" v-for="product in result" :key="product.id" @click="'/'">
                <img :src="`src/assets/images/${product.image}.png`" width="64px" height="64px">
                <h2>{{ product.title }}</h2>
                <p>{{ product.discountPrice }} ₽</p>
                <a href="/">Подробнее</a>
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


</script>

<style scoped lang="scss">
@import '../styles/mixins.scss';
@import '../styles/variables.scss';

.input{
    @include flexRow();
    @include dynamic-calc-local(width, 1320 ,594);
    padding: 16px 24px;
    border: 1px solid #B7B7B7;
    border-radius: 8px;
    gap: 8px;
    .input__item{
        width: 100%;
        border: none;
        font-size: 20px;
        font-weight: 400;
        outline: none;
    }
}
.search-result{
    position: absolute;
    z-index: 2;
    top: 19%;
    right: 34%;
    @include dynamic-calc-local(width, 1500 ,594);
    height: 480px;
    background-color: white;
    border-radius: 10px;
    overflow-y: scroll;

    .search-result__block{
        display: grid;
        
        height: 96px;

        img{
            
        }

        h2{
            font-size: 20px;
            font-weight: 400;
        }

        p{
            font-size: 24px;
            font-weight: 500;
        }

        a{
            color: $prime;
            text-decoration: none;
        }
    }
}
</style>