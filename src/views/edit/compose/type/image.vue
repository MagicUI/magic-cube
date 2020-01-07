<template>
    <div class="c-image">
        <input 
            type="text"
            :value="modelValue"
            @input="_handleChange" />
    </div>
</template>

<script>

export default {
  name: 'cImage',
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
.c-image{
    input{
        width: 100%;
        border: 1px solid #D9D9D9;
        border-radius: 6px;
        color: #555;
        font-size: 13px;
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        background-repeat: no-repeat;
        background-position: 98% center;
        outline: none;
    }
}
</style>
