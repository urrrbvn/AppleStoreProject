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
                <div class="form-input">
                    <input type="tel" value="+7">
                    <CasualButton theme="grey" title="подписаться"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CasualButton from '@/UI/CasualButton.vue';
</script>