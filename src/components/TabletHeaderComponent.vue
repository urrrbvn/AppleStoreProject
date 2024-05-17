<<<<<<< Updated upstream
<template>
=======
git <template>
>>>>>>> Stashed changes
    <header class="tablet-header">
        <div class="tablet-header__control">
            <figure class="tablet-header__logo">
                <img src="../assets/images/AppleLogo.svg">
            </figure>
            <SearchElement/>
            <div class="tablet-header__phone"> 
                <a class="tablet-header__phone-content" href="">
                    <img src="../assets/images/PhoneIcon.svg" width="24px" height="24px">
                    <span>+7 812 561 96 62</span>
                </a>
                <a class="tablet-header__phone-link" href="" v-if="BurgerActive === true">Вам перезвонить?</a>
            </div>
            <button class="tablet-header__burger" @click="burgerBtnHandler()">
                <img src="../assets/images/BurgerOpenIcon.svg" v-if="BurgerActive === false">
                <img src="../assets/images/BurgerCloseIcon.svg" v-if="BurgerActive === true">
            </button>
        </div>
        <div class="tablet-header__menu" v-if="BurgerActive === true">
            <nav class="tablet-header__nav">
                <ul class="tablet-header__nav-list">
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
                    <SocialMediaIcons/>
                </ul>
            </nav>
        </div>
    </header>
</template>


<script setup>
import SearchElement from '../UI/SearchElement.vue';
import { ref, watch } from "vue";
import SocialMediaIcons from '../UI/SocialMediaIcons.vue';

const BurgerActive = ref(false)

function burgerBtnHandler(){
    BurgerActive.value = !BurgerActive.value
}

watch(BurgerActive, ()=>{
    if(BurgerActive.value === true){

    }
})


</script>

<style>
</style>