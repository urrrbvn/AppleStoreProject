<template>
  <HeaderComponent></HeaderComponent>
  <RouterView></RouterView>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';

</script>

<style lang="scss">
@import './styles/main.scss';
@font-face {
    font-family: 'SF-Pro';
    src: url(./assets/fonts/SF-Pro-Display-Regular.otf);
}
body{
    font-family: 'SF-Pro';
}
button{
  font-family: 'SF-Pro';
}
</style>