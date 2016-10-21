import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import results from './views/results';
import result_history from './views/result-history';
import information from './views/information';
import information_detail from './views/information-detail';
import stations from './views/stations';
import station_detail from './views/station-detail';
import recommends from './views/recommends';
import recommend_details from './views/recommend_details';

import shuangseqiu from './views/shuangseqiu';
import ssq_slip from './views/ssq-slip';
import daletou from './views/daletou';

Vue.use(VueRouter);
export default new VueRouter({
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
      path: '/stations',
      component:stations
    },{
      path:'/stations/station_detail',
      component: station_detail
    },{
      path:'/recommends',
      component:recommends
    },{
      path:'/recommends/details',
      component:recommend_details
    },{
      path: '/shuangseqiu',
      component:shuangseqiu
    },{
      path: '/shuangseqiu/slip',
      component:ssq_slip
    },{
      path: '/daletou',
      component:daletou
    }
	]
})
