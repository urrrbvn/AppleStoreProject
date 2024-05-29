<template>
    <header class="tablet-header">
        <div class="tablet-header__control">
            <figure class="tablet-header__logo">
                <img src="../assets/images/AppleLogo.svg">
            </figure>
            <div class="tablet-header__wrapper">
                <SearchElement :window="windowWidth" @toggle="searchStatusChange()"/>
                <div class="tablet-header__phone" v-if="searchToggled === false"> 
                    <a class="tablet-header__phone-content" href="">
                        <svg class="fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1339 10.536L11.7449 9.06C12.1854 8.65563 12.495 8.12885 12.634 7.54727C12.773 6.96569 12.735 6.35584 12.5249 5.796L11.8379 3.9615C11.5813 3.27663 11.0731 2.71538 10.4171 2.39208C9.76103 2.06879 9.0064 2.00779 8.30693 2.2215C5.73293 3.009 3.75443 5.4015 4.36343 8.2425C4.76393 10.1115 5.53043 12.4575 6.98243 14.9535C8.43743 17.4555 10.0994 19.3035 11.5244 20.6025C13.6754 22.56 16.7504 22.071 18.7289 20.226C19.2593 19.7315 19.5811 19.0534 19.6288 18.3298C19.6764 17.6063 19.4463 16.8918 18.9854 16.332L17.7254 14.802C17.3454 14.3393 16.8356 14.0009 16.2617 13.8304C15.6878 13.6598 15.0759 13.6649 14.5049 13.845L12.4229 14.5005C11.8853 13.9456 11.4141 13.33 11.0189 12.666C10.6375 11.9945 10.3403 11.2786 10.1339 10.5345V10.536Z" fill="#B7B7B7"/>
                        </svg>
                        <span v-if="windowWidth > 768">+7 812 561 96 62</span>
                    </a>
                    <a class="tablet-header__phone-link" href="" v-if="BurgerActive === true && windowWidth > 768">Вам перезвонить?</a>
                </div>
                <button class="tablet-header__burger" @click="burgerBtnHandler()" v-if="searchToggled === false">
                    <img src="../assets/images/BurgerOpenIcon.svg" v-if="BurgerActive === false">
                    <img src="../assets/images/BurgerCloseIcon.svg" v-if="BurgerActive === true">
                </button>
            </div>
        </div>
        <div class="tablet-header__menu" v-if="BurgerActive === true && searchToggled === false">
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
                    <SocialMediaLinks/>
                </ul>
            </nav>
        </div>
    </header>
</template>


<script setup>
import SearchElement from '../UI/SearchElement.vue';
import { ref, watch, onMounted, onUnmounted } from "vue";
import SocialMediaLinks from '../UI/SocialMediaLinks.vue';

const BurgerActive = ref(false)

function burgerBtnHandler(){
    BurgerActive.value = !BurgerActive.value
}

watch(BurgerActive, ()=>{
    if(BurgerActive.value === true){

    }
})

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

const searchToggled = ref(false)

function searchStatusChange(){
    searchToggled.value = !searchToggled.value
    if(BurgerActive.value === true){
        BurgerActive.value = false
    }
    console.log(searchToggled.value);
    console.log(BurgerActive.value);
}


</script>

<style>
</style>