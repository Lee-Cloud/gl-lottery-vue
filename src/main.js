function responsive(){
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.2 + 'px';
    console.log("resize");
};
responsive();
window.onresize = responsive;
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Home from './views/Home';
import results from './views/results';
import result_history from './views/result-history';
import information from './views/information';
import information_detail from './views/information-detail';
// import stations from './views/stations';
import station_detail from './views/station-detail';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
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
    },{
      path:'/stations/station_detail',
      component: station_detail
    }
	]
})
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     title: "title"
//   }
// });
const app = new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
