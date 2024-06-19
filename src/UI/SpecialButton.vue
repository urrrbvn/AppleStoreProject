<template>
    <button class="specialOffer" @click="modalStates.ModalToggle('tradeIn')">
        <img class="specialOffer__image"  src="../assets/images/IphoneNew.png">
        <p class="specialOffer__title">Трейд-Ин</p>
        <img class="speicalOffer__icon" src="../assets/images/ArrowRight.svg">
    </button>
    <Teleport to="body">
        <ModalWindowComponent v-if="modalStates.ModalStatus === 'tradeIn'">
            <TradeInModal/>
        </ModalWindowComponent>
    </Teleport>
</template>

<script setup>
import ModalWindowComponent from "@/components/ModalWindowComponent.vue";
import TradeInModal from "@/modals/TradeInModal.vue";
import {useModalStatesStore} from "@/stores/modalStates.js";

const modalStates = useModalStatesStore()
</script>
