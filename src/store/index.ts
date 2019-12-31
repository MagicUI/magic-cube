import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      draggingModule: {},
      isDragging: false,
      decorationModList: []
  },
  mutations: {
    setDragModInfo(state, obj){
        state.draggingModule = obj.draggingModule || {};
        state.isDragging = obj.isDragging;
    },
    insertModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp.splice(obj.insertIndex,0 , state.draggingModule);
        state.decorationModList = temp;
    },
    updateModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp.splice(obj.updateIndex,1 , obj.updateData);
        state.decorationModList = temp;
    }
  },
  actions: {
    setDragModInfo ({commit}, data) {
        commit('setDragModInfo', data);
    },
    insertModule({commit}, data){
        commit('insertModule', data);
    },
    updateModule({commit}, data){
        commit('updateModule', data)
    }
  },
  modules: {
  }
})
