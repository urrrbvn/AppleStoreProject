<template>
  	<button class="button">
    	<img class="button__icon" :src="`/src/assets/images/cartIcon.svg`">
    	<span class="button__title">в корзине</span>
    	<p class="button__counter">{{ counter }}</p>
  	</button>
</template>

<script setup>

let counter = 1

</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.button{
	@include flexRow();
  	padding: 12px 16px;
  	border-radius: 16px;
  	align-items: center;
  	justify-content: center;
  	gap: 4px;
  	color: white;
  	border: none;  
  	font-size: 20px;
  	line-height: 23.87px;
	background-color: #52D116;
}
.button__counter{
  	padding: 4px 12px 4px 12px;
  	border-radius: 32px;
  	box-shadow: 0px 4px 4px 0px #00000040 inset;

}

</style>