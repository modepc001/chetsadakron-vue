<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <p v-on:click="home"  class="navbar-brand float-left nav-link pr-3 p-2">Aundamun</p>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <p v-on:click="login" class="btn btn-outline-primary nav-link pr-3 p-2 ml-2">  เข้าสู่ระบบ  </p>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
          <router-view />
      </div>
    </div>

    <div style="margin-top:50px">
        <b-modal ref="my-modal" hide-footer title="เข้าสู่ระบบ....">
                        <div class="form-group">
                            <label>ผู้ใช้</label>
                            <input type="text" id="uname" v-model="uname" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group gap-top mt-2">
                            <label>รหัสผ่าน</label>
                            <input type="password" id="pword" v-model="pword" class="form-control form-control-lg" />
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

export default {
    data() {
        return {
            uname:'',
            pword:'',
        };
    },
    created() {

    },
    methods: {
      home: function (event) {
        this.$router.push('/')
      },
      login: function (event) {
        // this.$router.push('/login')
        this.showModal()
      },
      admin(){
        this.$router.push('/product')
      },
      sweetAlert() {
        this.$swal('Heading', 'this is a Heading', 'OK');        this.$swal({
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
        this.$router.push('/')
      },
      async toggleModal() {
        if( (this.uname!="") && (this.pword!="") ){
          // this.$session.start()
          // this.$session.set('uname', this.uname)
          this.$http.post('http://phc.dyndns.biz:8088/login', {
            uname: this.uname,
            pword: this.pword,
          }).then(response => {
            if( response.body.id > 0 ){
              this.$router.push( '/product/'+response.body.UserName ) 
            }else{
              this.$router.push( '/' ) 
            }
          }, response => {
            console.log( response )
          });
           
          this.uname=""
          this.pword=""
          this.$refs['my-modal'].toggle('#toggle-btn')
        }   
      }
    }
};

</script>
