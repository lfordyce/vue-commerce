<template>
  <md-tabs>

    <md-tab id="home" md-label="Home">
      <router-link
        to="home"
        class="nav-item nav-link"
        active-class="active"
        exact
        >
        Home
      </router-link>
    </md-tab>

    <md-tab id="mangage-products" md-label="Manage Products">
      <router-link
        to="mangage-products"
        class="nav-item nav-link"
        active-class="active"
        exact
        >
        Manage Products
      </router-link>
    </md-tab>

  </md-tabs>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
