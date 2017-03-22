<template>
  <!-- <manage-products></manage-products> -->
  <div>
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import ManageProducts from './components/ManageProducts'
import AppNav from './components/AppNav'

// export default {
//   name: 'app',
//   components: {
//     ManageProducts
//   }
// }
export default {
  components: {
    AppNav
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
