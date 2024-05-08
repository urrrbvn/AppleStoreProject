<template>
    <div class="advantages">
        <h1 class="advantages__text">Наши преимущества</h1>
        <div class="advantages__cards">
            <AdvantagesCardComponent v-for="(advantage, ind) in advantagesList" 
                :key="ind"
                :img="advantage.img"
                :title="advantage.title"
                :content="advantage.content"
                :style="advantage.style"/>
        </div>
    </div>
</template>

<script setup>

import AdvantagesCardComponent from './AdvantagesCardComponent.vue';

const advantagesList = [
    { 
        img: 'discount',
        title: 'Акции и подарки',
        content: 'Постоянные акции, бонусы и скидки. Покупайте технику Apple по самым выгодным ценам',
        style: 'background: linear-gradient(180.04deg, #FE94A6 0.04%, #F2F2F2 65.84%);'
    },
    { 
        img: 'delivery',
        title: 'Доставим за 3 часа',
        content: 'Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. Также доступна быстрая доставка по всей России или самовывоз',
        style: 'background: linear-gradient(180.04deg, #E685FF 0.04%, #F2F2F2 65.84%);'
    },
    { 
        img: 'card wallet',
        title: 'Удобные способы оплаты',
        content: 'Наличными или картой при получении, оплата на сайте или в кредит',
        style: 'background: linear-gradient(180.04deg, #7DE9FF 0.04%, #F2F2F2 65.84%);'
    },
    { 
        img: 'building with columns',
        title: 'Покупка в кредит',
        content: 'Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны',
        style: 'background: linear-gradient(180.04deg, #FFE685 0.04%, #F7F7F7 65.84%);'
    },
    { 
        img: 'approval',
        title: 'Гарантия',
        content: 'Все товары, представленные в нашем сайте, имеют гарантию от нашего магазина или компании Apple',
        style: 'background: linear-gradient(180.04deg, #ADFFC1 0.04%, #F2F2F2 65.84%), #F2F2F2;'
    }
]

</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';
    @import '../styles/variables.scss';
</style>