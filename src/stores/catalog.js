import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCatalogStore = defineStore('catalog', () => {
  const allProducts = reactive([])

 async function getProducts(){
    let res = await axios.get('http://localhost:1452/api/products/')

    allProducts.splice(0, allProducts.length, ...res.data)

    console.log(allProducts);
  }

  function compareDate(a, b){
    let dateA = new Date(a.createdAt)
    let dateB = new Date(b.createdAt)

    return dateB - dateA
  }

  const getByCategory = (category)=>{
    let filteredArr = allProducts.filter(elem => elem.category === category)
    return filteredArr
  }

  const getMostPopular = computed(()=>{
    let sortedArr = [...allProducts].sort((a,b)=> b.count_review - a.count_review)
    return sortedArr.slice(0, 12)
  })

  const getNewest = computed(()=>{
    let sortedArr = [...allProducts].sort(compareDate)
    return sortedArr.slice(0, 8)
  })

function productTitle(product) {
    if(product.category !== 'Аксессуары' && product.category !== 'Гаджеты' && product.category !== 'Часы') {
        let special = product.characteristics.find(elem => elem.characteristic === 'Объем встроенной памяти')
        let title = `${product.brand} ${product.name} ${special.value} ${special.unit_type} ${product.color}`
        return title
    }
    if (product.category === 'Часы'){
        let title = `${product.brand} ${product.name}`
        return title
    }
    else{
        let title = `${product.name} ${product.color}`
        return title
    }
}

  function getSearchProducts(str){
    if(str.length > 0) {
        let result = allProducts.filter(elem => productTitle(elem).toLowerCase().includes(str.toLowerCase()) === true)
        return result
    }
    if(str.length === 0) {
      return []
    }
  }

  return { allProducts, getProducts, getMostPopular, getNewest, getSearchProducts, getByCategory, productTitle}
})
