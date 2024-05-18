<template>
    <div class="mobile-menu">
        <CatalogButton/>
        <CartButton/>
        <IconButton :icon="likeIcon" :size="32"/>        
        <IconButton :icon="compareIcon" :size="32"/>        
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import IconButton from '@/UI/IconButton.vue';
import CartButton from '@/UI/CartButton.vue';
import CatalogButton from '@/UI/CatalogButton.vue';



</script>