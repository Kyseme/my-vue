<template>
<div>
    <!-- <child :show.sync="valueChild"></child> 
    <child :show="valueChild" @update:show="val => valueChild = val"></child> -->
    <child :show="valueChild" @change="changeValue"></child>
    <button @click="changeValue" type="button">parent</button>
    <div>{{valueChild}}</div>

</div>
</template>

<script>
import Child from './Child.vue';
export default {
    data() {
        return {
            valueChild: true,
        };
    },
    components: {
        Child
    },
    methods: {
        changeValue() {
            this.valueChild = !this.valueChild;
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

