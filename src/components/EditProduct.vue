<template>
  <div class="inner-block-1">
    <h1>แก้ไขข้อมูลสินค้า</h1>
    <input type="hidden" id="uname" v-model="uname" class="form-control form-control-lg" />
    <input type="hidden" id="product_id" v-model="product_id" class="form-control form-control-lg" />

      <div>
        <b-input-group prepend="รหัสสินค้า" class="mb-2">
          <b-form-input aria-label="รหัสสินค้า" v-model="productCode"></b-form-input>
        </b-input-group>
      </div>
  
      <div>
        <b-input-group prepend="บาร์โค้ด" class="mb-2">
          <b-form-input aria-label="บาร์โค้ด" v-model="productBarcame"></b-form-input>
        </b-input-group>
      </div>
  
      <div>
        <b-input-group prepend="ชื่อสินค้า" class="mb-2">
          <b-form-input aria-label="ชื่อสินค้า" v-model="productName"></b-form-input>
        </b-input-group>
      </div>

      <div>
        <b-input-group prepend="รายละเอียด" class="mb-2">
          <b-form-input aria-label="รายละเอียด" v-model="productDetail"></b-form-input>
        </b-input-group>
      </div>

      <div>
        <b-input-group prepend="B" append=".00">
          <b-form-input type="number" v-model="productPrice"></b-form-input>
        </b-input-group>
      </div>

      <div class="btn btn-outline-primary nav-link pr-3 p-2 ml-2 mt-3" @click="saveProduct">
        <img src="../assets/imgs/addnew.png" width="40px" height="40px" class="ml-2" />
      </div>
    </div>

</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
  data() {
    return {
      id: "",
      product_id:"",
      productCode: "",
      productBarcame: "",
      productName: "",
      productDetail: "",
      productPrice: "",
      items:[],
    };
  },
  created() {
    this.items=JSON.parse(this.$route.params.data)
    this.uname=this.$route.params.uname
    this.product_id=this.items.product_id
    this.productCode=this.items.product_code
    this.productBarcame=this.items.product_barcode
    this.productName=this.items.product_name
    this.productDetail=this.items.product_detail
    this.productPrice=this.items.product_price
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://phc.dyndns.biz:8088/updateproducts", {
          product_id: this.product_id,
          product_code: this.productCode,
          product_barcode: this.productBarcame,
          product_name: this.productName,
          product_detail: this.productDetail,
          product_price: this.productPrice,
        });
        this.productCode = "";
        this.productBarcame = "";
        this.productName = "";
        this.productDetail = "";
        this.productPrice = "";
        this.$router.push("/product/"+this.uname);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>