import uuid from 'uuid'

import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from './mutation-types'

export function saveProduct ({commit, state}, product) {
  const index = state.all.findIndex((p) => p.id === product.id)

  // update product if it exists or create if if it doesn't
  if (index !== -1) {
    // We need to replace the array entirley so that vue can recognize
    // the change and re-render entirley.
    // state.all.splice(index, 1, product)
    commit(UPDATE_PRODUCT, product)
  } else {
    // Generate an id using the third-party lib 'uuid'
    product.id = uuid.v4()
    // add it to the product list
    // state.all.push(product)
    commit(CREATE_PRODUCT, product)
  }
}

export function deleteProduct ({commit}, productId) {
  // const index = state.all.findIndex((p) => p.id === productId)
  // this.products.splice(index, 1)
  //
  // if (this.products.id === this.productInForm.id) {
  //   this.resetProductInForm()
  // }
  commit(DELETE_PRODUCT, productId)
}
