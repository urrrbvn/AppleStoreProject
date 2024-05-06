<template>
    <div class="input">
        <img class="input__icon" src="../assets/images/searchIcon.svg" width="24px" height="24px">
        <input class="input__item" type="text" placeholder="Поиск по каталогу товаров">
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import '../styles/mixins.scss';

.input{
    @include flexRow();
    @include dynamic-calc-local(width, 1320 ,594);
    padding: 16px 24px;
    border: 1px solid #B7B7B7;
    border-radius: 8px;
    gap: 8px;
    .input__item{
        width: 100%;
        border: none;
        font-size: 20px;
        font-weight: 400;
        outline: none;
    }
}
</style>