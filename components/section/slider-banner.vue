<template>
  <div>
    <div class="slider-banner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slideData.find(x => x.department === department).slides" :key="index">
          <img :src="slide.image" alt="slider-banner" />
          <div class="carousel-caption-custom">
            <h2
              class="animate__animated animate__bounceInLeft"
              style="animation-delay: 1s"
            >
              {{slide.title}}
            </h2>
            <h3
              class="animate__animated animate__zoomIn"
              style="animation-delay: 2s"
              v-html="slide.description"
            >
            </h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: { Swiper, SwiperSlide },
  props: {
    department: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        },
      },
      slideData: [
        {
          department: 'cinema',
          slides: [
            {
              image: 'slider-banner-1.jpg',
              title: 'Cinema City',
              description: "Watch Movies At It's Best"
            },
            {
              image: 'slider-banner-2.jpg',
              title: '5 Screen & IMax',
              description: 'EXCLUSIVE OFFERS & <br> HOTTEST FILM PREMIERES'
            },
            {
              image: 'slider-banner-3.jpg',
              title: 'John the cinema club',
              description: 'AND DAILY GET NEW EXCLUSIVE <br> OFFERS & VOUCHERS'
            }
          ]
        },
        {
          department: 'shopping',
          slides: [
            {
              image: 'slider-banner-4.jpg',
              title: 'Shop with us',
              description: "As quick and fun as it can get"
            },
            {
              image: 'slider-banner-5.jpg',
              title: '50+ Brand shops',
              description: 'Exclusive offers & <br> latest fashion trends'
            },
            {
              image: 'slider-banner-6.jpg',
              title: 'John the shopping club',
              description: 'AND DAILY GET NEW EXCLUSIVE <br> OFFERS & VOUCHERS'
            }
          ]
        },
        {
          department: 'dinning',
          slides: [
            {
              image: 'slider-banner-7.jpg',
              title: 'Food & drink',
              description: "Lost of cafes and restaurents"
            },
            {
              image: 'slider-banner-8.jpg',
              title: 'Your coffee time',
              description: 'Have a refreshing <br> coffee time with friends'
            },
            {
              image: 'slider-banner-9.jpg',
              title: 'We offer a variety of cafes',
              description: 'we have everything: from fast food to fine dinning'
            }
          ]
        },
      ]
    };
  },
  mounted() {},
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
  position: relative;
}

.slider-banner .swiper-slide img {
  border-radius: 10px;
}

.carousel-caption-custom {
  position: absolute;
  text-transform: uppercase;
}

.carousel-caption-custom h2{
  font-size: 80px;
  font-weight: 700;
}
</style>