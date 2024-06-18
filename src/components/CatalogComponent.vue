<template>
    <div class="catalog">
       <span class="catalog__status" v-if="status === 'popular'">Самое популярное</span>
       <span class="catalog__status" v-if="status === 'new'">Новинки</span>
        <div class="catalog__grid" v-if="status === 'popular'">
            <CardComponent v-for="product in catalog.getMostPopular" 
                           :product="product"
            ></CardComponent>
        </div>
        <div class="catalog__grid" v-if="status === 'new'">
            <CardComponent v-for="product in catalog.getNewest"
                           :product="product" 
            ></CardComponent>
        </div>
    </div>

</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useCatalogStore } from '@/stores/catalog';
import CardComponent from '../components/CardComponent.vue'

const props = defineProps({
    status: String
})

const catalog = useCatalogStore()


</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';


</style>