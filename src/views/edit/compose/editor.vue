<template>
  <div class="c-editor">
      <div class="c-editor-title">{{editModule.name}}</div>
      <c-tab :tabs="tabs" :tabActiveIndex="tabActiveIndex" v-on:switchTab="switchTab">
          <div v-for="(item, index) in tabPanels" v-bind:key="index" v-show="index === tabActiveIndex">
              <c-panel :formList="item"></c-panel>
          </div>
      </c-tab>
  </div>
</template>

<script>

// 初始化编辑tab
function tabInit(data){
    if (!data.formData) {
        return [];
    }
    let formData = data.formData;
    let tabNames = [];
    Object.keys(formData).map(function (item) {
        if (tabNames.indexOf(formData[item].group) < 0) {
        tabNames.push(formData[item].group)
        }
    })
    return tabNames;
}
// 初始化每个tab对应的面板内容
function tabPanelsInit (schema) {
    if (!schema.formData) {
        return []
    }
    let formData = schema.formData
    let tabNames = tabInit(schema)
    let tabsPanel = []
    tabNames.map((item, index) => {
        tabsPanel[index] = []
    })
    Object.keys(formData).map((itemkey, itemIndex) => {
        let dataItem = formData[itemkey]
        tabNames.map((name, index) => {
        if (name === dataItem.group) {
            tabsPanel[index].push({
                formName: itemkey,
                content: dataItem
            })
        }
        })
    })
    console.log(tabsPanel)
    return tabsPanel;
}

import CTab from './tab.vue';
import CPanel from './panel.vue';

export default {
  name: 'cEditor',
  components: {
      CTab,
      CPanel
  },
  props: {
    schemaData: {
      type: Object
    },
    editModule: {
      type: Object
    }
  },
  computed: {
      tabs(){
          return tabInit(this.schemaData)
      },
      tabPanels(){
          return tabPanelsInit(this.schemaData);
      }
  },
  data() {
      return {
          tabActiveIndex: 0
      }
  },
  methods: {
      switchTab(index){
          this.tabActiveIndex = index;
      }
  },
}
</script>

<style lang="less">
.c-editor{
    padding: 20px;
    &-title{
        text-align: left;
        margin-bottom: 20px;
    }
}
</style>
