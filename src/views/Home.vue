<template>
  <div class="home">
		<div class="home-left">
			<Module></Module>
		</div>
		<div class="home-center">
			<Preview></Preview>
		</div>
		<div class="home-right">
			<Edit></Edit>
		</div>

  </div>
</template>

<script>
import Module from '../views/module.vue'
import Preview from '../views/preview.vue'
import Edit from '../views/edit.vue'

export default {
  name: 'home',
  components: {
    Module,
    Preview,
    Edit
  }
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
    }
}
</style>
