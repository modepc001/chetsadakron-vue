<template>
    <div class="vue-tempalte">
        <header>
          <img src="../assets/imgs/header01.png" width="100%" height="350">
        </header>
        <div id='vueapp'>
          <div class="active-cyan-4 mb-3 mt-3" style="margin: 20px;">

          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="search" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" v-on:click="getProducts()">ค้นหา</button>
            </div>
          </div>

        </div>
        
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" v-for="item in items" :key="item.product_id">
                  <div class="card mb-3 ml-1" style="margin-top: 20px;margin-left: 20px; width: 18rem;">
                    <img class="card-img-top" src="../assets/imgs/apple.jpg" style="margin-top: 20px;margin-left: 60px; height: 10rem; width: 10rem;" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.product_name }}</h5>
                      <p class="card-text">{{ item.product_detail }}</p>
                      <a href="#" v-on:click="sweetAlert()" class="btn btn-primary">{{ item.product_price }} บาท</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
</template>



<script>
import axios from "axios";
 
export default {
  name: "ProductList",
  data() {
    return {
      search:'',
      items: [],
    };
  },
 
  created() {
    this.getProducts();
  },
 
  methods: {
    // Get All Products
    async getProducts() {
      try {
        console.log(this.search)
        const response = await axios.post("http://phc.dyndns.biz:8088/products", { product_name: this.search });
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    sweetAlert() {
                this.$swal({
          title: 'Are you sure?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Deleted', 'You successfully deleted this file', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
    }
  },
};
</script>