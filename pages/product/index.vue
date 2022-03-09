<template>
  <div class="product-section container">
    <div class="row">
      <div class="lst-product col-lg-9">
        <div class="row">
          <div v-for="item in listData" :key="item.id" class="col-lg-4">
            <div class="product-box">
              <div class="product-image">
                <img :src="item.imageSrc" alt="" />
              </div>
              <div class="product-info">
                <h5>{{item.name}}</h5>
                <p><nuxt-link to="/">{{item.category.name}}</nuxt-link></p>
                <span>{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="search-section">
          <h4 class="indexing">Search Product</h4>
          <div class="form-search">
            <input v-model="searchData.name" type="text" class="form-control" />
            <button>
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>
        <div class="category-section">
          <h4 class="indexing">Product Category</h4>
          <nuxt-link v-for="item in categoryData" :key="item.id" to="/category">{{item.name}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: {
        name: '',
        category: 0
      },
      listData: [],
      categoryData: []
    };
  },
  created() {
    this.getData();
    this.getCategory()
  },
  methods: {
    getData() {
      return this.$axios
        .get(this.$api.PRODUCTS_GET_ALL)
        .then((res) => {
          this.listData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCategory() {
      return this.$axios
        .get(this.$api.CATEGORIES_GET_ALL)
        .then((res) => {
          this.categoryData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.product-section {
  padding: 100px 0;
}

.lst-product {
  display: flex;
}

.product-box .product-image {
  width: 100%;
  height: 200px;
}

.product-box .product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.product-box .product-info {
  padding: 15px;
  background-color: #f7f6f6;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.product-box .product-info h5 {
  text-transform: uppercase;
  font-weight: 700;
}

.product-box .product-info p a {
  text-decoration: none;
  color: #000;
}

.indexing {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
}

.search-section {
  padding: 0 0 30px 0;
  border-bottom: 1px solid #c71c81;
}

.form-search {
  margin: 20px 0;
  position: relative;
}

.form-search input:focus {
  box-shadow: none;
}

.form-search button {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: unset;
  border: unset;
}

.category-section {
  padding: 40px 0 20px 0;
  border-bottom: 1px solid #c71c81;
  display: flex;
  flex-direction: column;
}

.category-section a {
  text-decoration: none;
  color: #000;
  transition: 0.2s;
  padding: 10px 0;
}

.category-section a:hover {
  color: #cb2d8a;
}
</style>