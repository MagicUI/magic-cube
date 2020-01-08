<template>
    <div class="anchor"
        @mousedown="_mousedown($event)"
        @mousemove="_mousemove($event)"
        @mouseup="_mouseup($event)"
        @mouseleave="_mouseup($event)"
    >
        <div class="anchor-edit">
            <span class="operate" @click="_save()">saveAnchor</span>
            <span class="operate" @click="_cancel()">cancelAnchor</span>
        </div>
        <div class="anchor-list" ref="test">
            <anchor-item 
                v-for="(obj, index) in moduleData.anchorList"
                v-bind:key="index"
                :pos="obj" :moduleData="moduleData" :moduleIndex="moduleIndex" :anchorIndex="index">{{obj}}</anchor-item>
        </div>
    </div>
</template>

<script>
import AnchorItem from './anchorItem.vue';
export default {
    props: ['moduleData', 'moduleIndex','saveAnchor', 'cancelAnchor'],
    components: {
        AnchorItem
    },
    data() {
        return {
            drawingStart: false // 开始绘制锚点
        }
    },
    computed: {
        anchorList(){
            return this.$store.state.decorationModList.anchorList || []
        }
    },
    methods: {
        _mousedown(e){
            this.drawingStart = true;
            let temp = JSON.parse(JSON.stringify(this.moduleData));
            let anchorList = this.moduleData.anchorList || [];
            anchorList.push({
                x: e.offsetX,
                y: e.offsetY,
                w: 0,
                h: 0,
            });
            temp.anchorList = anchorList;
            this.$store._actions.updateModule[0]({
                updateIndex: this.moduleIndex,
                updateData: temp
            });
        },
        _mousemove(e){
            if(!this.drawingStart){
                return;
            }
            let temp = JSON.parse(JSON.stringify(this.moduleData));
            let anchorList = temp.anchorList || [];
            anchorList[anchorList.length - 1].w = anchorList[anchorList.length - 1].w + e.movementX;
            anchorList[anchorList.length - 1].h = anchorList[anchorList.length - 1].h + e.movementY;
            temp.anchorList = anchorList;
            this.$store._actions.updateModule[0]({
                updateIndex: this.moduleIndex,
                updateData: temp
            });
        },
        _mouseup(e){
            this.drawingStart = false;
        },
        _save(){
            this.saveAnchor(this.moduleIndex);
        },
        _cancel(){
            this.cancelAnchor(this.moduleIndex);
        }
    }
}
</script>

<style scoped lang="less">
.anchor{
    border: 1px dashed yellowgreen;
    width: 100%;
    height: 100%;
    cursor: crosshair;
    &-edit{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        height: 30px;
        flex-direction: row;
        .operate{
            flex: 1;
            height: 30px;
            padding: 0 5px;
            line-height: 30px;
            background: slategrey;
            margin-left: 5px;
            cursor: pointer;
        }
    }
    &:hover{
        .anchor-edit{
            display: flex;
        }
    }
    &-list{
        width: 100%;
        height: 100%;
        &-item{
            position: absolute;
            background:rgba(223, 53, 53, .3);
            cursor: move;
            &-operate{
                position: absolute;
                bottom: 0;
                right: 0;
                flex-direction: row;
                display: none;
                .operate{
                    flex: 1;
                    padding: 2px 2px;
                    font-size: 12px;
                    background: slategrey;
                    margin-left: 5px;
                    cursor: pointer;
                }
            }
            &:hover &-operate{
                display: flex;
            }
            
        }
        .border-top{
            cursor: ns-resize;
        }
        .border-bottom{
            cursor: ns-resize;
        }
        .border-left{
            cursor: nesw-resize;
        }
        .border-right{
            cursor: nwse-resize;
        }
    }
}
</style>