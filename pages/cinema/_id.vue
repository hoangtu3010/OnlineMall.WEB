<template>
  <div class="movies-detail-section container">
    <div class="row">
      <div
        class="col-lg-4"
        style="    display: flex;
    flex-direction: column;
    align-items: center;
}"
      >
        <div class="movies-image">
          <img :src="objValue.movies.imageSrc" alt="" />
          <!-- {{objValue.movies}} -->
        </div>
        <div class="movies-info">
          <b>Genre:</b>
          <p>{{ genreValue.name }}</p>
          <b>Duration:</b>
          <p>{{ objValue.movies.duration }}</p>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="movies-content">
          <div class="movies-title">
            <div class="movies-title-top">
              <h1>{{ objValue.movies.name }}</h1>
              <!-- <nuxt-link :to="'/cinema/bookings/'+objValue.movies.id+'&'+movieToday:objValue.id" class="btn" -->
              <nuxt-link :to="{ path: 'bookings', query: { id: objValue.movies.id,movieToday:objValue.id }}" class="btn"
                ><font-awesome-icon icon="fa-solid fa-ticket" /><span
                  >Bookings Now</span
                ></nuxt-link
              >
            </div>
            <span>17:00 19:00 23:00</span>
          </div>
          <div class="movies-description">
            {{ objValue.movies.description }}
          </div>
          <div class="movies-trailer">
            <h3>Official Video</h3>

            <div v-html="objValue.movies.trailer"></div>
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
      objValue: {movies:{}},
      genreValue: {},
      key: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.MOVIES_TODAY_GET_BY_ID + this.id)
        .then((res) => {
          this.objValue = { ...res.data };
          console.log(this.objValue)
          this.getGenre()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getGenre() {
      return this.$axios
        .get(this.$api.GENRES_GET_BY_ID + this.objValue.movies.genreId)
        .then((res) => {
          this.genreValue = { ...res };
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.movies-detail-section {
  padding: 100px 0;
}

.movies-image {
  width: 300px;
  height: 400px;
}

.movies-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.movies-info {
  text-align: center;
  margin-top: 20px;
}

.movies-info b {
  font-size: 20px;
}

.movies-content .movies-title {
  padding-bottom: 20px;
  border-bottom: 1px solid #c71c81;
}

.movies-content .movies-title .movies-title-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movies-content .movies-title .movies-title-top a {
  background-color: #d23497;
  color: #fff;
  align-self: center;
  transition: 0.3s;
  border-radius: 15px;
}

.movies-content .movies-title .movies-title-top a svg {
  margin-right: 15px;
  font-size: 25px;
  vertical-align: middle;
}

.movies-content .movies-title .movies-title-top a:hover {
  transform: scale(0.95);
  background-color: #ff00d6;
}

.movies-content .movies-title h1 {
  font-weight: 700;
}

.movies-content .movies-title > span {
  background: #c71c81;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
}

.movies-content .movies-description {
  padding: 30px 0;
  border-bottom: 1px solid #c71c81;
}

.movies-content .movies-trailer {
  padding: 30px 0;
}

.movies-trailer h3 {
  font-weight: 700;
  margin-bottom: 30px;
}
</style>