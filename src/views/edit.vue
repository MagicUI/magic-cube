<template>
    <div class="edit">
        <c-editor :editModule="editModule" :schemaData="editModule.schema || {}"></c-editor>
    </div>
</template>

<script>
import CEditor from '../components/editor/index.vue'
export default {
  name: 'edit',
  components: {
      CEditor
  },
  computed: {
      editModule(){
          return this.$store.state.editModule;
      }
  },
}
</script>
