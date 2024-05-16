<template>
    <header class="header">
        <figure class="header__logo">
            <img class="header__logo-image" src="../assets/images/AppleLogo.svg" width="40px" height="40px">
        </figure>
        <!-- <button @click="()=>console.log(windowWidth)">TEST</button> -->
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item"><a class="header__nav-link" href="">Весь каталог</a></li>
                <li class="header__nav-item special">
                    <img class="header__nav-icon" src="../assets/images/fireIcon.svg" alt="">
                    <a class="header__nav-link" href="">Акции</a>
                </li>
                <li class="header__nav-item"><a class="header__nav-link" href="">Гарантия</a></li>
                <li class="header__nav-item"><a class="header__nav-link" href="">Политика возврата</a></li>
                <li class="header__nav-item"><a class="header__nav-link" href="">Кредит</a></li>
                <li class="header__nav-item"><a class="header__nav-link" href="">Доставка и оплата</a></li>
                <li class="header__nav-item"><a class="header__nav-link" href="">Отзывы</a></li>
                <li class="header__nav-item"><a class="header__nav-link" href="">Контакты</a></li>
            </ul>
        </nav>
        <div class="header__phone"> 
            <a class="header__phone-content" href="">
                <img src="../assets/images/PhoneIcon.svg" width="24px" height="24px">
                <span>+7 812 561 96 62</span>
            </a>
            <a class="header__phone-link" href="">
                Вам перезвонить?
            </a>
        </div>
    </header>
    <main class="control">
        <div class="control__buttons">
            <CatalogButton/>
            <SearchElement/>
            <IconButton :icon="'likeIcon'" :size="48"/>
            <IconButton :icon="'compareIcon'" :size="48"/>
            <AddToCartButton/>  
        </div>
        <div class="control__categories">
            <CategoryButton v-for="category in categories"
                            :title="category.title"
                            :icon="category.icon"
            />
            <SpecialButton/>
        </div>
    </main>
</template>

<script setup>
import CatalogButton from '../UI/CatalogButton.vue'
import SearchElement from '../UI/SearchElement.vue'
import IconButton from '../UI/IconButton.vue'
import CategoryButton from '@/UI/CategoryButton.vue';
import SpecialButton from '@/UI/SpecialButton.vue';
import { ref } from 'vue';
import AddToCartButton from '@/UI/AddToCartButton.vue';


const categories = ref([
    {title: 'iPhone', icon:`iPhoneIcon`},
    {title: 'iPad', icon:`iPadIcon`},
    {title: 'Macbook и iMac', icon:`macBookIcon`},
    {title: 'Watch', icon:`watchIcon`},
    {title: 'Гаджеты', icon:`gadgetsIcon`},
    {title: 'Аксессуары', icon:`accessoiresIcon`},
])

</script>

