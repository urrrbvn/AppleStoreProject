<template>
    <div class="custom-input">
        <input v-if="type === 'tel'" class="custom-input__item" @focus="" 
        :type="type || 'text'" 
        :style="{fontSize: `${fsize}px`}" 
        :placeholder="props.placeholder" 
        v-model="value" 
        @input="phoneCorrector($event)"
        >
        <input v-else class="custom-input__item" @focus="" 
        :type="type || 'text'" 
        :style="{fontSize: `${fsize}px`}" 
        :placeholder="props.placeholder" 
        v-model="value" 
        >
    </div>
    <span class="custom-input__error">{{ errorMessage }}</span>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';
import { useField } from 'vee-validate'
import { fieldRules } from '@/validationRules';

const props = defineProps({
    type: String,
    name: String,
    placeholder: String,
    fsize: Number,
    validation: String
})

const {value , errorMessage } = useField(()=> props.name, fieldRules[props.validation], { validateOnValueUpdate: false, initialValue: (props.type === 'tel')? '+7' : '' })

function phoneCorrector(e){
    if(props.type === 'tel'){
        e.target.value = e.target.value.replace(/[^+\d]/g, '');
    }
}
</script>