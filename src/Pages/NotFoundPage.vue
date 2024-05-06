<template>
    <div class="notFound-container">
        <article>
            <h1>Ошибка 404</h1>
            <p>Кажется, такой страницы не существует.</p>
        </article>
        <RouterLink to="/">
            <CasualButton :title="'Вернуться на главную'" :width="280"/>
        </RouterLink>
        <figure>
            <img src="../assets/images/404.png">
        </figure>
    </div>
</template>

<script setup>
import CasualButton from '@/UI/CasualButton.vue';
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';
    .notFound-container{
        @include flexCol();
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: white;
        position: absolute;
        top: 208px;
    }
    article{
        text-align: center;
        margin-top: 93px;
        h1{
            font-weight: 700;
            font-size: 40px;
            margin-bottom: 13px;
        }
        p{
            font-weight: 500;
            font-size: 20px;
            color: #585656;
            margin-bottom: 32px;
        }
    }
    img{
        position: relative;
        top: -225px;
    }
</style>