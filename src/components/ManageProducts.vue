<template>
  <div id="section">
    <md-card md-with-hover id="card">
      <save-product-form
        :product="productInForm"
        @submit="onFormSave"
        @cancel="resetProductInForm"
      ></save-product-form>
    </md-card>
    <md-card md-with-hover id="card">
      <product-list
        :products="products"
        @edit="onEditClicked"
        @remove="onRemoveClicked"
      ></product-list>
    </md-card>
  </div>
</template>

<script>
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'
import { mapGetters, mapActions } from 'vuex'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null
    }
  }
}
export default {
  components: {
    ProductList,
    SaveProductForm
  },
  data: initialData,
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: {
    ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
    onFormSave (product) {
      // with VUEX:
      this.saveProduct(product)
      // refresh the form
      this.resetProductInForm()
    },
    onRemoveClicked (productId) {
      // with VUEX:
      this.deleteProduct(productId)

      if (productId === this.productInForm.id) {
        this.resetProductInForm()
      }
    },
    onEditClicked (product) {
      // since objects are passed by reference we need to clone the object
      // either by using Object.asign({}, product), or by using
      // object spread operator
      this.productInForm = { ...product }
    },
    resetProductInForm () {
      this.productInForm = initialData().productInForm
    }
  }
}
</script>

<style>
#section {
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
}
#card {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
