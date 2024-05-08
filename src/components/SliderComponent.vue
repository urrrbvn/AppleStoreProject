<template>
    <div class="slider">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ 'active': currentSlide === index }"
        :style="{ backgroundColor: slide.color }"
      >
        <div class="content">
          <div class="images-container">
            <div class="image-container">
              <img :src="slide.image" alt="Slide {{ index + 1 }} image">
              <div class="image-container-second">
                <img :src="slide.secondaryImage" alt="Slide {{ index + 1 }} secondary image">
                <p>{{ slide.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="prev-btn" @click="prevSlide"><img src="../assets/images/sliderVectorLeft.png" alt="Previous"></button>
      <button class="next-btn" @click="nextSlide"><img src="../assets/images/sliderVector.png" alt="Next"></button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const slides = [
    { 
      color: 'lightblue', 
      content: 'от  137 900₽', 
      image: 'src/assets/images/iphoneSlider.png', 
      secondaryImage: 'src/assets/images/bannerSlide.png' 
    },
    { 
      color: 'lightblue', 
      content: 'от 100 900₽', 
      image: 'src/assets/images/iphoneSlider.png', 
      secondaryImage: 'src/assets/images/bannerSlide.png' 
    },
    { 
      color: 'lightblue', 
      content: 'от 237 900₽', 
      image: 'src/assets/images/iphoneSlider.png', 
      secondaryImage: 'src/assets/images/bannerSlide.png' 
    }
  ];
  
  const currentSlide = ref(0);
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  };
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  };
  </script>