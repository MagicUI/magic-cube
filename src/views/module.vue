<template>
  <div class="module">
      <div class="module-item"
            v-for="(obj, index) in moduleList"
            v-bind:key="index"
            @dragstart="_dragstart(index, obj, $event)" :draggable="true">
          {{obj.name}}
      </div>
  </div>
</template>

<script>
import BaseModList from './baseModList.js';
export default {
  name: 'module',
  components: {
  },
  data () {
    return {
        moduleList: BaseModList.list
    }
  },
  methods: {
    _dragstart (index, obj, event) {
        if(this.$store.state.editing){
                alert('请先保存编辑内容');
                return;
            }
      // 设置拖拽内容和状态
      this.$store._actions.setDragModInfo[0]({
        draggingModule: obj,
        isDragging: true
      })
    }
  }
}
</script>

<style lang="less">
.module{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    &-item{
        width: 80%;
        margin-left: 10%;
        height: 50px;
        line-height: 50px;
        border: 1px solid goldenrod;
        margin-top: 20px;
    }
}
</style>
