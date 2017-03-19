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
        <md-table-row v-for="(product, rowIndex) in products"
          :key="product.id"
          :md-item="product"
          md-auto-select
          md-selection
          @click.native="onEdit(product)">
          <md-table-cell v-for="(column, columnIndex) in product" :key="columnIndex" v-if="columnIndex !== 'id'">
            {{column}}
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    onEdit: function (data) {
      this.$emit('edit', data)
    }
  }
}
</script>

<style>
</style>
