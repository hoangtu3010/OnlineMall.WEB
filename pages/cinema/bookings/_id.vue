<template>
  <div class="bookings-section" :key="keyLoad">
    <div class="header-bookings">
      <div class="container">
        <div class="action-header">
          <nuxt-link to="/"> Back </nuxt-link>
          <nuxt-link
            v-if="selected.id"
            :to="{
              path: 'bookings/payments',
              query: { id, movieToday, seatsId: selected.id },
            }"
          >
            Pay
          </nuxt-link>

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

            <div class="seats-display d-flex justify-content-between">
              <div v-for="col in columns" :key="col.value">
                <font-awesome-icon
                  @click="selectedSeats(row.value, col.value)"
                  icon="fa-solid fa-couch"
                  style="font-size: 2rem; cursor: pointer"
                  :class="seatsColor(row.value, col.value)"
                />
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
      id: this.$route.query.id,
      movieToday: this.$route.query.movieToday,
      listData: [],
      listDisable: [],
      keyLoad:0,
      selected: {},
      columns: commonConst.CINEMA_COLUMNS,
      rows: commonConst.CINEMA_ROWS,
    };
  },
  watch: {},
  created() {
    this.getData();
    this.getDisableSeats();

    console.log(this.$route, "asdas");
  },
  mounted() {
    setTimeout(() => {
      this.getDisableSeats();
      if (this.listDisable.includes(this.selected)) {
        this.$toast.error("This ticket is paid");
        this.keyLoad++
      }
    }, 200);
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
    getDisableSeats() {
      return this.$axios
        .get(this.$api.SEATS_GET_DISABLED, {
          params: { movieToday: this.movieToday },
        })
        .then((res) => {
          this.listDisable = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    seatsColor(row, col) {
      if (this.selected.row == row && this.selected.column == col) {
        return "seats-selected";
      }

      var find = this.listData.find((x) => x.row == row && x.column == col);
      var disabled = this.listDisable.find(
        (x) => x.row == row && x.column == col
      );
      if (find && !disabled) return "seats-default";

      return "seats-disabled";
    },
    selectedSeats(row, col) {
      var find = this.listData.find((x) => x.row == row && x.column == col);
      if (this.selected == find) {
        this.selected = {};
        return;
      }
      this.selected = find;
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

.seats-display {
  margin: 20px;
}

.seats-default {
  color: #fff;
}

.seats-selected {
  color: #f17bde;
}

.seats-disabled {
  color: rgb(75, 75, 75);
  pointer-events: none;
}
</style>