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

  function getSearchProducts(str){
    if(str.length > 0) {
      let result = allProducts.filter(product =>
        product.title.toLowerCase().includes(str.toLowerCase())
      )
      console.log(str)
      return result
    } 
    if(str.length === 0) {
      return []
    }
  }

  return { allProducts, getProducts, getMostPopular, getNewest, getSearchProducts, getByCategory}
})
