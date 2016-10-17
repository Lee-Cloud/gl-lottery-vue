import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  title: '咕啦彩票'
};
const mutations = {
  TITLE(state,value) {
    state.title = value
  }
};
export default new Vuex.Store({
  state,
  mutations
})
