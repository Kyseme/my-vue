<template>
<div>
    <!-- <child :show.sync="valueChild"></child> 
    <child :show="valueChild" @update:show="val => valueChild = val"></child> -->
    <!-- <child :show="valueChild" @change="changeValue"></child>
   
    <div>{{valueChild}}</div> -->
    <!-- <child v-model="name"></child> -->
    <!-- <child :value="name" @input="name=$event.target.value"></child> -->
    <!-- <child :value="name" @input="changeInput"></child>  -->
    <!-- <div>hellllo</div>
    <button @click="changeValue" type="button">parent</button> -->
    <!-- <div>this is parent page</div> -->
    <child-obj :obj.sync="editItem">
    </child-obj>
    <button type="button" @click="changeHandle">parent click</button>
    把 js 中 import 导入的样式文件代码，打包到 js 文件中，运行 js 文件时，将样式自动插入到

</div>
</template>

<script>
import Child from './Child.vue';
import ChildObj from './ChildObj.vue';
export default {
    props:{
        // list:''
    },
    data() {
        return {
            valueChild: true,
            name:'sqw',
            list:'',
            editItem: {
                name: 'sunine'
            }
        };
    },
    components: {
        Child,
        ChildObj
    },
    methods: {
        changeValue() {
            // this.valueChild = !this.valueChild;
            console.log('parentttttt', this.name);
        },
        changeInput($event, tt){
            console.log($event, tt);
        },
        changeHandle() {
            this.editItem.name="parent";
        },
        // list(){
           
        // }
    },
    computed:{
        // list(){
        //     return this.name;
        // }
    },
    watch: {
        name() {
            console.log('parent-wather', this.name);
        }
    },
    created() {
        console.log('parent created');
    },
    updated() {
        console.log('parent updated');
    }
};
</script>
<style scoped>
.parent{
    font-size: 16px;
    background: red;
}
</style>
