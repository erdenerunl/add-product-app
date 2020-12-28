<template>
  <div class="container">
    <h2 class="text-center"> Product Tracking App </h2>
    <hr />
    <add-product />
    <br>
    <progress />
    <br>
    <product-container />
  </div>
  
</template>

<script>
import addProduct from './components/addProduct.vue'
import ProductContainer from './components/ProductContainer.vue'
import Progress from './components/Progress.vue'

export default {
  components: {
    addProduct,
    Progress,
    ProductContainer
  }
}
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>
