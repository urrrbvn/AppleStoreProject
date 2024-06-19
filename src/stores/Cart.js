import { defineStore } from "pinia";
import { computed, reactive, ref, watch } from "vue";


export const useCartStore = defineStore('cart', ()=>{

    const cart = reactive([])

    //Функция для добавления товара в корзину / увеличения его кол-ва в корзине
    function addToCart (product) {
        cart.push(product)
    }
    //Функция для уменьшения кол-ва товара в корзину
    function deleteFromCart(id) {
        let indexElem = [...cart].findIndex(elem => elem.id === id)
        cart.splice(indexElem, 1)
    }
    //функция для удаления всей позиции товара из корзины
    function removePosition(id){
        newArr = cart.filter(elem => elem.id !== id)
        cart.splice(0, cart.length, [...newArr])
    }

    const getQuantity = computed((id)=>{
        return cart.filter(elem => elem.id === id).length
    })
    
    const getPositions = computed(()=>{
        const positions = Set(...cart)
        return positions
    })


    

    



    return {cart ,addToCart, deleteFromCart, removePosition, getPositions, getQuantity}
})