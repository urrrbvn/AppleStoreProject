<template>
    <div class="card">
        <div class="card__functional">
            <StarsComponent :rating="product.rating"/>
            <span>({{ product.count_review }})</span>
            <IconButton :icon="'likeIcon'" :size="24"/>
        </div>
        <div class="card__main">
            <article class="card__main-title">
                <h2>{{ productTitle() }}</h2>
            </article>
            <figure>
                <img :src="`http://localhost:1452/${product.images[0]}`" width="266px" height="288px">
            </figure>
        </div>
        <div class="card__info">
            <div class="card__info-availible">
                <svg v-if="product.is_available === true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#52D116"/>
                </svg>
                <svg v-if="product.is_available === false" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#0071E4"/>
                </svg>
                <p v-if="product.is_available === true">Есть в наличии</p>
                <p v-if="product.is_available === false">Ожидается поступление</p>
            </div>
            <p class="card__info-varranty" v-if="product.is_available === true">{{ `гарантия ${product.guarantee} год` }}</p>
        </div>
        <div class="card__price" v-if="product.is_available === true">
            <p class="card__price-old" v-if="product.discount_price">{{ product.price }}₽</p>
            <p class="card__price-actual" v-if="windowWidth > 1200">{{ product.discount_price ? product.discount_price : product.price }}₽</p>
            <AddToCartButton v-if="windowWidth < 1200"/>
        </div>
        <div class="card__not-availible-message" v-if="product.is_available === false">
            <p>
                Мы можем сообщить вам, когда товар появится в наличии
            </p>
        </div>
        <AddToCartButton v-if="product.is_available === true && windowWidth > 1200" :product="props.product"/>
        <CasualButton v-if="product.is_available === false && windowWidth > 1200" 
                                                        :title="'сообщить о поступлении'"
                                                        :theme="'clearWhite'"
                                                        :width="`266`"
        />
        <a href="#" class="card__notify-recepit" v-if="product.is_available === false && windowWidth < 1200">Сообщить о поступлении</a>
        <div class="card__additional" v-if="product.is_available === true">
            <a @click="modalStates.ModalToggle(`foundCheaper${product.id}`)">Хочу дешевле</a>
            <p>купить в 1 клик</p>
        </div>
    </div>
    <Teleport to="body">
        <ModalWindowComponent v-if="modalStates.ModalStatus === `foundCheaper${product.id}`">
            <FoundCheaperModal/>
        </ModalWindowComponent>
    </Teleport>
</template>

<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';
import StarsComponent from '@/UI/StarsComponent.vue';
import IconButton from '@/UI/IconButton.vue';
import AddToCartButton from '@/UI/AddToCartButton.vue';
import CasualButton from '@/UI/CasualButton.vue';
import { useCartStore } from '@/stores/Cart';
import ModalWindowComponent from "@/components/ModalWindowComponent.vue";
import {useModalStatesStore} from "@/stores/modalStates.js";
import FoundCheaperModal from "@/modals/FoundCheaperModal.vue";

const props = defineProps({
    product:Object
})

const modalStates = useModalStatesStore()

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  productTitle()
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

const productTitle = () =>{
    let product = props.product
    let titleType = product.category

    if(titleType !== 'Аксессуары' && titleType !== 'Гаджеты'){
        let special = product.characteristics.find(elem => elem.characteristic === 'Объем встроенной памяти')
        // let title = ''
        let title = `${product.brand} ${product.name} ${special.value} ${special.unit_type} ${product.color}`
        // console.log(е);
        return title
    }
    else{
        let title = `${product.name} ${product.color}`
        return title
    }
}

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

    button{
        font-size: 18px;
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
    .card__not-availible-message{
        p{
            font-size: 14px;
            text-align: left;
            color: $smallText_5;
            margin: 5px 0px 16px 30px;
        }
    }
.card__price{
        @include flexRow();
        gap: 16px;
        padding-left: 8px;
        align-items: center;
        margin-bottom: 16px;
        justify-content: space-between;
        width: 100%;

        .card__price-actual{
            font-size: 32px;
            font-weight: 500;
        }
        .card__price-old{
            font-size: 20px;
            font-weight: 400;
            text-decoration: line-through;
            color: $smallText_5
        }
    }
.card__info{
        @include flexRow();
        font-size: 16px;
        gap: 14px;
        align-items: center;
        margin-bottom: 4px;
        width: 100%;
        padding: 0 8px;


        .card__info-availible{
            @include flexRow();
            gap: 5px;
            align-items: center;
            color: $smallText_6;
        }
    }
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
    }
    .card__main-title{
        h2{
            font-size: 24px;
            font-weight: 500;
            text-align: center;
        }
    }
@media (max-width: 1200px) {
    .card__price{
        margin-bottom: 4px;
    }
    .card__main{
        flex-direction: column-reverse;
    }
    .card__main-title{
        h2{
            font-size: 18px;
            font-weight: 700;
        }
    }
    .card__info{
        justify-content: center;
    }
    .card__not-availible-message{
        p{
            text-align: center;
            margin-left: 0;
            margin-bottom: 8px;
            padding: 0 15px;

        }
    }
    .card__notify-recepit{
        text-decoration: none;
        color: $prime;
        font-size: 18px;
        font-weight: 500;

    }
}
.card__info-varranty{
    text-wrap: nowrap;
}
.card__info-availible{
    text-wrap: nowrap;
}

</style>