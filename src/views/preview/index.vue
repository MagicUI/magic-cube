<template>
    <div class="preview-part">
        <ControlScale @change-scale="changeScale" :scaleRate="scaleRate"/>
        <div class="preview" :style="{'transform': `scale(${scaleRate})`}">
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
                        <div class="preview-module-edit" v-if="!obj.anchoring">
                            <span class="operate edit" @click="_edit(index)">edit</span>
                            <span class="operate edit" @click="_anchor(index)">anchor</span>
                            <span v-if="index !== 0" class="operate up" @click="_upModule(index)">up</span>
                            <span v-if="index !== decorationModList.length -1 " class="operate down" @click="_downModule(index)">down</span>
                            <span class="operate x" @click="_deleteModule(index)">del</span>
                        </div>
                        <div class="preview-module-anchor" v-if="startAnchor">
                            <anchor v-if="obj.anchoring" :moduleIndex="index" :moduleData="obj"  :saveAnchor="_saveAnchor" :cancelAnchor="_cancelAnchor"></anchor>
                            <div v-else class="preview-module-anchor-mask"></div>
                        </div>
                        <component :is="'c-' + obj.type" :moduleInfo="obj"></component>
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
    </div>
</template>

<script>
import BaseModList from '../baseModList.js';
import ControlScale from './controlScale.vue';
import Anchor from './anchor.vue';
export default {
    name: 'preview',
    components: {
        ControlScale,
        Anchor
    },
    data(){
        return{
            lastReceiving: false,
            scaleRate: 0.7,
            startAnchor: false,
            moduleDataBk: {}
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
    beforeCreate() {
        BaseModList.list.forEach((obj) => {
            this.$options.components[`C${obj.type}`] = window[`magic${obj.type}`]
        });
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
        },
        _anchor(index){
            this.startAnchor = true;
            let temp = this.decorationModList[index];
                this.moduleDataBk = temp;
                temp.anchoring = true;
                this.$store._actions.updateModule[0]({
                    updateIndex: index,
                    updateData: temp
                });
        },
        changeScale(rate) {
            this.scaleRate = rate;
        },
        _saveAnchor(index){
            this.startAnchor = false;
            let temp = this.decorationModList[index];
                temp.anchoring = false;
                this.$store._actions.updateModule[0]({
                    updateIndex: index,
                    updateData: temp
                });
            let saveJson = {
                list: this.$store.state.decorationModList
            };
            let saveString = JSON.stringify(saveJson);

            let FileSaver = require('file-saver');
            let blob = new Blob([saveString ], {type: "text/plain;charset=utf-8"}); 
            FileSaver.saveAs(blob, "designData.js");
        },
        _cancelAnchor(index){
            this.startAnchor = false;
            let temp = this.moduleDataBk;
                temp.anchoring = false;
                this.$store._actions.updateModule[0]({
                    updateIndex: index,
                    updateData: this.moduleDataBk
                });
        }
    },
}
</script>

<style lang="less">
.preview-part {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .preview{
        position: relative;
        width: 460px;
        height: 875px;
        margin-top: 30px;
        // margin-bottom: 30px;
        overflow: hidden;
        background: #f6f6f6;
        background: url("../../assets/iphone.png") no-repeat;
        background-size: 100% 100%;
        &-view{
            width: 400px;
            height: 669px;
            margin: 0 auto;
            margin-top: 104px;
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
            box-sizing: border-box;
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
            &-anchor{
                position: absolute;
                top: 0;
                bottom: 0;
                left:0;
                right: 0;
                flex-direction: row;
                z-index: 9999;
                &-mask{
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, .6);
                }
            }
        }
    }

}
</style>>
