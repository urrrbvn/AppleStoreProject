<template>
    <div class="notify-receipt">
        <figure class="notify-receipt__img">
            <img :src="`http://localhost:1452/${productImg}`" alt="Product Image">
        </figure>
        <div class="notify-receipt__functional">
            <article class="notify-receipt__text">
                <p class="notify-receipt__title">Сообщить о поступлении</p>
                <h1 class="notify-receipt__name">{{ productTitle }}</h1>
            </article>
            <form class="notify-receipt__form" @submit.prevent="onSubmit">
                <TextInputElement :placeholder="'+7'" :fsize="24" :name="'phone'" :type="'tel'" :validation="'phone'"/>
                <CasualButton :width="246" :title="'сообщить о поступлении'"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import TextInputElement from '@/UI/TextInputElement.vue';
import CasualButton from '@/UI/CasualButton.vue';
import {useForm} from "vee-validate";
import {useModalStatesStore} from "@/stores/modalStates.js";

const props = defineProps({
    productTitle: String,
    productImg: String
})

const {handleSubmit, validate} = useForm()

const modal = useModalStatesStore()

const onSubmit = handleSubmit(async (values) =>{
    const isValid = await validate()
    if(!isValid){
        return
    }

    const formData = {
        ...values,
        productTitle: props.productTitle
    };
    console.log(formData);
    modal.ModalToggle('')
})
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";


.notify-receipt {
    @include flexRow();
    padding: 32px 16px 32px 16px;
    gap: 24px;

}
.notify-receipt__img {
    width: 150px;
    height: 162px;


    img{
        width: 100%;
        height: 100%;
    }
}
.notify-receipt__functional{
    @include flexCol();
    gap: 24px;
}
.notify-receipt__text{
    @include flexCol();
    gap: 8px;
}
.notify-receipt__title{
    color: $smallText_7;
}
.notify-receipt__name{
    font-size: 28px;
}
.notify-receipt__form{
    @include flexCol();
    gap: 8px;
    max-width: 249px;

    .custom-input__item{
        color: $smallText_5;
    }
}
</style>
