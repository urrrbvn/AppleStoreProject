<template>
    <div class="banner">
        <div class="banner__container">
            <figure>
                <img src="../assets/images/IphoneNewBig.png">
            </figure>
            <div class="banner__content">
                <h1 class="banner__content-title">iPhone 14 Pro Max</h1>
                <div class="banner__description">
                    <p class="banner__description-text">по лучшей цене в Москве</p>
                    <CasualButton title="подробнее" width="160"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CasualButton from '@/UI/CasualButton.vue';
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.banner{
    background-color: black;
    overflow: hidden;
}
.banner__container{
    display: flex;
    align-items: center;
    gap: 88px;
    height: 360px;
    max-width: 1200px;
    margin: 0 auto 0 auto;
    figure{
        align-self: start;
    }
    .banner__content{
        color: white;
        display: flex;
        flex-direction: column;
        gap: 16px;
        .banner__content-title{
            font-size: 56px;
            letter-spacing: 2px;
        }
        .banner__description{
            display: flex;
            flex-direction: column;
            gap: 24px;
            .banner__description-text{
                font-size: 24px;
                letter-spacing: 0.4px;
            }
        }
    }
}

@media (max-width: 1200px) {
    .banner__container{
        gap: 72px;
        margin: 0 auto 0 40px;
        height: 217px;
        figure{
            img{
                width: 110px;
            }
        }
        .banner__content{
            gap: 8px;
            .banner__content-title{
                font-size: 32px;
                letter-spacing: 1.15px;
            }
            .banner__description{
                gap: 16px;
                .banner__description-text{
                    font-size: 16px;
                    letter-spacing: 0.25px;
                }
            }
        }
    }
}

@media (max-width: 780px) {
    .banner__container{
        gap: 24px;
        margin: 0 auto 0 16px;
        height: 151px;
        figure{
            img{
                width: 65px;
            }
        }
        .banner__content{
            gap: 4px;
            .banner__content-title{
                font-size: 20px;
                letter-spacing: 0.75px;
            }
            .casualBtn{
                height: 40px;
            }
        }
    }
}
</style>