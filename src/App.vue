<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div> -->
  <!-- <product-list></product-list> -->
  <manage-products></manage-products>
</template>

<script>
// import Hello from './components/Hello'
// import ProductList from './components/ProductList'
import ManageProducts from './components/ManageProducts'

export default {
  name: 'app',
  components: {
    ManageProducts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
