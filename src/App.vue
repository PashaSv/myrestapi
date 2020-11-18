<template>
  <div id="app" class="container">
    <Product 
      v-for="product in products" 
      :product="product" 
      :key="product.id" 
      @products="getProducts"
    />

    <form @submit.prevent="addProduct">
      <input v-model="name" type="text" placeholder="input name" required>
      <input v-model="text" type="text" placeholder="input text" required>
      <button type="submit">Send</button>
    </form>
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
        
      ],
      name: '',
      text: '',
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
    },
    addProduct () {
      let product = {
        name: this.name,
        text: this.text
      }
      axios.post('http://localhost:8081/api/products', product)
      .then(res => {
        this.name = ''
        this.text = ''
        this.products = res.data
      })
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