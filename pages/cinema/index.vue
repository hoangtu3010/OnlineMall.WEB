<template>
  <div>
    <section-slider-banner :department="department" />
    <div class="container">
      <h2 class="title-department text-center">
        <b>MOVIES</b>
        <span>WHAT’S ON THE SCREEN TODAY</span>
      </h2>
      <div class="lst-movies row">
        <div v-for="(item, index) in listData" :key="index" class="movie-item col-lg-3">
          <nuxt-link :to="'/cinema/' + item.id">
            <div class="movie-image">
              <img :src="item.movies.imageSrc" alt="" />
              <b-icon class="quality-icon" icon="badge4k-fill"></b-icon>
              <b-icon class="subtitle-icon" icon="badge-cc-fill"></b-icon>
              <nuxt-link class="movie-booking-button btn" :to="{ path: '/cinema/bookings', query: { id: item.movies.id,movieToday:item.id }}"
                >Booking Now</nuxt-link
              >
            </div>
            <h4 class="movie-title">{{item.movies.name}}</h4>
            <p class="movie-duration">{{item.movies.duration}}</p>
          </nuxt-link>
        </div>
      </div>
      <div class="department-description">
        <p>What does a perfect movie theater look like?Like this!</p>
        <p>
          Sessions start every 15 minutes, and if you do, you'll always be there
          in time.
        </p>
        <p>
          Every Wednesday - Audience Day, Thursday - night premieres for those
          who think sleeping in is boring.
        </p>
        <p>
          Large room for 400 spectators with a screen nearly 18 meters and 4K
          technology, which is twice as good as HD and Dolby Atmos sound system.
        </p>
        <p>
          Here you can find every genre you can imagine, from Hollywood to
          European, from blockbusters to hit art, to film festivals, to star
          shows and presentations, and celebrities.
        </p>
        <p>
          There is also an 18-seat VIP lounge for those who want to watch movies
          comfortably, a popcorn bar, a fresh juice bar, a cinema counter and a
          wardrobe for your convenience.
        </p>
        <p>Service online booking on the website.</p>
        <p>
          In short, everything you want from a cinema is here at City Cinemas.
          So welcome to the city of movies that embody moviegoers' dreams!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      department: "cinema",
      listData: [],
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.MOVIES_TODAY_GET_ALL)
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
<style scoped>
.lst-movies {
  border-bottom: 1px solid #ccc;
}

.movie-item {
  text-align: center;
  margin: 20px 0;
}

.movie-item:hover a {
  text-decoration: none;
}

.movie-item .movie-image {
  height: 350px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
}

.movie-item .movie-image .quality-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 25px;
  color: #fa6426;
}

.movie-item .movie-image .subtitle-icon {
  position: absolute;
  top: 50px;
  right: 20px;
  font-size: 25px;
  color: #fa6426;
}

.movie-item .movie-image .movie-booking-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -700%);
  background: #fff;
  border-radius: 20px;
  transition: 0.3s;
  font-weight: 700;
}

.movie-item:hover .movie-image .movie-booking-button {
  transform: translate(-50%, -50%);
}

.movie-item .movie-image .movie-booking-button:hover {
  background: #b956fe;
  color: #fff;
}

.movie-item:hover .movie-image img {
  filter: blur(1px);
  -webkit-filter: blur(1px);
}

.movie-item .movie-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie-item .movie-title {
  padding: 10px 0;
  color: #000;
  font-weight: 600;
  margin-bottom: 0 !important;
  transition: 0.3s;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-item:hover .movie-title {
  color: #b956fe;
}

.movie-item .movie-duration {
  color: #fff;
  font-weight: 600;
  background: #b956fe;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 0;
  transition: 0.3s;
}
</style>