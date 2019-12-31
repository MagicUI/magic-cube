<template>
    <div class="c-onePic" 
        :style="{'margin-top': baseInfo.marginTop, 
        'margin-bottom': baseInfo.marginBottom,
        'padding-top': baseInfo.paddingTop,
        'padding-bottom': baseInfo.paddingBottom,
        'padding-left': baseInfo.paddingLeft,
        'padding-right': baseInfo.paddingRight,
        'background': baseInfo.bgColor}">
        <div class="c-onePic-head">
            <div class="c-onePic-title">{{modInfo.title}}</div>
            <div class="c-onePic-subTitle">{{modInfo.subTitle}}</div>
        </div>
        <a class="c-onePic-img" :href="modInfo.link">
            <img :src="modInfo.img"/>
        </a>
        
    </div>
</template>

<script>

export default {
  name: 'cOnePic',
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
.c-onePic{
    &-head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    &-img{
        display: block;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
