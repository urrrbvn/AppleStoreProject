<template>
    <div class="stars-container">
        <i aria-hidden="true" v-for="elem in starVAlues" :class="elem < rating ? 'fa fa-star active' : 'fa fa-star'"></i>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const starVAlues = ref([1,2,3,4,5])
const props = defineProps({
    rating: Number
})


</script>

<style scoped lang="scss">
    .stars-container{
        display: flex;
        align-items: center;
        font-size: 21px;

    }
    .fa-star{
        color: #DBDBDB;
    }
    .active{
        color: #FFAD31;
    }
</style>