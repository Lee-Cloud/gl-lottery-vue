import Vue from 'vue';
import App from './App';
import router from './router.js';
import store from './vuex/store.js';
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
function responsive(){
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.2 + 'px';
    console.log("resize");
};
responsive();
window.onresize = responsive;
