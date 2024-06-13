<template>
    <div class="subscription-offer">
        <img src="../assets/images/phoneLetters.png" class="subscription-offer__image" width="481px" height="371px">
        <div class="subscription-offer__container">
            <article class="subscription-offer__text">
                <h1>Подписка на рассылку акций!</h1>
                <p>Подпишитесь на рассылку, чтобы узнавать о всех акциях первым</p>
            </article>
            <div class="subscription-offer__form">
                <article class="form-text">
                    <h1>Скидка 10%</h1>
                    <p>на первую покупку за подписку</p>
                </article>
                <form class="form-input" @submit.prevent="onSubmit">
                    <TextInputElement :type="'tel'" :name="'phone'" :placeholder="'+7'" :fsize="24" :validation="'phone'"/>
                    <CasualButton theme="grey" title="подписаться"/>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import CasualButton from '@/UI/CasualButton.vue';
import TextInputElement from "@/UI/TextInputElement.vue";
import {useForm} from "vee-validate";

const {handleSubmit, validate} = useForm()

const onSubmit = handleSubmit(async (values) =>{
    const isValid = await validate()
    if(!isValid){
        return
    }
    console.log(values);
    isNumberReceived.value = !isNumberReceived.value
})
</script>