<template>
    <div class="custom-input">
        <input class="custom-input__item" :type="type || 'text'" :style="{fontSize: `${fsize}px`}" :placeholder="props.placeholder" v-model="inputVal">
        <span>{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';
import { useField } from 'vee-validate'

const props = defineProps({
    type: String,
    name: String,
    placeholder: String,
    fsize: String
})

const inputVal = ref('')

const {value, errorMessage, meta} = useField(()=> props.name)

</script>