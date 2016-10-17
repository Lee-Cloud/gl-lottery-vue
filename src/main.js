import Vue from 'vue';
import App from './App';
import router from './router.js';
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
function responsive(){
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.2 + 'px';
    console.log("resize");
};
responsive();
window.onresize = responsive;
