<template>
  <div class="payment-section">
    <div class="payment-header">
      <div class="container d-flex justify-content-between">
        <button @click="$router.go(-1)" class="btn">Back</button>
        <h2 style="color: #fff">{{objValue.name}}</h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="movies-card-info">
            <p>
              <b>Date:</b>
              <span>{{ formatDate(moviesTodayObj.showDate) }}</span>
            </p>
            <p>
              <b>Time:</b>
              <span>{{ formatDate(moviesTodayObj.showTime, "HH:mm") }}</span>
            </p>
            <p><b>Theater:</b> <span>OnlineMall</span></p>
            <p>
              <b>Seats:</b> <span>{{ product.rank }} - {{ product.name }}</span>
            </p>
          </div>
          <div class="movie-banner">
            <img :src="objValue.imageSrc" alt="" />
          </div>
        </div>
        <div class="col-md-4">
          <div v-if="!paidFor">
            <h2 class="text-center">Buy this ticket</h2>
          </div>

          <form action="">
            <div class="form-group">
              <label for="">Name</label>
              <input type="text" v-model="dataForm.name" class="form-control" />
            </div>
            <div class="form-group">
              <label for="">Phone</label>
              <input
                type="phone"
                v-model="dataForm.phone"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input
                type="email"
                v-model="dataForm.email"
                class="form-control"
              />
            </div>
          </form>

          <div v-if="paidFor">
            <h3>Your ticket has been emailed, thank you for using the service!</h3>
          </div>

          <div ref="paypal"></div>
        </div>
        <div class="col-md-4">
          <div class="booking-summary">
            <div class="booking-summary-header">
              Booking Summary
            </div>
            <div class="booking-summary-content">
              <p><b>{{objValue.name}}</b><span>${{ product.price }}</span></p>
              <p><b>{{product.name}} ( {{product.rank}} )</b><span>{{product.rank === 'vip' ? '$10' : '0$'}}</span></p>
            </div>
            <div class="booking-footer">
              <p><b>Total: </b> <span>${{product.price}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data: function () {
    return {
      id: this.$route.query.id,
      objValue: {},
      moviesTodayObj: {},
      dataForm: {
        moviesTodayId: this.$route.query.movieToday,
        seatsId: this.$route.query.seatsId,
      },
      loaded: false,
      paidFor: false,
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg",
      },
    };
  },
  watch: {
    paidFor() {},
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AUj5MRAcn-XQGNkksByNjOs6jND6Qn8fi2g_NuATvj0_sJZSDGBFVj5zg65600RO3BiCejQR_zOwNe9G";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    setTimeout(() => {
      this.getDisableSeats();
    }, 1000);
  },
  created() {
    this.getMovie();
    this.getSeat();
    this.getMovieToday();
  },
  methods: {
    booking(data) {
      return this.$axios
        .post(this.$api.BOOKING_CREATE, data)
        .then((res) => {
          this.$toast.success("Your ticket has been emailed, thank you for using the service!");
          this.$router.push('/cinema')
        })
        .catch((err) => {
          this.$toast.error("Error!");
        });
    },
    getDisableSeats() {
      return this.$axios
        .get(this.$api.SEATS_GET_DISABLED, {
          params: { movieToday: this.movieToday },
        })
        .then((res) => {
          if (res.data.includes(this.product)) {
            this.$toast.error("This ticket was paid");
            this.$router.back();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMovie() {
      return this.$axios
        .get(this.$api.MOVIES_GET_BY_ID + this.id)
        .then((res) => {
          this.objValue = { ...res.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMovieToday() {
      return this.$axios
        .get(this.$api.MOVIES_TODAY_GET_BY_ID + this.$route.query.movieToday)
        .then((res) => {
          this.moviesTodayObj = { ...res.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSeat() {
      return this.$axios
        .get(this.$api.SEATS_GET_BY_ID + this.dataForm.seatsId)
        .then((res) => {
          this.product = { ...res.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            if (!this.dataForm.email) {
              this.$toast.error("Email is validate!");
              return;
            }
            return actions.order.create({
              purchase_units: [
                {
                  description: "Buy movie ticket",
                  amount: {
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            if (order.status == "COMPLETED") {
              this.dataForm.total = this.product.price;
              this.booking(this.dataForm);
            } else {
              this.$toast.error("Error!");
            }
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>
<style scoped>
.payment-header {
  background: #333545;
  padding: 50px 0;
  margin-bottom: 40px;
}

.payment-header button{
  background: #fff;
}

.movies-card-info {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px 20px;
  border-radius: 5px;
}

.movies-card-info p span {
  float: right;
}

.movie-banner {
  height: 250px;
  margin: 40px 0;
}

.movie-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.booking-summary {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.booking-summary-header {
  background: #333545;
  padding: 12px 20px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
}

.booking-summary-content{
  padding: 30px;
  border-bottom: 1px dashed #000;
}

.booking-summary p span{
  float: right;
}

.booking-footer{
  padding: 30px;
}
</style>