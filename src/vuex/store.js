import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const ssq = {
  state:{
    ticket:[]
  },
  mutations: {
    ssq_add(state,nums){
      state.ticket.unshift(nums);
    },
    ssq_clear(state){
      state.ticket.splice(0,state.ticket.length)
    }
  },
  actions: {},
  getters: {}
};
export default new Vuex.Store({
  modules:{
    ssq
  }
})
