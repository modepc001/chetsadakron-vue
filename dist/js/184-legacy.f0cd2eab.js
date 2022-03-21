"use strict";(self["webpackChunkaunweb"]=self["webpackChunkaunweb"]||[]).push([[184],{184:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-tempalte",staticStyle:{"background-color":"#ffffff"}},[t._m(0),s("div",{staticStyle:{margin:"20px"}},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon2"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.getProducts()}}},[t._v("ค้นหา")])])]),s("table",{staticClass:"table is-striped is-bordered mt-2 is-fullwidth"},[s("thead",[s("tr",[s("th",[t._v("รหัสสินค้า")]),s("th",[t._v("บาร์โค้ด")]),s("th",[t._v("ชื่อสินค้า")]),s("th",[t._v("ราคา")]),s("th",[t._v("รายละเอียด")]),s("th",{staticClass:"has-text-centered",staticStyle:{width:"220px"}},[s("div",{staticClass:"btn btn-outline-primary nav-link pr-3 p-2 ml-2",on:{click:t.addProduct}},[s("img",{staticClass:"ml-2",attrs:{src:i(1582),width:"40px",height:"40px"}})])])])]),s("tbody",t._l(t.items,(function(e,n){return s("tr",{key:e.product_id},[s("td",[t._v(t._s(e.product_code))]),s("td",[t._v(t._s(e.product_barcode))]),s("td",[t._v(t._s(e.product_name))]),s("td",[t._v(t._s(e.product_price))]),s("td",[t._v(t._s(e.product_detail))]),s("td",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{staticClass:"ml-2",attrs:{src:i(310),width:"40px",height:"40px"},on:{click:function(e){return t.editProduct(n)}}})]),s("div",{staticClass:"col"},[s("img",{staticClass:"ml-2",attrs:{src:i(529),width:"40px",height:"40px"},on:{click:function(e){return t.uploadProduct(n)}}})]),s("div",{staticClass:"col"},[s("img",{attrs:{src:i(3256),width:"40px",height:"40px"},on:{click:function(i){return t.deleteProduct(e.product_id,e.product_code,e.product_name)}}})])])])])})),0)])]),s("div",[s("b-modal",{ref:"my-modal",attrs:{"hide-footer":"",title:"ลบข้อมูล"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"d-block text-center"},[s("h3",[t._v("คุณต้องการลบข้อมูลนี้ใช่หรือไม่...!")])]),s("div",{staticClass:"d-block text-center"},[s("h5",[t._v(t._s(t.product_code)+" : "+t._s(t.product_name))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.product_id,expression:"product_id"}],staticClass:"form-control form-control-lg",attrs:{type:"hidden",id:"product_id"},domProps:{value:t.product_id},on:{input:function(e){e.target.composing||(t.product_id=e.target.value)}}})]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex-column"},[s("div",{staticClass:"btn btn-outline-danger nav-link pr-3 p-2 ml-2",on:{click:t.hideModal}},[t._v("ยกเลิก")])]),s("div",{staticClass:"col flex-column"}),s("div",{staticClass:"col flex-column"},[s("div",{staticClass:"btn btn-outline-success nav-link pr-3 p-2 ml-2 align-self-end",on:{click:function(e){return t.toggleModal()}}},[t._v("ตกลง")])])])])],1),s("div",{staticStyle:{"margin-top":"50px"}},[s("b-modal",{ref:"upload-modal",attrs:{"hide-footer":"",title:"อับโหลด ไฟล์..."}},[s("div",{staticClass:"container-fluid"},[s("div",[s("div",{staticClass:"imagePreviewWrapper",style:{"background-image":"url("+t.previewImage+")"},on:{click:t.selectImage}}),s("input",{ref:"fileInput",attrs:{type:"file"},on:{input:t.pickFile}})])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col flex-column"},[s("div",{staticClass:"btn btn-outline-danger nav-link pr-3 p-2 ml-2",on:{click:t.hideModal}},[t._v("ยกเลิก")])]),s("div",{staticClass:"col flex-column"}),s("div",{staticClass:"col flex-column"},[s("div",{staticClass:"btn btn-outline-success nav-link pr-3 p-2 ml-2 align-self-end",on:{click:function(e){return t.toggleModal()}}},[t._v("ตกลง")])])])])],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("img",{attrs:{src:i(3079),width:"100%",height:"350"}})])}],a=i(6198),r=(i(8975),i(4916),i(4765),i(8862),i(6166)),c=i.n(r),o={name:"ProductList",data:function(){return{uname:"",search:"",product_id:"",product_code:"",product_barcode:"",product_name:"",product_price:"",product_detail:"",items:[]}},created:function(){""!=this.$route.params.uname?(this.uname=this.$route.params.uname,this.getProducts()):this.$router.push("/")},methods:{getProducts:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.search),e.next=4,c().post("http://phc.dyndns.biz:8088/products",{product_name:t.search});case 4:i=e.sent,t.items=i.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deleteProduct:function(t,e,i){var s=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s.product_id=t,s.product_code=e,s.product_name=i,s.showModal();case 4:case"end":return n.stop()}}),n)})))()},addProduct:function(){this.$router.push("/add/"+this.uname)},editProduct:function(t){this.$router.push({name:"edit",params:{uname:this.uname,data:JSON.stringify(this.items[t])}})},uploadProduct:function(t){this.$refs["upload-modal"].show()},sweetAlert:function(){var t=this;this.$swal({title:"Are you sure?",text:"You can't revert your action",type:"warning",showCancelButton:!0,confirmButtonText:"Yes Delete it!",cancelButtonText:"No, Keep it!",showCloseButton:!0,showLoaderOnConfirm:!0}).then((function(e){e.value?t.$swal("Deleted","You successfully deleted this file","success"):t.$swal("Cancelled","Your file is still intact","info")}))},showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide(),this.$refs["upload-modal"].hide()},toggleModal:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c()["delete"]("http://phc.dyndns.biz:8088/products/".concat(t.product_id));case 2:t.getProducts(),t.$refs["my-modal"].toggle("#toggle-btn");case 4:case"end":return e.stop()}}),e)})))()},selectImage:function(){this.$refs.fileInput.click()},pickFile:function(){var t=this,e=this.$refs.fileInput,i=e.files;if(i&&i[0]){var s=new FileReader;s.onload=function(e){t.previewImage=e.target.result},s.readAsDataURL(i[0]),this.$emit("input",i[0])}}}},l=o,d=i(1001),u=(0,d.Z)(l,s,n,!1,null,"c5eef924",null),p=u.exports},1582:function(t,e,i){t.exports=i.p+"img/addnew.c887fc7f.png"},310:function(t,e,i){t.exports=i.p+"img/edit.929d25cc.png"},3079:function(t,e,i){t.exports=i.p+"img/header01.25ae52e1.png"},3256:function(t,e,i){t.exports=i.p+"img/recycle-bin.307a5a31.png"},529:function(t,e,i){t.exports=i.p+"img/uploadfile.8435bd68.png"}}]);
//# sourceMappingURL=184-legacy.f0cd2eab.js.map