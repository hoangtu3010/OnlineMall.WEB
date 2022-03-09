<template>
  <div class="bookings-section">
    <div class="header-bookings">
      <div class="container">
        <div class="action-header">
          <nuxt-link to="/"> Back </nuxt-link>
            <nuxt-link to="cinema/payment">Process To Pay</nuxt-link>
          <div class="ticket-info">
            <h4>Aquaman</h4>
            <p>Today</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-bookings">
      <div class="container">
        <div class="screen">
          <img src="~/assets/images/screen.png" alt="" />
        </div>
        <div class="lst-seats">
          <div class="seats-col">
            <div v-for="col in columns" :key="col.value" class="td-custom">
              <span class="txt-tit">{{ col.text }}</span>
            </div>
          </div>

          <div v-for="row in rows" :key="row.value">
            <span class="row-text">{{ row.text }}</span>

            <div class="d-flex justify-content-between">
              <div v-for="col in columns" :key="col.value">
                <input
                  v-model="selected"
                  :value="{ rowId: row.value, colId: col.value }"
                  id="radio-check7"
                  class="form-check-input txt-ipt"
                  type="radio"
                />
                <label class="form-check-label txt-lbl" for="radio-check7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonConst from "@/constants/common";

export default {
  data() {
    return {
      id: this.$route.params.id,
      listData: [],
      selected: {},
      columns: commonConst.CINEMA_COLUMNS,
      rows: commonConst.CINEMA_ROWS,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.SEATS_GET_ALL)
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
.bookings-section {
  background: #333545;
}

.header-bookings {
  background: #2b2d3d;
  padding: 100px 0 50px;
  color: #fff;
}

.main-bookings {
  padding-top: 40px;
  padding-bottom: 100px;
  background: #333545;
  color: #fff;
}

.header-bookings a {
  color: #000;
  text-decoration: none;
  background: #fff;
  border-radius: 15px;
  padding: 5px 15px;
}

.form-select-ticket {
  display: flex;
}

.action-header {
  display: flex;
  justify-content: space-between;
}

.ticket-info {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.screen {
  border-bottom: 1px solid #ddd;
}

.screen img {
  width: 100%;
}

.seats-col {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}

.row-text {
  position: absolute;
  left: 45px;
}
</style>