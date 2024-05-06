<template>
    <div class="catalog">
        <div class="catalog__popular" v-if="status === 'popular'">
            <CardComponent v-for="product in catalog.getMostPopular" 
                           :title="product.title" 
                           :img="product.image" 
                           :price="product.price"
            ></CardComponent>
        </div>
        <div class="catalog__new" v-if="status === 'new'">
            <h1>NEW</h1>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';
import { useCatalogStore } from '@/stores/catalog';
import CardComponent from '../components/CardComponent.vue'

const props = defineProps({
    status: String
})

const catalog = useCatalogStore()
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.catalog__popular{
    width: 100%;
    // background-color: red;
    height: 800px;
}
.catalog__new{
    width: 100%;
    background-color: blue;
}

</style>