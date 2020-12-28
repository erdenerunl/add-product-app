<template>
  <h3 class="text-center">Your Products</h3>
  <hr />
  <div class="row product-container">
    <product-item v-for="product in productList" :key="product">
      <img class="card-img-top" src="../assets/default.png" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title"> {{ product.title }} </h5>
        <small> <strong> Number : </strong> {{ product.count }} </small>
        <br />
        <small> <strong>Price : </strong> {{ product.price }} </small>
        <br />
        <small> <strong>Total Price : </strong> {{ product.totalPrice }} </small>
      </div>
    </product-item>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.emitter.on("addProduct", (product) => {
      this.productList.push(product);
    });
  },
};
</script>

<style>
</style>