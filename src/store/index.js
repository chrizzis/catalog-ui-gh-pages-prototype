import Vue from 'vue'
import Vuex from 'vuex'
import db from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: db.items,
    attrs: db.attrs,
    assets: db.assets
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    // since this takes an arg, cant mapGetters to computeds
    getItem: (state) => (id) => {
      console.log(`store:getItem '${id}'`)
      return state.items.find(item => {
        console.log(`store:getItem '${id}' found!`)
        return item.id === id;
      })
    },
    getAsset: (state) => (id) => {
      console.log(`store:getAsset '${id}'`)
      return state.assets.find(asset => {
        console.log(`store:getAsset '${id}' found!`)
        return asset.id === id;
      })
    }
  },
  modules: {
  }
})
