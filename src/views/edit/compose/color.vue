<template>
    <div class="c-color">
        <Row class="c-color-list">
            <Col span="4" v-for="(item,index) in defaultColorList" :key="index">
                <span class="color-pick" :class="[item,index==selectedIndex?'selected':'']" @click="selecteColor(index)"></span>
            </Col>
            <Col span="8">
                <ColorPicker class="color-panel" :class="{'selected':defaultColorList.indexOf(color)==-1}" v-model="color" :hue="false" />
            </Col>
        </Row>
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
      return {
          defaultColorList: ['white','black','red','orange'],
          selectedIndex: 0,
          color: 'white'
      }
  },
  methods: {
      selecteColor(index) {
          this.selectedIndex = index;
      },
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

<style lang="less" scoped>
.c-color{
    .c-color-list {
        display: flex;
        align-items: center;
    }
    .color-pick {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
        vertical-align: middle;
        box-shadow: 0 0 1px 1px #999;
        &.selected {
            box-shadow: 0 0 2px 2px rgb(75, 183, 245);
        }
    }
    .color-panel.selected {
        box-shadow: 0 0 2px 2px rgb(75, 183, 245);
        border-radius: 5px;
    }
    .white {
        background: white;
    }
    .black {
        background: black;
    }
    .red {
        background: red;
    }
    .orange {
        background: orange;
    }
}
</style>
