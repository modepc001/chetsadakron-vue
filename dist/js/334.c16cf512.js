"use strict";(self["webpackChunkaunweb"]=self["webpackChunkaunweb"]||[]).push([[334],{9334:function(t,r,e){e.r(r),e.d(r,{default:function(){return n}});var a=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"inner-block-1"},[a("h1",[t._v("แก้ไขข้อมูลสินค้า")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uname,expression:"uname"}],staticClass:"form-control form-control-lg",attrs:{type:"hidden",id:"uname"},domProps:{value:t.uname},on:{input:function(r){r.target.composing||(t.uname=r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product_id,expression:"product_id"}],staticClass:"form-control form-control-lg",attrs:{type:"hidden",id:"product_id"},domProps:{value:t.product_id},on:{input:function(r){r.target.composing||(t.product_id=r.target.value)}}}),a("div",[a("b-input-group",{staticClass:"mb-2",attrs:{prepend:"รหัสสินค้า"}},[a("b-form-input",{attrs:{"aria-label":"รหัสสินค้า"},model:{value:t.productCode,callback:function(r){t.productCode=r},expression:"productCode"}})],1)],1),a("div",[a("b-input-group",{staticClass:"mb-2",attrs:{prepend:"บาร์โค้ด"}},[a("b-form-input",{attrs:{"aria-label":"บาร์โค้ด"},model:{value:t.productBarcame,callback:function(r){t.productBarcame=r},expression:"productBarcame"}})],1)],1),a("div",[a("b-input-group",{staticClass:"mb-2",attrs:{prepend:"ชื่อสินค้า"}},[a("b-form-input",{attrs:{"aria-label":"ชื่อสินค้า"},model:{value:t.productName,callback:function(r){t.productName=r},expression:"productName"}})],1)],1),a("div",[a("b-input-group",{staticClass:"mb-2",attrs:{prepend:"รายละเอียด"}},[a("b-form-input",{attrs:{"aria-label":"รายละเอียด"},model:{value:t.productDetail,callback:function(r){t.productDetail=r},expression:"productDetail"}})],1)],1),a("div",[a("b-input-group",{attrs:{prepend:"B",append:".00"}},[a("b-form-input",{attrs:{type:"number"},model:{value:t.productPrice,callback:function(r){t.productPrice=r},expression:"productPrice"}})],1)],1),a("div",{staticClass:"btn btn-outline-primary nav-link pr-3 p-2 ml-2 mt-3",on:{click:t.saveProduct}},[a("img",{staticClass:"ml-2",attrs:{src:e(1582),width:"40px",height:"40px"}})])])},o=[],i=e(6166),c=e.n(i),d={name:"AddProduct",data(){return{id:"",product_id:"",productCode:"",productBarcame:"",productName:"",productDetail:"",productPrice:"",items:[]}},created(){this.items=JSON.parse(this.$route.params.data),this.uname=this.$route.params.uname,this.product_id=this.items.product_id,this.productCode=this.items.product_code,this.productBarcame=this.items.product_barcode,this.productName=this.items.product_name,this.productDetail=this.items.product_detail,this.productPrice=this.items.product_price},methods:{async saveProduct(){try{await c().post("http://phc.dyndns.biz:8088/updateproducts",{product_id:this.product_id,product_code:this.productCode,product_barcode:this.productBarcame,product_name:this.productName,product_detail:this.productDetail,product_price:this.productPrice}),this.productCode="",this.productBarcame="",this.productName="",this.productDetail="",this.productPrice="",this.$router.push("/product/"+this.uname)}catch(t){console.log(t)}}}},u=d,p=e(1001),s=(0,p.Z)(u,a,o,!1,null,null,null),n=s.exports},1582:function(t,r,e){t.exports=e.p+"img/addnew.c887fc7f.png"}}]);
//# sourceMappingURL=334.c16cf512.js.map