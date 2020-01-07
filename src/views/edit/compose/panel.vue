<template>
    <div class="c-panel">
        <div v-for="(obj, index) in formList" v-bind:key="index">
            <div v-for="(model, modelIndex) in obj.content.models" v-bind:key="modelIndex">
                <div class="c-panel-form" v-for="(field, fieldIndex) in obj.content.fields" v-bind:key="fieldIndex">
                    <div class="c-panel-title">{{field.title}}</div>
                    <component
                        :formName="obj.formName"
                        :is="'c-'+field.type"
                        :modelField="field"
                        :modelIndex="modelIndex"
                        :modelValue="model[field.name]"
                        :modelKey="field.name"
                        v-on:handleStringChange="handleStringChange"
                    >
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CString from './type/string.vue'
import CImage from './type/image.vue'
import CColor from './type/color.vue'
import CSelect from './type/select.vue'
import CSize from './type/size.vue'
import CUrl from './type/url.vue'

export default {
  name: 'cPanel',
  components: {
      CString,
      CImage,
      CColor,
      CSelect,
      CSize,
      CUrl
  },
  props: {
    formList: {
      type: Array
    }
  },
  computed: {
  },
  data() {
      return {}
  },
  methods: {
      handleStringChange(obj){
        //   let models = tihs.formList.
        let editModule = JSON.parse(JSON.stringify(this.$store.state.editModule)) || {};
        let schemaData = editModule.schema || {};
        let formData = schemaData.formData || {};
        formData[obj.formName].models[obj.modelIndex][obj.modelKey] = obj.modelValue;
        this.$store._actions.updateEditModInfo[0]({
            editModule: editModule
        });
      }
  },
}
</script>

<style lang="less">
.c-panel{
    &-form{
        margin-top: 30px;
        text-align: left;
    }
    &-title{
        margin: 30px 0 10px;
        color: #333;
    }
}
</style>
