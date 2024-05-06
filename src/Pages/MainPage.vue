<template>
    <div class="main-page">
        <sliderComponent/>
        <article class="titleBlock">
            <h1 class="titleBlock__text">Купить Iphone в Москве</h1>
        </article>
        <CatalogComponent :status="'popular'" />
        <CatalogComponent :status="'new'" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import sliderComponent from '../components/SliderComponent.vue';
import CatalogComponent from '@/components/CatalogComponent.vue';
import { useCatalogStore } from '@/stores/catalog';

const catalog = useCatalogStore()

onMounted(()=>{
    catalog.getProducts()
    console.log(catalog.allProducts)
    console.log(catalog.getMostPopular);
})


</script>

<style lang="scss" scoped>

</style>