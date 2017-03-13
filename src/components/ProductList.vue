<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">Product List</h1>
    </md-toolbar>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head>Description</md-table-head>
          <md-table-head>Price</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="product in products" :key="product.id" @click="onEdit(product)">
          <md-table-cell>{{product.name}}</md-table-cell>
          <md-table-cell>{{product.description}}</md-table-cell>
          <md-table-cell>{{product.price}}:-</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    onEdit (product) {
      this.$emit('edit', product)
    }
  }
}
</script>

<style>
</style>
