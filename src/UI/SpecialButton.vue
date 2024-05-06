<template>
    <button class="specialOffer">
        <img class="specialOffer__image"  src="../assets/images/IphoneNew.png">
        <p class="specialOffer__title">iPhone 14 Pro Max</p>
        <img class="speicalOffer__icon" src="../assets/images/ArrowRight.svg">
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.specialOffer{
    @include flexRow();
    background: linear-gradient(90deg, #000000 22.19%, #5E556B 100%);
    overflow-y: hidden;
    color: white;
    padding: 0 16px 0 5px;
    border-radius: 8px;
    gap: 11px;
    text-wrap: nowrap;
    .specialOffer__title{
        font-size: 20px;
        line-height: 24px;
    }
}
</style>