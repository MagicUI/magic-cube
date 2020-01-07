<template>
  <div class="c-tab">
      <div class="c-tab-bar">
          <div class="c-tab-title" :class="{'c-tab-active':tabActiveIndex === index}" 
                v-for="(value, index) in tabs" v-bind:key="index"
                @click="_switchTab(index)">
            {{value}}
        </div>
      </div>
      <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'cTab',
  components: {
  },
  props: {
    tabs: {
      type: Array
    },
    tabActiveIndex: {
        type: Number
    }
  },
  computed: {
  },
  methods: {
      _switchTab(index){
          this.$emit('switchTab', index)
      }
  },
}
</script>

<style lang="less">
.c-tab{
    &-bar{
        display: flex;
        flex-direction: row;
        text-align: center;
        cursor: pointer;
    }
    &-title{
        padding: 8px 0;
        flex-grow: 1;
        border: 1px solid #ccc;
        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        
    }
    &-active{
        border: 1px solid cornflowerblue;
    }
}
</style>
