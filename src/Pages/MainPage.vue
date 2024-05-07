<template>
    <div class="main-page">
        <sliderComponent/>
        <article class="titleBlock">
            <h1 class="titleBlock__text">Купить Iphone в Москве</h1>
        </article>
        <CatalogComponent :status="'popular'" />
        <div class="product-features">
            <h1 class="product-features__title">Новые модели Айфонов по выгодным ценам</h1>
            <ul class="product-features__list">
                <div class="item-extra-info">Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru предлагает:</div>
                <li class="product-features__item">Низкие цены на все виды устройств, недорогие аксессуары;</li>
                <li class="product-features__item">Оригинальные подарки бренда;</li>
                <li class="product-features__item">Новая линейка смартфонов и проверенные старые модели;</li>
                <li class="product-features__item">Лаконичный дизайн, большой выбор цветов и оттенков;</li>
                <li class="product-features__item">Все товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку;</li>
                <li class="product-features__item">Быстрая доставка по Санкт-Петербургу и области;</li>
                <li class="product-features__item">Гарантия на все модели телефонов;</li>
                <li class="product-features__item">Все способы оплаты!</li>
                <li class="product-features__item">
                    Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. 
                    Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, 
                    позвонить в магазин и получить консультацию по любой модели Apple. 
                </li>
            </ul>
        </div>
        <BannerComponent/>
        <CatalogComponent :status="'new'"/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import sliderComponent from '../components/SliderComponent.vue';
import CatalogComponent from '@/components/CatalogComponent.vue';
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