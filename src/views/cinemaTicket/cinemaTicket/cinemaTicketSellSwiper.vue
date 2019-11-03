<template>
  <div class="swiper-container ticket">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted () {
    new Swiper('.ticket', {
      slidesPerView: 4.5,
      slideToClickedSlide: true,
      spaceBetween: 0,
	    centeredSlides: true,
      loop: false
    })
  }
}
</script>
