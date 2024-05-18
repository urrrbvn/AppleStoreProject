<template>
    <figure class="social-block">
        <button class="mediaBtn" @click="test()">
            <img src="/src/assets/images/whatsappIcon.svg" width="32px" height="32px">
        </button>
        <button class="mediaBtn" @click="test()">
            <img src="/src/assets/images/telegramIcon.svg" width="32px" height="32px">
        </button>
        <button class="mediaBtn" @click="test()">
            <img src="/src/assets/images/vkontakteIcon.svg" width="32px" height="32px">
        </button>
    </figure>
</template>

<script setup>
function test(){
    console.log('CLICK!');
}
</script>