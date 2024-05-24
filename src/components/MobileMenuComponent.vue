<template>
    <div class="mobile-menu">
        <div class="mobile-menu__items">
            <CatalogButton/>
            <CartButton/>
            <div class="icon-button-wrapper">
                <IconButton :icon="'likeIcon'" :size="32"/>
                <span>избранное</span>        
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import IconButton from '@/UI/IconButton.vue';
import CartButton from '@/UI/CartButton.vue';
import CatalogButton from '@/UI/CatalogButton.vue';



</script>