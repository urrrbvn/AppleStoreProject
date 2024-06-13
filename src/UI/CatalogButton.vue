<template>
    <div class="catalog-button">
        <button class="catalog-button__btn" @click="btnHandler('catalog')" :style="catalogButtonStyles">
            <img v-if="windowWidth > 1200" class="catalog-button__icon" src="../assets/images/catalogIcon.svg">
            <img v-if="windowWidth < 1200" src="../assets/images/catalog-mobileIcon.svg">
            <span v-if="windowWidth > 1200" class="catalog-button__title">Каталог товаров</span>
            <span v-if="windowWidth < 1200" class="catalog-button__title">Каталог</span>
        </button>
        <div class="catalog-button__toggled-block" v-if="catalogBtnClicked">
            <div class="toggled-block__container">
                    <CatalogCategoryButton class="toggled-block__button"
                        v-for="elem in catalog"
                        :title="elem.title"
                        :icon="elem.icon"
                        @click="btnHandler('category')"
                    />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import CatalogCategoryButton from "@/UI/CatalogCategoryButton.vue";

const catalog = [
    {title: 'Смартфоны', icon:`iPhoneIcon`},
    {title: 'Планшеты', icon:`iPadIcon`},
    {title: 'Компьютеры', icon:`macBookIcon`},
    {title: 'Часы', icon:`watchIcon`},
    {title: 'Аксессуары', icon:`accessoiresIcon`},
    {title: 'Акции'},
]

const catalogBtnClicked = ref(false)
const categoryBtnClicked = ref(false)

const catalogButtonStyles = computed(()=>{
    return{
        backgroundColor: catalogBtnClicked.value && windowWidth.value > 1200 ? '#9747FF' : '',
        borderRadius: catalogBtnClicked.value && windowWidth.value > 1200 ?  '16px 16px 0 0' : '',
    }
})

function btnHandler(action){
    if(action === 'catalog') {
        console.log('catalog')
        catalogBtnClicked.value = !catalogBtnClicked.value;
        // далее будут добавлены функции связанные с логикой бэкэнда
    }
    if(action === 'category') {
        console.log('category')
        categoryBtnClicked.value = !categoryBtnClicked.value;
    }
}

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>