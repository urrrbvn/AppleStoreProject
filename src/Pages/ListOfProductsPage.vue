<template>
    <div class="info-banner">
        <div class="info-banner__item item1">
            <img class="image-promo" src="../assets/images/AppleLogoInfoBlock.svg" width="80px" height="80px">
            <h1>Только оригинальная продукция Apple с гарантией и бесплатной доставкой</h1>
        </div>
        <div class="info-banner__item item2">
            <img src="../assets/images/HelpInfoBlock.svg" width="80px" height="80px">
            <article class="banner-item__text">
                <article>
                    <h1>Мы работаем </h1>
                    <h1>с 10:00 до 22:00</h1>
                </article>
                <p>В это время доступна доставка, самовывоз и клиентский отдел. Создать заказ на сайте можно в любое время суток</p>
            </article>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.info-banner{
    height: 160px;
    color: white;
    display: flex;
    justify-content: center;
    gap: 24px;
}

.info-banner__item{
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 588px;
    border-radius: 16px;
    padding-left: 24px;
    height: 112px;
    background: linear-gradient(91.71deg, #89E5FF 0%, #709FFA 99.62%);
}

.item1{
    h1{
        font-size: 22px;
    }
}

.banner-item__text{
    display: flex;
    flex-direction: column;
    gap: 8px;

    article{
        display: flex;

        h1{
            font-size: 24px;
        }
    }

    p{
        font-size: 14px;
        margin-right: 70px;
    }
}

@media (max-width: 1200px) {
    .info-banner{
        flex-direction: column;
        padding: 0 24px;
        gap: 8px;
        justify-content: flex-start;
        padding-top: 16px;
    }

    .info-banner__item{
        height: 60px;
        max-width: 100%;

    }

    .item1{
        background: #EBF8FF;
        color: $prime;
        gap: 4px;

        h1{
            font-size: 16px;
            font-weight: 400;
        }
    }

    .item2{
        background: #F8F8F8;
    }

    .banner-item__text{
        flex-direction: row;
        gap: 24px;
        article{
            flex-direction: column;
            h1{
                color: $prime;
                font-size: 16px;
                width: 126px;
            }
        }

        p{
            color: $smallText_5;
            width: 400px;
        }
    }

    img{
        width: 32px;
    }
}

@media (max-width:768px) {
    .info-banner{
        padding: 16px 16px 0 16px;
    }

    .info-banner__item{
        padding: 0;
        h1{
            font-size: 14px;
            width: 244px;
        }
    }

    .item1{
        justify-content: center;
        padding-left: 8px;
    }

    .item2{
        height: 80px;
        
    }

    .banner-item__text{

    }

    img{
        width: 20px;
    }

    .image-promo{
        padding-bottom: 8px;
    }
}
</style>