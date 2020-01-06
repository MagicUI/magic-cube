<template>
    <Input  class="c-string" type="textarea" :autosize="true" placeholder="Enter something..." value="modelValue" @change="_handleChange"/>
    <!-- <input 
        type="text"
            /> -->
</template>

<script>

export default {
  name: 'cString',
  components: {
  },
  props: {
      formName: {},
      modelIndex: {},
      modelValue: {},
      modelKey: {}
  },
  computed: {
  },
  data() {
      return {}
  },
  methods: {
      _handleChange(e){
          let value = e.target.value;
          this.$emit('handleStringChange', {
              formName: this.formName,
              modelIndex: this.modelIndex,
              modelKey: this.modelKey,
              modelValue: value
          });
      }
  },
}
</script>

<style lang="less">
.c-string{
    input{
        // width: 100%;
        // border: 1px solid #D9D9D9;
        // border-radius: 6px;
        // color: #555;
        // font-size: 13px;
        // height: 36px;
        // line-height: 36px;
        // padding-left: 10px;
        // outline: none;
        // background-repeat: no-repeat;
        // background-position: 98% center;
    }
}
</style>
