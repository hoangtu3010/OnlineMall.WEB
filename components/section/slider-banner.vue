<template>
  <div>
    <div class="slider-banner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          ><img src="~/assets/images/slider-banner-1.jpg" alt="slider-banner"
        /></swiper-slide>
        <swiper-slide
          ><img src="~/assets/images/slider-banner-2.jpg" alt="slider-banner"
        /></swiper-slide>
        <swiper-slide
          ><img src="~/assets/images/slider-banner-3.jpg" alt="slider-banner"
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: { Swiper, SwiperSlide },

  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.slider-banner {
  position: relative;
}

.swiper {
  height: 100%;
  width: 100%;
}
.slider-banner .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: auto;
  text-align: center;
  font-weight: bold;
  background-position: center;
  background-size: cover;
  color: #fff;
}

.slider-banner .swiper-slide img {
  border-radius: 10px;
}
</style>