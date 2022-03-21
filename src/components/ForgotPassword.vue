<template>
    <div class="inner-block">
        <div class="vue-tempalte">
            <form>
                <h3>ลืมรหัสผ่าน</h3>
                <div class="form-group">
                    <label>อีเมล์</label>
                    <input type="email" class="form-control form-control-lg" />
                </div>
                <div class="row mt-3">
                    <div class="row mt-2">
                        <div class="col-8">
                            <button type="submit" class="btn btn-dark btn-lg btn-block">
                                ตั้งค่าระหัสผ่าน
                            </button>
                        </div>
                        <div class="col-4 signup" style="text-align: right;">
                            <p v-on:click="login">เข้าสู่ระบบ</p>
                        </div>
                    </div>
                </div>                
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login: function (event) {
            this.$router.push('/login')
    },
  }
};
</script>
