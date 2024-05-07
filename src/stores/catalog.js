import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', () => {
  const allProducts = reactive([])
  
  function getProducts(){
    let products = []
    for(let i = 0; i < 30; i++){
      products.push({
        id: i,
        title: 'Apple iPhone 13 XS Max 256 ГБ золотой',
        image: 'Iphone' ,
        reviews: 14,
        rating: Math.floor(Math.random()*(5 - 1 + 1)) + 1,
        availible: true,
        price: 137900,
        discountPrice: 137900,
        inCart: false
      })
    }
    allProducts.splice(0, allProducts.length, ...products) 
  }
  const getMostPopular = computed(()=>{
    let sortedArr = allProducts.sort((a,b)=> b.rating - a.rating)
    return sortedArr.slice(0, 12)
  })

  const getNewest = computed(()=>{
    // пока нет точного объекта продукта, поэтому пока просто подтягиваю 8 элементов
    return allProducts.slice(0, 8)
  })

  return { allProducts, getProducts, getMostPopular, getNewest }
})
