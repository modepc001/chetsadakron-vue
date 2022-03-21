<template>
    <div class="vue-tempalte" style="background-color: #ffffff;">
      <header>
            <img src="../assets/imgs/header01.png" width="100%" height="350">
      </header>
      
      <div style="margin: 20px;">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="search" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" v-on:click="getProducts()">ค้นหา</button>
              </div>
            </div>
      
            <!-- <input type="text" id="uname" v-model="uname" class="form-control form-control-lg" /> -->

            <table class="table is-striped is-bordered mt-2 is-fullwidth">
              <thead>
                <tr>
                  <th>รหัสสินค้า</th>
                  <th>บาร์โค้ด</th>
                  <th>ชื่อสินค้า</th>
                  <th>ราคา</th>
                  <th>รายละเอียด</th>
                  <th class="has-text-centered" style="width:220px">
                    <div class="btn btn-outline-primary nav-link pr-3 p-2 ml-2" @click="addProduct">
                      <img src="../assets/imgs/addnew.png" width="40px" height="40px" class="ml-2" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="item.product_id">
                  <td>{{ item.product_code }}</td>
                  <td>{{ item.product_barcode }}</td>
                  <td>{{ item.product_name }}</td>
                  <td>{{ item.product_price }}</td>
                  <td>{{ item.product_detail }}</td>
                  <td >

                    <div class="row">

                      <div class="col"><img src="../assets/imgs/edit.png" width="40px" height="40px" class="ml-2" @click="editProduct(index)" /></div>
                      <div class="col"><img src="../assets/imgs/uploadfile.png" width="40px" height="40px" class="ml-2" @click="uploadProduct(index)" /></div>
                      <div class="col"><img src="../assets/imgs/recycle-bin.png" width="40px" height="40px" @click="deleteProduct(item.product_id,item.product_code,item.product_name)" /></div>

                    </div>

                  </td>
                </tr>
              </tbody>
            </table>
      </div>
      
      <div>
        <b-modal ref="my-modal" hide-footer title="ลบข้อมูล">
          <div class="row">
            <div class="d-block text-center">
              <h3>คุณต้องการลบข้อมูลนี้ใช่หรือไม่...!</h3>
            </div>
            <div class="d-block text-center">
              <h5>{{ product_code }} : {{ product_name }}</h5>
            </div>
            <input type="hidden" id="product_id" v-model="product_id" class="form-control form-control-lg" />
          </div>
          <hr />
          <div class="row">
              <div class="col flex-column">
                <div class="btn btn-outline-danger nav-link pr-3 p-2 ml-2" @click="hideModal">ยกเลิก</div>
              </div>
              <div class="col flex-column">
                
              </div>
              <div class="col flex-column">
                <div class="btn btn-outline-success nav-link pr-3 p-2 ml-2 align-self-end" @click="toggleModal()">ตกลง</div>
              </div>
          </div>
        </b-modal>
      </div>

      <div style="margin-top:50px">
          <b-modal ref="upload-modal" hide-footer title="อับโหลด ไฟล์...">  
            <div class="container-fluid">
              
              <div>
                <div
                  class="imagePreviewWrapper"
                  :style="{ 'background-image': `url(${previewImage})` }"
                  @click="selectImage">
                </div>
            
                <input
                  ref="fileInput"
                  type="file"
                  @input="pickFile">
              </div>
                
            </div>

            <div class="row mt-3">
                <div class="col flex-column">
                  <div class="btn btn-outline-danger nav-link pr-3 p-2 ml-2" @click="hideModal">ยกเลิก</div>
                </div>
                <div class="col flex-column">
                  
                </div>
                <div class="col flex-column">
                  <div class="btn btn-outline-success nav-link pr-3 p-2 ml-2 align-self-end" @click="toggleModal()">ตกลง</div>
                </div>
            </div>
          </b-modal>
      </div>
    </div>


</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      uname:'',
      search:'',
      product_id:'',
      product_code:'',
      product_barcode:'',
      product_name:'',
      product_price:'',
      product_detail:'',
      items: [],
    };
  },
 
  created() {
    // alert( $session.get('uname') )
    if(this.$route.params.uname!=""){
      this.uname=this.$route.params.uname;
      this.getProducts();
    }else{
      this.$router.push('/')
    }
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
 
    // Delete Product
    async deleteProduct(id,code,name) {
      this.product_id=id
      this.product_code=code
      this.product_name = name
      this.showModal()
    },
    // Add Product
    addProduct() {
      this.$router.push('/add/'+this.uname)
    },
    // Edit Product
    editProduct(index) {
      this.$router.push({
          name: 'edit',
          params: {
              uname: this.uname,
              data: JSON.stringify( this.items[index])
          }
      });
    },
    // upload Product
    uploadProduct(index) {
      this.$refs['upload-modal'].show()
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
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
      this.$refs['upload-modal'].hide()
    },
    async toggleModal() {
      await axios.delete(`http://phc.dyndns.biz:8088/products/${this.product_id}`);
      this.getProducts()
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    selectImage () {
      this.$refs.fileInput.click()
    },
    pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
    }
  },
};

</script>

<style scoped lang="scss">
  .imagePreviewWrapper {
      width: 250px;
      height: 250px;
      display: block;
      cursor: pointer;
      margin: 0 auto 30px;
      background-size: cover;
      background-position: center center;
  }
  
</style>