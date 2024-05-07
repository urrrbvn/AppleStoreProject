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
            <figure class="footer__icons">
                <IconButton :icon="'whatsappIcon'" :size="32"></IconButton>
                <IconButton :icon="'telegramIcon'" :size="32"></IconButton>
                <IconButton :icon="'vkontakteIcon'" :size="32"></IconButton>
            </figure>
        </div>
    </div>
</template>

<script setup>
import IconButton from '@/UI/IconButton.vue';
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    .footer{
        display: flex;
        height: 309px;
        justify-content: space-evenly;
        padding-left: 120px;

        .footer__branding{
            display: flex;
            flex-direction: column;
            width: 273px;
            padding-top: 30px;
            gap: 27px;
            .footer__branding-text{
                color: $smallText_5;
                display: flex;
                flex-direction: column;
                gap: 8px;
                .footer__span{
                    color: $smallText_3;
                    margin-top: 16px;
                    font-size: 14px;
                }
            }
        }

        .footer__services{
            padding-top: 40px;
            display: flex;
            gap: 16px;
            .footer__services-list{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 16px;
                .footer__services-item{

                    .footer__services-link{
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }

        .footer__products{
            padding-top: 40px;
            .footer__products-list{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 16px;
                .footer__products-item{
                    
                    .footer__products-link{
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }
    }

    .footer__contact{
        padding-top: 31px;
        padding-right: 155px;
        .footer__contact-info{
            display: flex;
            flex-direction: column;
            gap: 11px;
            .footer__phone-container{
                height: 86px;
                .footer__phone-number{
                    text-decoration: none;
                    color: black;
                    font-size: 41px;
                    font-weight: 600;
                }

                .footer__phone-description{
                    color: $smallText_6;
                    font-size: 14px;
                }
            }

            .footer__callback{
                text-decoration: none;
                color: $prime;
                font-size: 20px;
                
            }
        }

        .footer__adress{
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 40px;
        }
        
        .footer__icons{
            display: flex;
            position: relative;
            width: 108px;
            bottom: 120px;
            left: 169px;
            gap: 6px;
            
        }

    }
</style>