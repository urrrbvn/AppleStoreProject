<template>
    <figure class="social-media-icons">
        <button @click="test()">
            <img src="/src/assets/images/whatsappIcon.svg" width="32px" height="32px">
        </button>
        <button @click="test()">
            <img src="/src/assets/images/telegramIcon.svg" width="32px" height="32px">
        </button>
        <button @click="test()">
            <img src="/src/assets/images/vkontakteIcon.svg" width="32px" height="32px">
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

</style>