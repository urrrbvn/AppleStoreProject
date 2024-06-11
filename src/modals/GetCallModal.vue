<template>
    <div class="get-call">
        <article class="get-call__text">
            <h2 v-if="isNumberReceived === false">Закажите обратный звонок</h2>
            <h2 v-if="isNumberReceived === true">Заявка отправлена!</h2>
            <p>Менеджер позвонит вам через 3 минуты</p>
        </article>
        <div class="get-call__functional">
            <form ref="form" @submit.prevent="onSubmit">
                <TextInputElement v-if="isNumberReceived === false" name="phone" :placeholder="'+7'" :fsize="24" :name="'phone'" :type="'tel'" :validation="'phone'"/>
                <CasualButton v-if="isNumberReceived === false" :title="'заказать зовнок'" :width="246"/>
                <CasualButton v-if="isNumberReceived === true" :title="'Хорошо'" :width="246" @click="modal.ModalToggle()"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import TextInputElement from '@/UI/TextInputElement.vue';
import CasualButton from '@/UI/CasualButton.vue';
import { ref } from 'vue';
import { useModalStatesStore } from '@/stores/modalStates';
import { useForm } from 'vee-validate';



const modal = useModalStatesStore()

const form = ref(null)

const isNumberReceived = ref(false)

const {handleSubmit, validate} = useForm()

const onSubmit = handleSubmit(async (values) =>{
    const isValid = await validate()
    if(!isValid){
        return    
    }
    console.log(values);
    isNumberReceived.value = !isNumberReceived.value
})


</script>