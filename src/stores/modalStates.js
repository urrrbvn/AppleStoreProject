import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStatesStore = defineStore('modalStates', ()=>{

    const ModalStatus = ref('')

    const ModalToggle = (component) =>{
        
        ModalStatus.value = component
    }

    return {ModalStatus, ModalToggle}
})