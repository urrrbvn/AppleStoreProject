<template>
    <div class="advantages">
        <h1 class="advantages__text">Наши преимущества</h1>
        <div class="advantages__cards">
            <AdvantagesCardComponent v-for="(advantage, ind) in advantagesList"
                :key="ind"
                :img="advantage.img"
                :title="advantage.title"
                :content="advantage.content"
                :modificator="`advantages-card_${advantage.img}`"/>
        </div>
    </div>
</template>

<script setup>

import AdvantagesCardComponent from './AdvantagesCardComponent.vue';

const advantagesList = [
    { 
        img: 'discount',
        title: 'Акции и подарки',
        content: 'Постоянные акции, бонусы и скидки. Покупайте технику Apple по самым выгодным ценам'
    },
    { 
        img: 'delivery',
        title: 'Доставим за 3 часа',
        content: 'Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. Также доступна быстрая доставка по всей России или самовывоз'
    },
    { 
        img: 'cardWallet',
        title: 'Удобные способы оплаты',
        content: 'Наличными или картой при получении, оплата на сайте или в кредит'
    },
    { 
        img: 'buildingWithColumns',
        title: 'Покупка в кредит',
        content: 'Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны'
    },
    { 
        img: 'approval',
        title: 'Гарантия',
        content: 'Все товары, представленные в нашем сайте, имеют гарантию от нашего магазина или компании Apple'
    }
]

</script>