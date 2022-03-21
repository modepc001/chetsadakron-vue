<template>
  <div class="inner-block">
    <div class="vue-tempalte">
      <form>
        <h3>ลงทะเบียน</h3>

        <div class="form-group">
          <label>ชื่อ-นามสกุล</label>
          <input type="text" v-model="name" class="form-control form-control-lg" />
        </div>

        <div class="form-group">
          <label>ผู้ใช้</label>
          <input type="text" v-model="uname" class="form-control form-control-lg" />
        </div>

        <div class="form-group">
          <label>รหัสผ่าน</label>
          <input type="password" v-model="pword" class="form-control form-control-lg" />
        </div>

        <div class="row mt-3">
            <div class="col">
                <button v-on:click="submitForm()" type="submit" class="btn btn-dark btn-lg btn-block">
                    ลงทะเบียน
                </button>
            </div>
            <div class="col signup" style="text-align: right;">
                <p v-on:click="login">เข้าสู่ระบบ</p>
            </div>
        </div> 
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'

export default {
    data() {
        return {
            name:'',
            uname:'',
            pword:'',
        };
    },
    methods: {
        async submitForm(){
            try {
                const response = await axios.post("http://phc.dyndns.biz:8088/login/add", {
                    Name: this.name,
                    UserName: this.uname,
                    Password: md5(this.pword),
                });
                this.name = "";
                this.uname = "";
                this.pword = "";
                alert(response+" :: "+md5(this.pword));
                await this.$router.push('/login')
            } catch (err) {
                console.log(err);
                alert(err);
            }
        },
        login: function (event) {
            this.$router.push('/login')
        },
    }
};
</script>
