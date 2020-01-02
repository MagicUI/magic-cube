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
import Preview from '../views/preview.vue'
import Edit from '../views/edit.vue'
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

.home{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
	&-left{
		width: 300px;
        height: 100%;
        border-right: 1px solid silver;
    }
    &-center{
        height: 100%;
        flex: 1;
    }
    &-right{
        width: 300px;
        height: 100%;
        border-left: 1px solid silver;
        overflow: auto;
    }
}
</style>
