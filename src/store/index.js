import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginShow: true,
    menuLook:false,
  },
  mutations: {
    setForm(state, result){
      state.loginShow = result;
    },
    setLook(state, result){
      state.menuLook = result;
    },

  },
  actions: {
    logged(context){
      context.commit("setForm", false);
    },
    logout(context){
      context.commit("setForm", true);
    },
    hideMenu(context){
      context.commit("setLook", false);
    },
    showMenu(context){
      context.commit("setLook", true)
    }
  },
  getters: {
    getLogin(state){
      return state.loginShow;
    },
    getLook(state){
      return state.menuLook;
    }
  }
})
