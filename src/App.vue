<template>
  <HeaderComponent v-if="windowWidth > 1200"/>
  <MobileHeaderComponent v-if="windowWidth < 1200" />
  <RouterView></RouterView>
  <MobileMenuComponent v-if="windowWidth < 1200"/>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue';
import MobileHeaderComponent from './components/MobileHeaderComponent.vue'
import MobileMenuComponent from './components/MobileMenuComponent.vue';



const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

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