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
    // can map to computed
    getCatalog: (state, getters) => {
      console.log(`store:getCatalog`)
      return state.items.map(i => {
        if (!i.avatar) {
          return i;
        }
        return {
          ...i,
          assets: i.assets.map(id => getters.getAsset(id)) || i.assets,
          avatar: getters.getAsset(i.avatar).src || i.avatar
        }
      })
    },
    // since this takes an arg, cant mapGetters to computeds
    getItem: (state, getters) => (id) => {
      console.log(`store:getItem '${id}'`)
      return getters.getCatalog.find(item => {
        console.log(`store:getItem '${id}' found!`)
        return item.id === id;
      });
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
