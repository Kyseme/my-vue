<template>
    <div>
        <!-- <div v-if="view">
            <p>默认初始值是{{view}}，所以是显示的</p>
            <button @click.stop="closeDiv" type="button">child tooggle</button>
        </div> -->
         <!-- {{value}}//child child chile
         <button @click="handleInput" type="button">按钮</button> -->
        <!-- <input ref="input" v-model="val" type="text"  @blur="blur"></input> -->
        <!-- <input ref="input" :value="val"  @input="inputChange"></input> -->
        <!-- <input :value="name" @input="name=$event.target.value"></input> -->
        <div>parenttttt</div>
    </div>
</template>
<script>
export default {
    props: {
        show: Boolean,
        value: String
    },
    data() {
        return {
            view: this.show,
            val: this.value || ''
        }
    },
    methods:{
        // closeDiv() {
        //     // this.$emit('update:show', false); 
        //     this.$emit('change',this.view);
        // },
        // handleInput() {
        //     console.log('value value .......');
        //     this.$emit('input', this.value);
        // },
        // inputChange(event) {
        //     this.val = event.target.value;
        //     this.$emit('input', this.val);
        // },
        blur() {
            this.$emit('input', this.val);
        }
    },
    watch: {
        // show(val) {
        //     this.view = val;
        //     console.log('show watcher',val);
        // },
        val(t) {
            console.log('child valllll',t);
            // this.$emit('input', name)
        },
        value(t) {
            this.val = name;
            console.log('child value...',t);
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
<style scoped>
.child{
    font-size: 16px;
    background: blue;
}
</style>