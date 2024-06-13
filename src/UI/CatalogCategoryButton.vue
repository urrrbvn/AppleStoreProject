<template>
    <button class="catalogCategory">
        <component v-if="windowWidth < 1200" class="CatalogCategory__icon" :is="icon" :icon="props.icon" :paintType="stroke"></component>
        <span class="CatalogCategory__title">{{ title }}</span>
    </button>
</template>

<script setup>
import {defineProps, onMounted, onUnmounted, ref, shallowRef} from 'vue';
import CategoryIcon from '@/Icons/category-icon.vue';

onMounted(()=>{
    console.log(props.icon);
})

const props = defineProps({
    title: String,
    icon: String
})

const icon = shallowRef(CategoryIcon)

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

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

.catalogCategory {
    @include flexRow();
    gap: 8px;
    font-size: 20px;
    font-weight: 400;
    text-wrap: nowrap;
    background-color: #F9F9F9;
    border: none;
    display: flex;
    align-items: center;
    //justify-content: center;
}
.catalogCategory:hover{
    color: $prime ;
    .stroke{
        path{
            stroke: $prime;
        }
    }
    .fill{
        path{
            fill: $prime;
        }
    }
}

.CatalogCategory__title{
    text-align: left;
}
@media (max-width: 1200px) {
    
}
</style>