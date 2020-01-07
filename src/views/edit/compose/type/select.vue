<template>

    <Select class="c-select" @on-change="_handleChange" :value="modelValue">
        <Option v-for="(item) in Object.keys(modelField.data)" :value="item" :key="item">{{ modelField.data[item] }}</Option>
    </Select>
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
  computed: {
  },
  data() {
      return {}
  },
  methods: {
      _handleChange(value){
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
</script>

<style>

</style>