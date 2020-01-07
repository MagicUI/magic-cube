<template>
    <InputNumber
        class="c-size"
        :formatter="value => `${value}px`"
        :parser="value => value.replace('px', '')"
        @on-change="_handleChange"
        ></InputNumber>
</template>

<script>

export default {
  name: 'cSelect',
  components: {
  },
  props: {
      formName: {},
      modelIndex: {},
      modelValue: {},
      modelKey: {},
      modelField: {}
  },
  methods: {
      _handleChange(value){
          
          this.$emit('handleStringChange', {
              formName: this.formName,
              modelIndex: this.modelIndex,
              modelKey: this.modelKey,
              modelValue: (value || 0) + 'px'
          });
      }
  },
}
</script>

<style>
.c-size {
    width: 100% !important;
}
</style>