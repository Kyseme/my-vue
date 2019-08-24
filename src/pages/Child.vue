<template>
    <div>
        <div v-if="view">
            <p>默认初始值是{{view}}，所以是显示的</p>
            <button @click.stop="closeDiv" type="button">child tooggle</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        show: Boolean
    },
    data() {
        return {
            view: this.show
        }
    },
    methods:{
        closeDiv() {
            // this.$emit('update:show', false); 
            this.$emit('change',this.view);
        },
    },
    watch: {
        show(val) {
            this.view = val;
            console.log('show watcher',val);
        }
    },
    created() {
        console.log('child created');
    },
    updated() {
        console.log('child updated');
    }
};
</script>