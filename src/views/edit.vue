<template>
    <div class="edit">
        <c-editor :editModule="editModule" :schemaData="editModule.schema || {}"></c-editor>
        <div class="edit-operate-box">
            <div class="edit-operate" @click="_close">关闭</div>
            <div class="edit-operate" @click="_reset">重置</div>
            <div class="edit-operate" @click="_save">保存</div>
        </div>
    </div>
</template>

<script>
    import CEditor from '../components/editor/index.vue';
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
    methods: {
        _close(){
            this.$store._actions.closeEditWin[0]({});
        },
        _reset(){
            this.$store._actions.resetEditModInfo[0]({});
        },
        _save(){
            let {editIndex, decorationModList, decorationModListBk} = this.$store.state;
            let tempList = JSON.parse(JSON.stringify(decorationModList));
            let tempListBk = JSON.parse(JSON.stringify(decorationModListBk))
            tempListBk[editIndex] = tempList[editIndex];

            let saveJson = {
                list: tempListBk
            };
            let saveString = JSON.stringify(saveJson);

            let FileSaver = require('file-saver');
            let blob = new Blob([saveString ], {type: "text/plain;charset=utf-8"}); 
            FileSaver.saveAs(blob, "designData.js");
            this._close();
        }
    },
    }
    </script>

    <style lang="less">
    .edit{
    position: relative;
    height: 100%;
    &-operate-box{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid bisque;
        display: flex;
        cursor: pointer;
    }
    &-operate{
        flex-grow: 1;
        border-right: 1px solid bisque;
        color: #fff;
        background: chocolate;
        &:nth-child(2){
            background: blanchedalmond;
            color: #000;
        }
        &:last-child{
            border-right: none;
        }
    }
    }
    </style>
