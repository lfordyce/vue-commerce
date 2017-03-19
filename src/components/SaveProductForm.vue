<template>
    <md-card>
      <md-toolbar class="md-transparent">
        <h1 class="md-title">Form</h1>
      </md-toolbar>
      <form id="form">
        <md-input-container>
          <!-- <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.name }]"> -->
            <label>Product Name</label>
            <md-input type="text" v-model="product.name" maxlength="20"></md-input>
            <!-- <div class="form-control-feedback" v-if="formErrors.name">{{formErrors.name}}</div> -->
          <!-- </div> -->
        </md-input-container>
        <md-input-container>
          <label>Product Description</label>
          <md-textarea v-model="product.description" maxlength="128"></md-textarea>
        </md-input-container>
        <md-input-container>
          <!-- <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.price }]"> -->
            <label>Price</label>
            <md-input type="number" v-model="product.price"></md-input>
            <md-icon>attach_money</md-icon>
            <!-- <div class="form-control-feedback" v-if="formErrors.price">{{formErrors.price}}</div> -->
          <!-- </div> -->
        </md-input-container>
        <md-button class="md-raised md-primary" @click.native="onSubmit()">{{product.id ? 'Update' : 'Add'}} Product</md-button>
        <md-button class="md-raised md-accent" v-if="product.id" @click.native="onCancel()">Cancel</md-button>
      </form>
    </md-card>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      formErrors: {}
    }
  },
  created () {
    this.$watch('product.id', () => {
      this.formErrors = {}
    })
  },
  methods: {
    // validateForm () {
    //   const errors = {}
    //
    //   if (!this.product.name) {
    //     errors.name = 'Name is required'
    //   }
    //
    //   if (!this.product.price) {
    //     errors.price = 'Price is required'
    //   }
    //
    //   this.formErrors = errors
    //
    //   return Object.keys(errors).length === 0
    // },
    onCancel () {
      this.formErrors = {}
      this.$emit('cancel')
    },
    onSubmit () {
      // if (this.validateForm()) {
      // }
      this.$emit('submit', this.product)
    }
  }
}
</script>

<style>
#form {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
