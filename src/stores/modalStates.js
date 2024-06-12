import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStatesStore = defineStore('modalStates', ()=>{

    const ModalStatus = ref(false)

    const ModalToggle = () =>{
        
        ModalStatus.value = !ModalStatus.value
    }

    return {ModalStatus, ModalToggle}
})