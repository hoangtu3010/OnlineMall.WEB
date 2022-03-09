<template>
  <div>
    <section-slider-banner :department="department" />
    <div class="container">
      <h2 class="title-department text-center">
        <b>OUR SERVICES</b>
        <span>SOME AWESOME THINGS WE DO</span>
      </h2>
      <div class="lst-card row">
        <div
          v-for="(item, index) in listData.filter(
            (x) => x.department.name === 'Dinning'
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
      department: "dinning",
      listData: [],
    };
  },
  created() {
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
  },
};
</script>

<style>
</style>