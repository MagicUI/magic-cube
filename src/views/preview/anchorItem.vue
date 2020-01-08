<template>
    <VueDragResize 
        class="anchor-item"
        :preventActiveBehavior="true" 
        :isActive="true" 
        :isDraggable="true" 
        :isResizable="true" 
        :x="pos.x" 
        :y="pos.y" 
        :w="pos.w > 0 ? pos.w  : 1" 
        :h="pos.h > 0 ? pos.h  : 1"
        v-on:resizestop="resizestop">
        <div class="anchor-item-operate">
            <div class="operate" @click="_edit">edit</div>
            <div class="operate" @click="_close">close</div>
        </div>
    </VueDragResize>
</template>
<script>
import Vue from 'vue'
import VueDragResize from 'vue-drag-resize';

Vue.component('vue-drag-resize', VueDragResize)

export default {
    props: ['pos', 'moduleIndex', 'moduleData', 'anchorIndex'],
    components: {
        VueDragResize
    },
    data() {
        return {
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }
    },
    methods: {
        resizestop(rect){
            let temp = JSON.parse(JSON.stringify(this.moduleData));
            temp.anchorList[this.anchorIndex] = {
                x: rect.left,
                y: rect.top,
                w: rect.width,
                h: rect.height
            }
            this.$store._actions.updateModule[0]({
                updateIndex: this.moduleIndex,
                updateData: temp
            });
        },
        _edit(){
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: 'Please enter your url...'
                        },
                        on: {
                            input: (val) => {
                                let temp = JSON.parse(JSON.stringify(this.moduleData));
                                temp.anchorList[this.anchorIndex].link = val;
                                this.$store._actions.updateModule[0]({
                                    updateIndex: this.moduleIndex,
                                    updateData: temp
                                });
                            }
                        }
                    })
                }
            })
        },
        _close(){
            let temp = JSON.parse(JSON.stringify(this.moduleData));
            temp.anchorList.splice(this.anchorIndex, 1);
            this.$store._actions.updateModule[0]({
                updateIndex: this.moduleIndex,
                updateData: temp
            });
        }
    },
}
</script>
<style lang="less">
.anchor-item{
    background:rgba(223, 53, 53, .3);
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
</style>