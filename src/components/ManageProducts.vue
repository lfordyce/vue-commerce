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
      ></product-list>
    </md-card>
  </div>
</template>

<script>
import uuid from 'uuid'
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null
    },
    products: [
      {
        id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
        name: 'COBOL 101 vintage',
        description: 'Learn COBOL with this vintage programming book',
        price: 399
      },
      {
        id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
        name: 'Sharp C2719 curved TV',
        description: 'Watch TV like never before with the brand new curved ' +
          'screen technology',
        price: 1995
      },
      {
        id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
        name: 'Remmington X mechanical keyboard',
        description: 'Excellent for gaming and typing, this Remmington X ' +
          'keyboard features tactile, clicky switches for speed and accuracy',
        price: 595
      }
    ]
  }
}
export default {
  components: {
    ProductList,
    SaveProductForm
  },
  data: initialData,
  methods: {
    onFormSave (product) {
      const index = this.products.findIndex((p) => p.id === product.id)

      // update product if it exists or create if if it doesn't
      if (index !== -1) {
        // We need to replace the array entirley so that vue can recognize
        // the change and re-render entirley.
        this.products.splice(index, 1, product)
      } else {
        // Generate an id using the third-party lib 'uuid'
        product.id = uuid.v4()
        // add it to the product list
        this.products.push(product)
      }
      // refresh the form
      this.resetProductInForm()
    },
    resetProductInForm () {
      this.productInForm = initialData().productInForm
    },
    onEditClicked (product) {
      // since objects are passed by reference we need to clone the object
      // either by using Object.asign({}, product), or by using
      // object spreak operator
      this.productInForm = { ...product }
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
