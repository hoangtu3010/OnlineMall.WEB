<template>
  <section class="banner-section">
    <div
      class="banner-bg bg-img bg-fixed"
      :style="{ backgroundImage: 'url(' + bgr + ')' }"
    ></div>
    <div class="container">
      <div class="banner-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <swiper class="swiper" :options="swiperOption1">
                <swiper-slide>
                  <img src="~/assets/images/slider-1.png" alt="slider-1" />
                  <div class="swiper-slider-text">
                    <p>Crazy discount: <b>save up to 75%</b></p>
                    <h1>
                      Shopping <br />
                      fever
                    </h1>
                    <button class="btn">Learn more</button>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <img src="~/assets/images/slider-1.2.png" alt="slider-2" />
                  <div class="swiper-slider-text">
                    <p>We care about your wallet!</p>
                    <h1>Black friday</h1>
                    <button class="btn">Learn more</button>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="slider-banner-sm col-lg-3">
              <swiper class="swiper" :options="swiperOption2">
                <swiper-slide
                  ><img src="~/assets/images/slider-2.png" alt="slider-3"
                /></swiper-slide>
                <swiper-slide
                  ><img src="~/assets/images/slider-2.2.png" alt="slider-4"
                /></swiper-slide>
              </swiper>
              <swiper class="swiper" :options="swiperOption3">
                <swiper-slide
                  ><img src="~/assets/images/slider-3.png" alt="slider-5"
                /></swiper-slide>
                <swiper-slide
                  ><img src="~/assets/images/slider-3.2.png" alt="slider-6"
                /></swiper-slide>
              </swiper>
            </div>
            <div class="navigate-section">
              <div class="navigate-button .animate-bottom">
                <nuxt-link to="/shopping">
                  <b-icon :font-scale="2" icon="handbag-fill"></b-icon>
                  Shopping
                </nuxt-link>
              </div>
              <div class="navigate-button .animate-bottom-2">
                <nuxt-link to="/cinema">
                  <b-icon :font-scale="2" icon="tv-fill"></b-icon>
                  Cinema
                </nuxt-link>
              </div>
              <div class="navigate-button .animate-bottom-3">
                <nuxt-link to="/dinning">
                  <b-icon :font-scale="2" icon="shop"></b-icon>
                  Dinning</nuxt-link
                >
              </div>
              <div class="navigate-button .animate-bottom-4">
                <nuxt-link to="/map">
                  <b-icon :font-scale="2" icon="map-fill"></b-icon>
                  Floor Info</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    bgr: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      swiperOption1: {
        slidesPerView: 1,
        simulateTouch: false,
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      swiperOption2: {
        slidesPerView: 1,
        simulateTouch: false,
        autoHeight: true,
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      swiperOption3: {
        slidesPerView: 1,
        simulateTouch: false,
        autoHeight: true,
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>

<style>
.banner-section {
  padding: 100px 0;
  position: relative;
}

.banner-section .banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
  z-index: -1;
}

.banner-section::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 18, 50, 0.19);
}

.bg-img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-fixed {
  background-attachment: fixed;
}

.banner-content {
  z-index: 3;
}

.banner-content .col-lg-9 {
  padding-left: 0;
}

.banner-content .slider-banner-sm.col-lg-3 {
  padding-right: 0;
}

.banner-content .col-lg-3:nth-child(3) {
  padding-left: 0;
}

.banner-content .col-lg-3:last-child {
  padding-right: 0;
}

/* .banner-content .col-lg-3:nth-child(2) {
  padding-left: 0;
}

.banner-content .col-lg-3:last-child {
  padding-right: 0;
} */

.banner-content .col-lg-3 .swiper-container:first-child {
  margin-bottom: 15px;
}

.banner-content .swiper-slide {
  position: relative;
}

.banner-content .swiper-slide img {
  width: 100%;
  border-radius: 10px;
}

.banner-content .swiper-slide .swiper-slider-text {
  position: absolute;
  right: 10px;
  bottom: 20px;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
}

.banner-content .swiper-slide .swiper-slider-text p {
  font-size: 25px;
  font-weight: 400;
}

.banner-content .swiper-slide .swiper-slider-text h1 {
  font-size: 70px;
  font-weight: 800;
}

.banner-content .swiper-slide .swiper-slider-text button {
  border: none;
  background: #ff00d6;
  padding: 8px 15px;
  border-radius: 18px;
  border-top-right-radius: 0;
  color: #fff;
  font-weight: 600;
  transition: 0.3s;
}

.banner-content .swiper-slide .swiper-slider-text button:hover {
  background: #009cff;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 0;
}

.banner-content .navigate-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 3;
}

.banner-content .navigate-section .navigate-button {
  margin-top: 20px;
  vertical-align: middle;
  text-align: center;
  width: 100%;
  padding: 10px;
  transition: .3s;
  opacity: 0.8;
}

.banner-content .navigate-section .navigate-button:hover {
  transform: scale(.95);
}

.banner-content .navigate-section .navigate-button a {
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  border-radius: 10px;
  transition: .3s;
}

.banner-content .navigate-section .navigate-button:first-child {
  padding-left: 0;
}

.banner-content .navigate-section .navigate-button:last-child {
  padding-right: 0;
}

.banner-content .navigate-section .navigate-button:first-child a {
  background-color: #ec008c;
  animation: fadeUp 1s forwards;
}
.banner-content .navigate-section .navigate-button:nth-child(2) a {
  background-color: #ed1c24;
  animation: fadeUp 2s forwards;
}
.banner-content .navigate-section .navigate-button:nth-child(3) a {
  background-color: #fa5511;
  animation: fadeUp 3s forwards;
}
.banner-content .navigate-section .navigate-button:last-child a {
  background-color: #0ecab6;
  animation: fadeUp 4s forwards;
}

.banner-content .navigate-section .navigate-button a svg {
  margin-bottom: 15px;
}
</style>