<template>
    <div class="c-twoPic" 
        :style="{'margin-top': baseInfo.marginTop, 
        'margin-bottom': baseInfo.marginBottom,
        'padding-top': baseInfo.paddingTop,
        'padding-bottom': baseInfo.paddingBottom,
        'padding-left': baseInfo.paddingLeft,
        'padding-right': baseInfo.paddingRight,
        'background': baseInfo.bgColor}">
        <div class="c-twoPic-head">
            <div class="c-twoPic-title">{{modInfo.title}}</div>
            <div class="c-twoPic-subTitle">{{modInfo.subTitle}}</div>
        </div>
        <div class="c-twoPic-imgs">
            <a class="c-twoPic-img" :href="modInfo.link1">
                <img :src="modInfo.img1"/>
            </a>
            <a class="c-twoPic-img" :href="modInfo.link2">
                <img :src="modInfo.img2"/>
            </a>
        </div>
        
        
    </div>
</template>

<script>

export default {
  name: 'cTwoPic',
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
.c-twoPic{
    &-head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    &-imgs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &-img{
        display: block;
        width: 49.5%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
