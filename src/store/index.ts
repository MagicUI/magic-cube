import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      draggingModule: {},
      isDragging: false,
      decorationModList: [],
      editIndex: -1,
      editModule: {}
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
    },
    deleteModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp.splice(obj.deleteIndex,1);
        state.decorationModList = temp;
    },
    moveModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        if(obj.direction === 'up'){
            temp[obj.moveIndex] = temp.splice(obj.moveIndex - 1, 1, temp[obj.moveIndex])[0];
        } else {
            temp[obj.moveIndex] = temp.splice(obj.moveIndex + 1, 1, temp[obj.moveIndex])[0];
        }
        state.decorationModList = temp;
    },
    setEditModInfo(state, obj){
        state.editIndex = obj.editIndex;
        state.editModule = obj.editModule;
    },
    updateEditModInfo(state, obj){
        state.editModule = obj.editModule;
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp[state.editIndex] = obj.editModule;
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
    },
    deleteModule({commit}, data){
        commit('deleteModule', data)
    },
    moveModule({commit}, data){
        commit('moveModule', data)
    },
    setEditModInfo({commit}, data){
        commit('setEditModInfo', data);
    },
    updateEditModInfo({commit}, data){
        commit('updateEditModInfo', data)
    }
  },
  modules: {
  }
})
