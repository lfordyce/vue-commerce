<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">Product List</h1>
    </md-toolbar>
    <!-- <md-table-alternate-header md-selected-label="selected">
      <md-button class="md-icon-button">
        <md-icon>delete</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>edit</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-table-alternate-header> -->
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
            <!-- <md-icon v-if="columnIndex === 'price'" md-iconset="fa fa-btc" class="fa fa-btc" aria-hidden="true"></md-icon> -->
            <md-button class="md-icon-button" v-if="columnIndex === 'price'" @click.native.stop="onRemove(product)">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
        <md-table-row v-if="!products.length">
          <md-table-cell>
            <strong>You should add some products!</strong>
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
    onRemove: function (data) {
      console.log(data)
      this.$emit('remove', data)
    },
    onEdit: function (data) {
      this.$emit('edit', data)
    }
  }
}
</script>

<style>
</style>
