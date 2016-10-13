function responsive(){
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.2 + 'px';
    console.log("resize");
};
responsive();
window.onresize = responsive;
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Home from './views/Home';
import results from './views/results';
import result_history from './views/result-history';
import information from './views/information';
import information_detail from './views/information-detail';

Vue.use(VueRouter);
const router = new VueRouter({
	routes:[
		{
			path:"",
			component:Home
		},{
      path:"/results",
      component:results
    },{
      path:"/results/result_history",
      component:result_history
    },{
      path:'/information',
      component:information
    },{
      path:'/information/information_detail',
      component:information_detail
    }
	]
})
const app = new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
