
<template>
        <div class="inner-block">
            <div id="LoginApp" class="container">
                    <form>
                        <h3>เข้าสู่ระบบ</h3>

                        <div class="form-group">
                            <label>ผู้ใช้</label>
                            <input type="text" id="uname" v-model="uname" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group gap-top">
                            <label>รหัสผ่าน</label>
                            <input type="password" id="pword" v-model="pword" class="form-control form-control-lg" />
                        </div>

                        <div class="mt-3">
                            <button v-on:click="submitForm()" class="btn btn-dark btn-lg btn-block">
                            เข้าสู่ระบบ
                            </button>
                        </div>

                        <div class="row mt-3">
                            <div class="col signup text-left">
                                <p v-on:click="signup">ลงทะเบียน</p>
                            </div>

                            <div class="col forgot-password text-right">
                                <p v-on:click="forgotpassword">ลืมรหัสผ่าน</p>
                            </div>
                        </div> 

                    </form>
            </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            uname:'',
            pword:'',
        };
    },
    methods: {
        async submitForm(){
            if( (this.uname!="") && (this.pword!="") ){
                alert("True");
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
            }
        },
        forgotpassword: function (event) {
            this.$router.push('/forgot-password')
        },
        signup: function (event) {
            this.$router.push('/signup')
        },
    }
};
</script>
