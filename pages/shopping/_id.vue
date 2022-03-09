<template>
  <div class="section-detail-card container">
    <div class="row">
      <div class="col-lg-4">
        <div class="detail-card-logo">
          <img :src="objValue.imageLogoSrc" alt="" />
        </div>
        <div class="detail-cart-info">
          <b>Open Hours:</b>
          <p>{{this.formatDate(objValue.showTime, 'HH:mm')}}</p>
          <b>Contact Information:</b>
          <p>{{objValue.contact}}</p>
          <b>Website:</b>
          <p>{{objValue.link}}</p>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="detail-card-content">
          <div class="detail-card-title">
            <h1>{{objValue.name}}</h1>
          </div>
          <div class="detail-card-description">
            <p>
              {{objValue.description}}
            </p>
          </div>
          <div class="detail-card-image">
            <img :src="objValue.imageSrc" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      objValue: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.SHOP_GET_BY_ID + this.id)
        .then((res) => {
          this.objValue = { ...res.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>