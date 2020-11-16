<template>
  <div id="app" class="container">
    <Product 
      v-for="product in products" 
      :product="product" 
      :key="product.id" 
      @products="getProducts"
    />
  </div>
</template>

<script>
import Product from "./components/product";
import axios from "axios";
export default {
  name: 'App',
  data() {
    return {
      products: [
        
      ]
    }
  },
  mounted () {
    axios.get('http://localhost:8081/api/products').then(res => {
      this.products = res.data
    })
  },
  methods: {
    getProducts (data) {
      this.products = data
    }
  },
  components: {
    Product
  }
}
</script>

<style>
.container {
  margin-left: 10%;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5%;
  text-align: center;
}
</style>