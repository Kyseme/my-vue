<template>
    <div>
        <div v-if="view">
            <p>默认初始值是{{view}}，所以是显示的</p>
            <button @click.stop="closeDiv" type="button">close</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        show: Boolean,
        value: String
    },
    data() {
        return {view: this.show,}
    },
    methods:{
        closeDiv() {this.$emit('update:show', false); },
    },
    watch: {
        show(val) {this.view = val;},
    },
    created() {console.log('child created');},
    updated() {console.log('child updated');}
};
</script>
<style scoped>
.child{
    font-size: 16px;
    background: blue;
}
</style>