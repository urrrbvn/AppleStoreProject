<template>
    <div class="input">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#B7B7B7" stroke-width="2" stroke-linecap="round"/>
        </svg>
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
@media (max-width: 1200px){
    svg{
        path{
            stroke: black;
        }
    }
    .input{
        width: 100%;
        border: none;
    }
}
</style>