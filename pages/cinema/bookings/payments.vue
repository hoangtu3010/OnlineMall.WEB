<template>
  <div class="row">
    <div class="col-md-6">
      <label for="">name</label>
      <input type="text" v-model="dataForm.name" />
      <br />
      <label for="">Phone</label>
      <input type="phone" v-model="dataForm.phone" />
      <br />
      <label for="">Email</label>
      <input type="email" v-model="dataForm.email" />
    </div>
    <div class="col-md-6">
      <div v-if="!paidFor">
        <h1>Buy this ticket - ${{ product.price }} USD</h1>

        <p>{{ objValue.description }}</p>
      </div>

      <div v-if="paidFor">
        <h1>Noice, you bought a beautiful lamp!</h1>
      </div>

      <div ref="paypal"></div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: "empty",
  data: function () {
    return {
      id: this.$route.query.id,
      objValue: {},
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
  },
  methods: {
    booking(data) {
      return this.$axios
        .post(this.$api.BOOKING_CREATE, data)
        .then((res) => {
          this.$toast.success("Paid!");
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

            console.log(order);
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