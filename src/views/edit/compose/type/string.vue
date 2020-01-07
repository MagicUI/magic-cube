<template>
    <Input  class="c-string" type="textarea" :autosize="true" placeholder="Enter something..." :value="modelValue" @on-change="_handleChange"/>
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
    width: 100%;
}
</style>
