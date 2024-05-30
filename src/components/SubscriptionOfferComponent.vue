<template>
    <div class="subscription-offer">
        <img src="../assets/images/phoneLetters.png" class="subscription-offer__image" width="481px" height="371px">
        <div class="subscription-offer__container">
            <article class="subscription-offer__text">
                <h1>Подписка на рассылку акций!</h1>
                <p>Подпишитесь на рассылку, чтобы узнавать о всех акциях первым</p>
            </article>
            <div class="subscription-offer__form">
                <article class="form-text">
                    <h1>Скидка 10%</h1>
                    <p>на первую покупку за подписку</p>
                </article>
                <div class="form-input">
                    <input type="tel" value="+7">
                    <CasualButton theme="grey" width="160" title="подписаться"/>
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
.subscription-offer{
    display: flex;
    height: 481px;
    background-color: #F9F9F9;
    gap: 86px;
    justify-content: center;
    align-items: center;
}

.subscription-offer__container{
    display: flex;
    flex-direction: column;
    gap: 25px;
    // width: 486px;

    .subscription-offer__text{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 421px;

        h1{
            font-size: 48px;
        }

        p{
            font-size: 24px;
            color: $smallText_7;
        }
    }
}

.subscription-offer__form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap: 16px;
    width: 486px;
    background: linear-gradient(90.34deg, #F7355D 0.3%, #9747FF 101.33%);
    border-radius: 16px;
    height: 196px;
    .form-text{
        color: white;
        padding-left: 40px;
        h1{
            font-size: 41px;
            
        }

        p{
            font-size: 20px;
        }
    }

    .form-input{
        display: flex;
        gap: 16px;
        justify-content: center;

        input{
            width: 246px;
            border-radius: 8px;
            border: 1px solid #DBDBDB;
            padding-left: 24px;
            font-size: 24px;
            color: $smallText_5;
            outline: 0;
        }
    }
}

@media (max-width: 1200px) {
    .subscription-offer{
        height: 358px;
        background-color: white;
        gap: 32px;
        align-items: normal;
        img{
            width: 225px;
            height: 173px;
            margin-top: 24px;
        }
    }

    .subscription-offer__container{
        gap: 16px;
        padding-top: 32px;
        .subscription-offer__text{
            max-width: 300px;
            h1{
                font-size: 32px;
            }

            p{
                font-size: 16px;
            }
        }
    }

    .subscription-offer__form{
        background: white;
        width: 100%;
        justify-content: normal;
        .form-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(90.34deg, #F7355D 0.3%, #9747FF 101.33%);
            border-radius: 16px;
            max-width: 279px;
            height: 63px;
            padding-left: 16px;
            gap: 4px;
            h1{
                font-size: 20px;
            }

            p{
                font-size: 16px;
            }
        }

        .form-input{
            justify-content: normal;
            gap: 8px;
        }
    }
}

@media (max-width: 768px) {
    .subscription-offer{

        img{
            display: none;
        }
    }

    .subscription-offer__container{
        gap: 8px;

        .subscription-offer__text{
            max-width: 240px;
            h1{
                font-size: 24px;
            }
        }
    }

    .subscription-offer__form{
        gap: 8px;

        .form-input{
            flex-direction: column;

            input{
                height: 56px;
            }

            .casualBtn{
                width: 200px;
            }
        }
    }
}
</style>