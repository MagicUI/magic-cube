<template>
    <div class="c-text" 
        :style="{'margin-top': baseInfo.marginTop, 
        'margin-bottom': baseInfo.marginBottom,
        'padding-top': baseInfo.paddingTop,
        'padding-bottom': baseInfo.paddingBottom,
        'padding-left': baseInfo.paddingLeft,
        'padding-right': baseInfo.paddingRight,
        'color': modInfo.color,
        'font-size': modInfo.fontSize,
        'text-align': modInfo.textAlign,
        'background': baseInfo.bgColor}">
        {{modInfo.text}}
    </div>
</template>

<script>

export default {
  name: 'cText',
  components: {
  },
  props: {
      moduleInfo: {}
  },
  computed: {
      baseInfo(){
          return this.moduleInfo.schema.formData.baseInfo.models[0];
      },
      modInfo(){
          return this.moduleInfo.schema.formData.modInfo.models[0];
      }
  },
  data() {
      return {}
  },
  methods: {
  },
}
</script>

<style lang="less">

</style>
