<template>
    <ButtonGroup shape="circle" class="scale" size="small">
        <Button @click="_addRate"><Icon type="md-add" /></Button>
        <Button @click="_reduceRate"><Icon type="md-remove" /></Button>
    </ButtonGroup>
</template>

<script>
export default {
    props: ['scaleRate'],
    methods: {
        _reduceRate () {
            let rate = this.scaleRate*0.9;
            if (rate<=0.4) {
                rate = 0.4
            }
            this.$emit('change-scale',rate);
        },
        _addRate () {
            let rate = this.scaleRate*1.1;
            if (rate>=0.8) {
                rate = 0.8
            }
            this.$emit('change-scale',rate);
        }
    }
}
</script>

<style scoped>
.scale {
    position: absolute;
    right: 5px;
    top: 35px;
}
</style>