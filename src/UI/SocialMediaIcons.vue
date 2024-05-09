<template>
    <figure class="social-media-icons">
        <button class="social-media-icons__button" @click="test()">
            <img class="social-media-icons__img" src="/src/assets/images/whatsappIcon.svg" width="32px" height="32px">
        </button>
        <button class="social-media-icons__button" @click="test()">
            <img class="social-media-icons__img" src="/src/assets/images/telegramIcon.svg" width="32px" height="32px">
        </button>
        <button class="social-media-icons__button" @click="test()">
            <img class="social-media-icons__img" src="/src/assets/images/vkontakteIcon.svg" width="32px" height="32px">
        </button>
    </figure>
</template>

<script setup>
function test(){
    console.log('CLICK!');
}
</script>

<style lang="scss">
.social-media-icons{
    display: flex;
    width: 108px;
    gap: 8px;
}

.social-media-icons__button{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>