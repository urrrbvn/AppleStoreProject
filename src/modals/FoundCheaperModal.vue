<template>
    <div class="found-cheaper">
        <article class="found-cheaper__text">
            <h2>Нашли дешевле?</h2>
            <p>Пришлите ссылку на этот товар в другом магазине и мы сделаем вам скидку</p>
        </article>
        <div class="found-cheaper__functional">
            <form class="found-cheaper__form" @submit.prevent="onSubmit">
                <TextInputElement :fsize="16" :name="'productLink'" :type="'text'" :placeholder="'ссылка на этот товар в другом магазине'" :validation="'other'"/>
                <div class="found-cheaper__input">
                    <TextInputElement :fsize="16" :name="'productPrice'" :type="'text'" :placeholder="'цена в другом магазине'" :validation="'other'"/>
                    <TextInputElement :placeholder="'+7'" :fsize="24" :name="'phone'" :type="'tel'" :validation="'phone'"/>
                </div>
                <CasualButton :width="461" :title="'получить скидку'"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import TextInputElement from "@/UI/TextInputElement.vue";
import CasualButton from "@/UI/CasualButton.vue";
import { useModalStatesStore } from '@/stores/modalStates';
import { useForm } from "vee-validate";

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