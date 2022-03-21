import Vue from 'vue'
// import { createApp } from 'vue'
import App from './App.vue'
// import ProductList from './components/admin/ProductList.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSession from 'vue-session'
import VueResource from 'vue-resource'
// import firebase from 'firebase/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/css/main.css'
import '@/assets/css/modal.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// const firebaseConfig = {
//   apiKey: "AIzaSyDd00-QCn1g-kTq-jBMn65i6Vyos9qldRI",
//   authDomain: "chetsadakron-vue.firebaseapp.com",
//   databaseURL: "https://chetsadakron-vue-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "chetsadakron-vue",
//   storageBucket: "chetsadakron-vue.appspot.com",
//   messagingSenderId: "757285500313",
//   appId: "1:757285500313:web:5de93b1c44769378624f08",
//   measurementId: "G-RVRK3G8K7R"
// };

// firebase.initializeApp(firebaseConfig)

console.log(firebase);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSession)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.debug = false
Vue.config.silent = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
