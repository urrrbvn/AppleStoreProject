<template>
    <div class="footer">
        <div class="footer__branding">
            <figure class="footer__branding-logo">
                <img src="../assets/images/AppleLogo.svg" width="40px" height="40px">        
            </figure>
            <article class="footer__branding-text">
                <p>© 2013-2022</p>
                <p>Продажа iPhone в МСК</p>
                <span class="footer__span">*Сайт не является публичной оффертой. Вся информация, указанная на сайте носит информационный характер.</span>
            </article>
        </div>
        <div class="footer__services">
            <ul class="footer__services-list">
                <li class="footer__services-item"><a href="" class="footer__services-link">Гарантия</a></li>
                <li class="footer__services-item"><a href="" class="footer__services-link">Политика возврата</a></li>
                <li class="footer__services-item"><a href="" class="footer__services-link">Кредит</a></li>
                <li class="footer__services-item"><a href="" class="footer__services-link">Доставка и оплата</a></li>
                <li class="footer__services-item"><a href="" class="footer__services-link">Отзывы</a></li>
                <li class="footer__services-item"><a href="" class="footer__services-link">Контакты</a></li>
                <li class="footer__services-item"><a href="" class="footer__services-link">Политика конфеденциальности</a></li>
            </ul>
        </div>
        <div class="footer__products">
            <ul class="footer__products-list">
                <li class="footer__products-item"><a href="" class="footer__products-link">iPhone</a></li>
                <li class="footer__products-item"><a href="" class="footer__products-link">iPad</a></li>
                <li class="footer__products-item"><a href="" class="footer__products-link">Macbook и iMac</a></li>
                <li class="footer__products-item"><a href="" class="footer__products-link">Watch</a></li>
                <li class="footer__products-item"><a href="" class="footer__products-link">Аксессуары</a></li>
                <li class="footer__products-item"><a href="" class="footer__products-link">Акции</a></li>
            </ul>
        </div>
        <div class="footer__contact">
            <div class="footer__contact-info">
                <div class="footer__phone-container">
                    <a href="tel:+78127048697" class="footer__phone-number">+7 812 704 86 97</a>
                    <p class="footer__phone-description">Бесплатная консультация</p>
                    <p class="footer__phone-description">С 10:00 до 21:00, без выходных</p>
                </div>
                <a class="footer__callback" href="">Заказать звонок</a>
            </div>
            <div class="footer__adress">
                <p class="footer__adress-text">Москва, ул Барклая 8</p>
                <p class="footer__adress-text">Москва, ул Барклая 8</p>
            </div>
            <SocialMediaIcons/>
        </div>
    </div>
</template>

<script setup>
import SocialMediaIcons from '@/UI/SocialMediaIcons.vue';
</script>

<style lang="scss" scoped>

</style>