<template>
  <div class="row">
    <div class="card offset-2 col-md-3">
      <div class="card-body text-center d-flex align-items-center flex-column">
        <img height="128" class="image-responsive text-center mb-3" 
        :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage" 
        alt="default" />
        <input class="form-control" type="file" style="display: none" ref="file" 
        @change="onChange($event)" />
        <button class="btn btn-outline-secondary" 
        @click="$refs.file.click()" type="button">Choose Image</button>
      </div>
    </div>
    <div class="col-md-5">
      <div class="col-md-11 card">
        <div class="card-body">
          <div class="form-group">
            <label>Product Name</label>
            <input type="text" v-model="product.title" class="form-control" placeholder="Product name..." />
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label>Number of Product</label>
              <input type="text" v-model="product.count" class="form-control" placeholder="Number of products" />
            </div>
            <div class="form-group col-md-6">
              <label>Price</label>
              <input type="text" v-model="product.price" class="form-control" placeholder="Price of products" />
            </div>
          </div>
          <button @click="addProduct" class="btn btn-outline-info btn-block">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: null,
        count: null,
        price: null,
        selectedImage: null,
      },
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
    },
  },
};
</script>


<style scoped>
</style>
