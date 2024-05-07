<template>
    <div class="banner">
        <figure>
            <img src="../assets/images/IphoneNewBig.png">
        </figure>
        <div class="banner__content">
            <h1 class="banner__content-title">iPhone 14 Pro Max</h1>
            <p class="banner__content-text">по лучшей цене в Москве</p>
            <CasualButton title="Подробнее" width="160"/>
        </div>
    </div>
</template>

<script setup>
    import CasualButton from '@/UI/CasualButton.vue';
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.banner{
    background-color: black;
    display: flex;
    align-items: center;
    padding-left: 120px;
    gap: 88px;
    overflow-y: hidden;

    .banner__content{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        .banner__content-title{
            font-size: 56px;
            letter-spacing: 2px;
        }
        .banner__content-text{
            font-size: 24px;
            letter-spacing: 0.4px;
        }
    }
}   
</style>