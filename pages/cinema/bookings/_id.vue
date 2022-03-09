<template>
  <div class="bookings-section">
    <div class="header-bookings">
      <div class="container">
        <div class="action-header">
          <nuxt-link to="/"> Back </nuxt-link>
          <div>
              <div v-if="!paidFor">
            <h1>Buy this ticket</h1>
          </div>

          <div v-if="paidFor">
            <h1>{{textPay}}</h1>
          </div>

          <div ref="paypal"></div>
          </div>
        
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
                <font-awesome-icon @click="selectedSeats" icon="fa-solid fa-couch" class="seats-selected" style="font-size: 2rem; cursor: pointer;"/>
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
      textPay:'',
      loaded: false,
      paidFor: false,
      product: {
        price: 555.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg"
      },
      columns: commonConst.CINEMA_COLUMNS,
      rows: commonConst.CINEMA_ROWS,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AUj5MRAcn-XQGNkksByNjOs6jND6Qn8fi2g_NuATvj0_sJZSDGBFVj5zg65600RO3BiCejQR_zOwNe9G";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
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
    setLoaded () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
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
            if(order.status =="COMPLETED" ){
              this.textPay="Thanks you very much!,Check your mail to get your ticket"
              
            }else{
              this.textPay="Opp! Has error!"

            }
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    selectedSeats(){
      alert('seats')
    }
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

.seats-display{
  margin: 20px;
}

.seats-default{
  color: #fff;
}

.seats-selected{
  color: #f17bde;
}

.seats-disabled{
  color: #ccc;
}
</style>