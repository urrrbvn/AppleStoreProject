<template>
    <div class="main-page">
        <sliderComponent/>
        <article class="titleBlock">
            <h1 class="titleBlock__text">Купить iPhone в Москве</h1>
        </article>
        <CatalogComponent :status="'popular'" />
        <CatalogComponent :status="'new'" />
        <AdvantagesComponent/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import sliderComponent from '../components/SliderComponent.vue';
import CatalogComponent from '@/components/CatalogComponent.vue';
import AdvantagesComponent from '@/components/AdvantagesComponent.vue';
import { useCatalogStore } from '@/stores/catalog';
import BannerComponent from '@/components/BannerComponent.vue'

const catalog = useCatalogStore()

onMounted(()=>{
    catalog.getProducts()
    console.log(catalog.allProducts)
    console.log(catalog.getMostPopular);
})


</script>

<style lang="scss" scoped>
@import '../styles/mainPage.scss';
</style>