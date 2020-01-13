<template>
    <div class="c-image" @mouseover="_mouseOver" @mouseout="_mouseOut">
        <Input class="input" :value="modelValue" @on-change="_handleChange" placeholder="Enter something..." style="width: 300px" />
        <Upload 
            action="//jsonplaceholder.typicode.com/posts/"
            @on-success="uploadImage"	>
            <Button icon="ios-cloud-upload-outline"></Button>
        </Upload>

        <div class="c-image-preview" v-if="showPreview">
            <span class="c-image-preview-triangle"></span>
            <img :src="modelValue" alt="">
        </div>
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
            showPreview: false
        }
    },
    methods: {
        _handleChange(e){
            let value = e.target.value;
            this.$emit('handleStringChange', {
                formName: this.formName,
                modelIndex: this.modelIndex,
                modelKey: this.modelKey,
                modelValue: value
            });
        },
        _mouseOver() {
            if (this.showPreview) return;
            this.showPreview = true;
        },
        _mouseOut() {
            this.showPreview = false;
        },
        uploadImage () {
            
        },
    },
}
</script>

<style lang="less">
.c-image{
    position: relative;
    display: flex;
    .ivu-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .ivu-btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
    }
    &-preview {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateY(-100%) translateX(-50%);
        width: 80%;
        padding: 10px;
        border-radius: 5px;
        background: rgba(0,0,0,0.4);
        z-index: 2;
        img {
            width: 100%;
        }
        &-triangle {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-top: 10px solid rgba(0,0,0,0.4);
            border-right: 10px solid transparent;
            border-left: 10px solid  transparent;
            border-bottom: 10px solid transparent;
            
        }
    }
}
</style>
