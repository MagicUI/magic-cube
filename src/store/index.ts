import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      draggingModule: {},
      isDragging: false,
      decorationModList: [],
      decorationModListBk:[], // 编辑了内容没有保存的时候，要保留一份原始数据
      editIndex: -1,
      editing: false,
      editModule: {}
  },
  mutations: {
    initDecorationModList(state, obj){
        state.decorationModList = obj.list;
        state.decorationModListBk = obj.list;
    },
    setDragModInfo(state, obj){
        state.draggingModule = obj.draggingModule || {};
        state.isDragging = obj.isDragging;
    },
    insertModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp.splice(obj.insertIndex,0 , state.draggingModule);
        state.decorationModList = temp;

        let tempBk = JSON.parse(JSON.stringify(state.decorationModListBk));
        tempBk.splice(obj.insertIndex,0 , state.draggingModule);
        state.decorationModListBk = tempBk;
    },
    updateModule(state, obj){ // 接收状态更新
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp.splice(obj.updateIndex,1 , obj.updateData);
        state.decorationModList = temp;
    },
    deleteModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp.splice(obj.deleteIndex,1);
        state.decorationModList = temp;

        let tempBk = JSON.parse(JSON.stringify(state.decorationModListBk));
        tempBk.splice(obj.deleteIndex,1);
        state.decorationModListBk = tempBk;
    },
    moveModule(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        if(obj.direction === 'up'){
            temp[obj.moveIndex] = temp.splice(obj.moveIndex - 1, 1, temp[obj.moveIndex])[0];
        } else {
            temp[obj.moveIndex] = temp.splice(obj.moveIndex + 1, 1, temp[obj.moveIndex])[0];
        }
        state.decorationModList = temp;

        let tempBk = JSON.parse(JSON.stringify(state.decorationModListBk));
        if(obj.direction === 'up'){
            tempBk[obj.moveIndex] = tempBk.splice(obj.moveIndex - 1, 1, tempBk[obj.moveIndex])[0];
        } else {
            tempBk[obj.moveIndex] = tempBk.splice(obj.moveIndex + 1, 1, tempBk[obj.moveIndex])[0];
        }
        state.decorationModList = tempBk;

    },
    setEditModInfo(state, obj){
        state.editIndex = obj.editIndex;
        state.editing = obj.editing;
        state.editModule = obj.editModule;
    },
    updateEditModInfo(state, obj){
        state.editModule = obj.editModule;
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        temp[state.editIndex] = obj.editModule;
        state.decorationModList = temp;
    },
    resetEditModInfo(state, obj){
        let temp = JSON.parse(JSON.stringify(state.decorationModList));
        let rawData = JSON.parse(JSON.stringify(state.decorationModListBk));
        temp[state.editIndex] = rawData[state.editIndex];
        state.editModule = rawData[state.editIndex];
        state.decorationModList = temp;
    },
    closeEditWin(state, obj){
        state.editing = false;
    },
    saveEditModInfo(state, obj){

    }
  },
  actions: {
    initDecorationModList({commit}, data) {
        commit('initDecorationModList', data);
    },
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
    },
    resetEditModInfo({commit}, data){
        commit('resetEditModInfo', data)
    },
    closeEditWin({commit}, data){
        commit('closeEditWin', data)
    },
    saveEditWin({commit}, data){
        commit('saveEditWin', data)
    }
  },
  modules: {
  }
})
