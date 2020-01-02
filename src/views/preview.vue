<template>
    <div class="preview">
        <div class="preview-view">
            <div v-for="(obj, index) in decorationModList" v-bind:key="index">
                <div class="preview-receive"
                    :class="{'preview-receiving':  obj.receiving}"
                    >
                    <div 
                        v-if="isDragging" 
                        class="preview-receive-pending"
                        @dragover="_dragover(index, $event)"
                        @dragleave="_dragleave(index, $event)"
                        @drop="_drop(index, $event)">
                    </div>
                </div>
                <div class="preview-module">
                    <div class="preview-module-edit">
                        <span class="operate edit" @click="_edit(index)">edit</span>
                        <span v-if="index !== 0" class="operate up" @click="_upModule(index)">up</span>
                        <span v-if="index !== decorationModList.length -1 " class="operate down" @click="_downModule(index)">down</span>
                        <span class="operate x" @click="_deleteModule(index)">del</span>
                    </div>
                    <c-title v-if="obj.type === 'title'" :moduleInfo="obj"></c-title>
                    <c-text v-if="obj.type === 'text'" :moduleInfo="obj"></c-text>
                    <c-one-pic v-if="obj.type === 'onePic'" :moduleInfo="obj"></c-one-pic>
                    <c-two-pic v-if="obj.type === 'twoPic'" :moduleInfo="obj"></c-two-pic>
                </div>
            </div>
            <div class="preview-receive-last"
                :class="{'preview-receiving preview-receiving-last': lastReceiving}"
                @dragover="_dragover(decorationModList.length, $event)"
                @dragleave="_dragleave(decorationModList.length, $event)"
                @drop="_drop(decorationModList.length, $event)"
            >
            </div>
        </div>
    </div>
</template>

<script>
import CTitle from '../components/modules/title.vue';
import CText from '../components/modules/text.vue';
import COnePic from '../components/modules/onePic.vue';
import CTwoPic from '../components/modules/twoPic.vue';

export default {
    name: 'preview',
    components: {
        COnePic,
        CTwoPic,
        CTitle,
        CText
    },
    data(){
        return{
            lastReceiving: false
        }
    },
    computed: {
        decorationModList () {
            return this.$store.state.decorationModList;
        },
        isDragging(){
            return this.$store.state.isDragging;
        }
    },
    methods: {
        _dragover(index, event){
            event.preventDefault()
            if(index === this.decorationModList.length){
                this.lastReceiving = true;
            }else{
                let temp = this.decorationModList[index];
                temp.receiving = true;
                this.$store._actions.updateModule[0]({
                    updateIndex: index,
                    updateData: temp
                });
            }
        },
        _dragleave(index, event){
            event.preventDefault()
            if(index === this.decorationModList.length){
                this.lastReceiving = false;
            }else{
                let temp = this.decorationModList[index];
                delete temp.receiving;
                this.$store._actions.updateModule[0]({
                    updateIndex: index,
                    updateData: temp
                });
            }
        },
        _drop(index, event){

            this.$store._actions.insertModule[0]({
                insertIndex: index
            });

            // 清空正在拖拽的模块信息
            this.$store._actions.setDragModInfo[0]({
                draggingModule: {},
                isDragging: false
            });

            this.decorationModList.forEach((item, index) => {
                let temp = this.decorationModList[index];
                delete temp.receiving;
                this.$store._actions.updateModule[0]({
                    updateIndex: index,
                    updateData: temp
                });
            });
            this.lastReceiving = false;
        },
        _deleteModule(index){
            if(this.$store.state.editing){
                alert('请先保存编辑内容');
                return;
            }
            this.$store._actions.deleteModule[0]({
                deleteIndex: index
            });
        },
        _upModule(index){
            if(this.$store.state.editing){
                alert('请先保存编辑内容');
                return;
            }
            this.$store._actions.moveModule[0]({
                moveIndex: index,
                direction: 'up'
            });
        },
        _downModule(index){
            if(this.$store.state.editing){
                alert('请先保存编辑内容');
                return;
            }
            this.$store._actions.moveModule[0]({
                moveIndex: index,
                direction: 'down'
            });
        },
        _edit(index){
            this.$store._actions.setEditModInfo[0]({
                editIndex: index,
                editing: true,
                editModule: this.decorationModList[index]
            })
        }
    },
}
</script>

<style lang="less">
.preview{
    background: url(http://s17.mogucdn.com/p2/160901/upload_7geajf3a3b7h461a38h4k3el61988_261x529.png) no-repeat;
        background-size: auto 100%;
        width: 400px;
        height: 800px;
        margin: 0 auto;
        margin-top: 30px;
        overflow: hidden;
    &-view{
        width: 340px;
        height: 604px;
        margin: 0 auto;
        margin-top: 94px;
        overflow-y: scroll;
    }
    &-receive{
        // height: 10px;
        position: relative;
        &-pending{
            position: absolute;
            height: 80px;
            width: 100%;
            top: -30px;
        }
        &-last{
            width: 100%;
            height: 300px;
        }
    }
    &-receiving{
        width: 100%;
        height: 100px;
        border: 1px dashed red;
        &-last{
            height: 300px;
        }
    }
    &-module{
        background:burlywood;
        width: 100%;
        color: #fff;
        margin: auto;
        position: relative;
        &-edit{
            position: absolute;
            top: 0;
            right: 0;
            display: none;
            height: 30px;
            flex-direction: row;
            .operate{
                flex: 1;
                width: 40px;
                height: 30px;
                line-height: 30px;
                background: slategrey;
                margin-left: 5px;
                cursor: pointer;
            }
        }
        &:hover{
            .preview-module-edit{
                display: flex;
            }
        }
    }
}
</style>>
