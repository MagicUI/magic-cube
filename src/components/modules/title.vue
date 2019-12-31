<template>
    <a class="c-title" 
        :style="{'margin-top': baseInfo.marginTop, 
        'margin-bottom': baseInfo.marginBottom,
        'padding-top': baseInfo.paddingTop,
        'padding-bottom': baseInfo.paddingBottom,
        'padding-left': baseInfo.paddingLeft,
        'padding-right': baseInfo.paddingRight,
        'color': modInfo.color,
        'font-size': modInfo.fontSize,
        'background': baseInfo.bgColor}"
        :href="modInfo.link"
        >
            {{modInfo.title}}
            <span>></span>
    </a>
</template>

<script>

export default {
  name: 'cTitle',
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
.c-title{
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
}
</style>
