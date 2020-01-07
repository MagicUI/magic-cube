<template>
  <div class="home">
		<div class="home-left">
			<Module></Module>
		</div>
		<div class="home-center">
			<Preview></Preview>
		</div>
		<div class="home-right"  v-if="editing">
			<Edit></Edit>
		</div>

  </div>
</template>

<script>
import Module from '../views/module.vue'
import Preview from '../views/preview/index.vue'
import Edit from '../views/edit/index.vue'
import designData from '../../data/designData.js';

export default {
  name: 'home',
  components: {
    Module,
    Preview,
    Edit
  },
  computed: {
      editing(){
          return this.$store.state.editing
      }
  },
  mounted() {
    //   初始化数据
    this.$store._actions.initDecorationModList[0]({
        list: designData.list
    });
  },
}
</script>

<style lang="less">
body {
    background: #ebedf1;
    height: 100%;
    overflow: hidden;
}
.home{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
	&-left{
        position: fixed;
		width: 300px;
        height: 100%;
        border-right: 1px solid #ccd5db;
        background: #fff;
    }
    &-center{
        width: 100%;
        height: 100%;
        margin: 0 300px;
        flex: 1;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    &-right{
        position: fixed;
        right: 0;
        width: 300px;
        height: 100%;
        border-left: 1px solid #ccd5db;
        overflow: auto;
        background: #fff;
    }
}
</style>
