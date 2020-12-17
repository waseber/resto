import Vue from 'vue'
import Vuex from 'vuex'
import {getInventoryAPI, insertInventoryAPI} from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory:[{date: "12/18/2020", time:"17:15", reservations:"2"}],
    reservation:[]
  },
  mutations: {
    setInventory(state, data){
      console.log(data, "hi")
      state.inventory.push(data)
    }
  },
  actions: {
    async addToInventory(context, inv){
      console.log(inv, '123')
      await insertInventoryAPI(inv);
      //context.commit("setInventory", inv);
    },
    async getInventory(context){
      console.log('getInventory')
      let inv = await getInventoryAPI()
      context.commit("setInventory", inv);
    }
  },
  getters:{
    getInventory: (state) => {
      return state.inventory
    },
    getReservations: (state) => (id) => {
      return state.reservation
    }
  },
  modules: {
  }
})
