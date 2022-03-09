<template>
  <div>
    <section-banner :bgr="bgr"> </section-banner>
    <section class="our-service">
      <div class="container">
        <div class="feature-title text-center">
          <b-icon icon="x-diamond-fill" class="title-tag"></b-icon>
          <span class="title-tag">Our Sevices</span>
          <h2>
            <span>Some Awesome Things We Do</span>
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-4 our-service-box animate-bottom">
            <div class="our-service-item-img">
              <img src="../assets/images/entertainment-1.png" alt="" />
            </div>
            <div class="our-service-item-text">
              <p>Entertainment zone</p>
              <span
                >Women’s, men’s and children’s fashion, accesories, shoes,
                jewellery and more are in the Fashion Zone . Lorem Ipsum is
                simply dummy text of the Lorem Ipsum</span
              >
            </div>
          </div>
          <div class="col-lg-4 our-service-box animate-bottom-2">
            <div class="our-service-item-img">
              <img src="../assets/images/fashion.png" alt="" />
            </div>
            <div class="our-service-item-text">
              <p>Fashion zone</p>
              <span
                >Women’s, men’s and children’s fashion, accesories, shoes,
                jewellery and more are in the Fashion Zone . Lorem Ipsum is
                simply dummy text of the Lorem Ipsum</span
              >
            </div>
          </div>
          <div class="col-lg-4 our-service-box animate-bottom-3">
            <div class="our-service-item-img">
              <img src="../assets/images/lounge.png" alt="" />
            </div>
            <div class="our-service-item-text">
              <p>Dinning & Longue zone</p>
              <span
                >Women’s, men’s and children’s fashion, accesories, shoes,
                jewellery and more are in the Fashion Zone . Lorem Ipsum is
                simply dummy text of the Lorem Ipsum</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="container">
        <div class="feature-title text-center">
          <b-icon icon="x-diamond-fill" class="title-tag"></b-icon>
          <span class="title-tag">Photo Gallery</span>
          <h2>
            <span>A Few Pictures In The Gallery</span>
          </h2>
        </div>
        <div class="row">
          <div v-for="(item, index) in listData" :key="item.id" class="col-lg-4 gallery-box">
            <nuxt-link :to="'/photo-gallery/' + item.id">
              <div class="gallery-item-img">
                <div class="gallery-item-icon">
                  <b-icon icon="search"></b-icon>
                </div>
                <img :src="item.imageSrc" alt="image" />
              </div>
              <div class="gallery-item-info">
                <p>{{'Ảnh' + (index + 1)}}</p>
                <p>{{item.description}}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="partner">
      <div class="container">
        <div class="partner-slide">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide
              ><img src="../assets/images/partner-1.png" alt="partner-image"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/partner-2.png" alt="partner-image"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/partner-3.png" alt="partner-image"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/partner-4.png" alt="partner-image"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      bgr: "banner-1.jpg",
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
      listData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.GALLERIES_GET_ALL)
        .then((res) => {
          this.listData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.title-tag {
  color: #b956fe;
  font-weight: 700;
}

.our-service {
  position: relative;
  padding: 75px 0;
  text-align: center;
}

.our-service .our-service-box {
  margin-top: 25px;
}

.our-service .our-service-box .our-service-item-text p {
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
}

.our-service .our-service-box .our-service-item-text span {
  color: #878787;
}

.gallery {
  padding: 75px 0;
  background-image: url("../assets/images/bg-1.png");
}

.gallery .gallery-box {
  margin-top: 25px;
}

.gallery .gallery-box .gallery-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: 0.2s;
}

.gallery .gallery-box a {
  text-decoration: none;
  color: #000;
}

.gallery .gallery-box .gallery-item-img {
  position: relative;
  height: 220px;
}

.gallery .gallery-box .gallery-item-img .gallery-item-icon {
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-100px);
  z-index: 1;
  padding: 10px 14px;
  opacity: 0;
  border-radius: 50%;
  transition: 0.3s;
}

.gallery .gallery-box:hover .gallery-item-img .gallery-item-icon {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.gallery .gallery-box:hover .gallery-item-img img {
  filter: blur(1px);
  -webkit-filter: blur(1px);
}

.gallery .gallery-box .gallery-item-info {
  background-color: #fff;
  padding: 10px 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.gallery .gallery-box .gallery-item-info p {
  height: 55px;
  font-size: 20px;
  transition: 0.2s;
}

.gallery .gallery-box:hover .gallery-item-info p {
  color: #b956fe;
}

.gallery .gallery-box .gallery-item-info p:last-child{
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.partner {
  padding: 35px 0;
}
</style>