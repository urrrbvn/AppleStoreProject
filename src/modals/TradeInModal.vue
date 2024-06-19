<template>
    <div class="trade-in">
        <h1 class="trade-in__title">Обменяйте старое устройство по Trade-In</h1>
        <form class="trade-in__form" @submit.prevent="onSubmit">
            <TextInputElement :fsize="16" :name="'productName'" :type="'text'" :placeholder="'какое устройство вы хотите сдать?'" :validation="'other'"/>
            <div class="trade-in__input">
                <TextInputElement :placeholder="'+7'" :fsize="24" :name="'phone'" :type="'tel'" :validation="'phone'"/>
                <CasualButton :title="'обменять устройство'" :width="'246'"/>
            </div>
        </form>
    </div>
</template>

<script setup>
import {useForm} from "vee-validate";
import {useModalStatesStore} from "@/stores/modalStates.js";
import TextInputElement from "@/UI/TextInputElement.vue";
import CasualButton from "@/UI/CasualButton.vue";

const {handleSubmit, validate} = useForm()

const modal = useModalStatesStore()

const onSubmit = handleSubmit(async (values) =>{
    const isValid = await validate()
    if(!isValid){
        return
    }
    console.log(values);
    modal.ModalToggle('')
})
</script>

<style lang="scss">
@import "../styles/mixins.scss";

.trade-in{
    @include flexCol();
    align-items: center;
    gap: 24px;
    padding-bottom: 32px;
}

.trade-in__title{
    font-size: 28px;
}

.trade-in__form{
    @include flexCol();
    gap: 8px;

    .trade-in__input{
        display: grid;
        grid-template-columns: 249px 246px;
        gap: 8px;
    }

    .custom-input{
        height: 56px;
    }
}
</style>