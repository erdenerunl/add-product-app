<template>
  <h3 class="text-center">Your Products</h3>
  <hr />
  <div class="row product-container">
    <product-item v-for="product in productList" :key="product" >
      <img class="card-img-top" src="../assets/default.png" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <small> <strong>Adet : </strong> 1 </small>
        <br />
        <small> <strong>Fiyat : </strong> 10 </small>
        <br />
        <small> <strong>Tutar : </strong> 10 </small>
      </div>
    </product-item>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  data(){
      return {
          productList : []
      }
  }
};
</script>

<style>
</style>