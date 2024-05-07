<template>
    <div class="card">
        <div class="card__functional">
            <StarsComponent :rating="product.rating"/>
            <span>({{ product.reviews }})</span>
            <IconButton :icon="'likeIcon'" :size="24"/>
            <IconButton :icon="'compareIcon'" :size="24"/>
        </div>
        <div class="card__main">
            <article class="card__main-title">
                <h2>{{ product.title }}</h2>
            </article>
            <figure>
                <img :src="`/src/assets/images/${product.image}.png`" width="266px" height="288px">
            </figure>
        </div>
        <div class="card__info">
            <div class="card__info-availible">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#52D116"/>
                </svg>
                <p v-if="product.availible === true">Есть в наличии</p>
                <p v-else>Ожидается поступление</p>
            </div>
            <p class="card__info-varranty" v-if="product.availible === true">Гарантия 1 год</p>
        </div>
        <div class="card__price" v-if="product.availible === true">
            <p class="card__price-old" v-if="product.discountPrice">{{ product.price }}₽</p>
            <p class="card__price-actual">{{ product.discountPrice ? product.discountPrice : product.price }}₽</p>
        </div>
        <CartButton></CartButton>
        <div class="card__additional" v-if="product.availible === true">
            <a href="#">Хочу дешевле</a>
            <p>купить в 1 клик</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import StarsComponent from '@/UI/StarsComponent.vue';
import IconButton from '@/UI/IconButton.vue';
import CartButton from '@/UI/CartButton.vue';

const props = defineProps({
    product:Object
})

</script>

<style lang="scss">
@import '../styles/mixins.scss';
@import '../styles/variables.scss';
.card{
    @include flexCol();
    align-items: center;
    box-shadow: 0px 4px 8px 0px #0000000D;
    border-radius: 16px;
    padding: 18px 8px 24px 8px;

    .card__functional{
        @include flexRow();
        align-items: center;
        gap: 8px;
        padding: 0 8px;
        span{
            margin-right: 29px;
        }
        margin-bottom: 16px;
    }
    .card__main{
        @include flexCol();
        gap: 8px;
        margin-bottom: 16px;
        figure{
            display: flex;
            justify-content: center;
        }
        article{
            h2{
                font-size: 24px;
                font-weight: 500;
                text-align: center;
            }
        }
    }
    .card__info{
        @include flexRow();
        font-size: 16px;
        gap: 14px;
        align-items: center;
        margin-bottom: 4px;


        .card__info-availible{
            @include flexRow();
            gap: 5px;
            align-items: center;
        }
    }
    .card__price{
        @include flexRow();
        gap: 16px;
        align-items: center;
        margin-bottom: 16px;

        .card__price-actual{
            font-size: 32px;
            font-weight: 500;
        }
        .card__price-old{
            font-size: 20px;
            font-weight: 400;
            text-decoration: line-through;
        }
    }
    .card__additional{
        @include flexRow();
        width: 100%;
        justify-content: space-between;
        margin-top: 8px;
        a{
            text-decoration: none;
            color: $prime;
        }
    }
}
</style>