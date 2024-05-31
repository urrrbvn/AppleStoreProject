<template>
    <div class="advantagesCard">
        <div class="advantagesCard__main">
            <figure class="advantagesCard__img">
                <img :src="`/src/assets/images/${img}.svg`">
            </figure>
            <article class="advantagesCard__title">
                <h2>{{ title }}</h2>
            </article>
            <div class="advantagesCard__content">
                <h4>{{ content }}</h4>
            </div>
        </div>
        <CasualButton :theme="'clearWhite'" title="подробнее" width="212"/>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import CasualButton from '@/UI/CasualButton.vue';

    const props = defineProps({
        img: String,
        title: String,
        content: String
    })
</script>

<style lang="scss">
@import '../styles/mixins.scss';
@import '../styles/variables.scss';

.advantagesCard {
    @include flexCol();
    align-items: center;
    border-radius: 16px;
    padding: 24px 8px 32px 8px;
    @include dynamic-calc(width, 228);
    margin: 10px;
    justify-content: space-between; 

    .advantagesCard__main {
        @include flexCol();
        gap: 8px;
        margin-bottom: 32px;
        figure {
            display: flex;
            justify-content: center;
        }
        article {
            h2 {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                text-align: center;
            }
        }
        h4 {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            color: $smallText_7;
        }
    }
} 

@media (max-width:1200px) {
    .advantagesCard{
        @include flexRow();
        width: 100%;
        padding: 0;
        .advantagesCard__main{
            @include flexRow();
        }
    }
    
}
</style>



