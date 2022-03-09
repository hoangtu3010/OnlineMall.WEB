<template>
  <div>
    <section-slider-banner :department="department" />
    <div class="container">
      <h2 class="title-department text-center">
        <b>OUR BRANDS</b>
        <span>ALL THE TRENDING SHOPS FOR YOU</span>
      </h2>
      <div class="lst-card row">
        <div
          v-for="(item, index) in listData.filter(
            (x) => x.department.name === 'Shopping'
          )"
          :key="index"
          class="card-item col-lg-3"
        >
          <nuxt-link :to="'/shopping/'+item.id">
            <img :src="item.imageLogoSrc" alt="" />
            <b class="card-name">{{ item.name }}</b>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      department: "shopping",
       listData: [],
    };
  },
  created(){
    this.getData();
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.SHOPS_GET_ALL)
        .then((res) => {
          this.listData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};
</script>

<style>
</style>