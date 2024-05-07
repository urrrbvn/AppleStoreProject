<template>
    <button class="cart-button" @click="btnHandler()" :style="backgroundStyles">
        <div class="cart-button__info">
            <figure class="cart-icon__icon">
                <component :is="cartIcon"></component>
            </figure>
            <article class="cart-button__title">  
                <p v-if="!cartBtnClicked">в корзину</p>
                <p v-else>в корзине</p>
            </article>
        </div>
    </button>
</template>

<script setup>
import { computed, ref, shallowRef } from 'vue';
import cartAddIcon from '../Icons/cart-add-Icon.vue';
import cartCheckedIcon from '../Icons/cart-checked-Icon.vue';



const cartBtnClicked = ref(false)

const cartIcon = shallowRef(cartAddIcon)

function switchIcon(){
    cartIcon.value === cartAddIcon ? (cartIcon.value = cartCheckedIcon) : (cartIcon.value = cartAddIcon)
    cartBtnClicked.value = !cartBtnClicked.value
    console.log(cartBtnClicked.value);
}

const backgroundStyles = computed(()=>{
    if(cartBtnClicked.value === true){
        const backgroundColor = '#6FD91C'
        return {backgroundColor}
    }
    
})

function btnHandler(){
    switchIcon()
    // далее будут добавлены функции связанные с логикой бэкэнда
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
    .cart-button{

        padding: 16px 76.5px;
        
        background-color: $prime;
        border-radius: 8px;
        color: white;

        .cart-button__info{
            @include flexRow();
            align-items: center;
            justify-content: center;
            gap: 8px;

            .cart-button__title{
                font-size: 18px;
                font-weight: 500;
            }
        }
    }
</style>