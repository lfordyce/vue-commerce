<template >
  <md-card id="catalog">
    <section>
      <ul v-for="product in products" track-by-id>
        <li>{{product.name}}</li>
      </ul>
    </section>
  </md-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    products: 'getProducts'
  })
}
</script>

<style>
#catalog {
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
}
#card {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
