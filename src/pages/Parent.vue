<template>
<div>
    <!-- <child :show.sync="valueChild"></child> 
    <child :show="valueChild" @update:show="val => valueChild = val"></child> -->
    <!-- <child :show="valueChild" @change="changeValue"></child>
   
    <div>{{valueChild}}</div> -->
    <child v-model="name"></child>
    <!-- <input :value="name" @input="name=$event.target.value"></input> -->
    <button @click="changeValue" type="button">parent</button>

</div>
</template>

<script>
import Child from './Child.vue';
export default {
    data() {
        return {
            valueChild: true,
            name:'sqw'
        };
    },
    components: {
        Child
    },
    methods: {
        changeValue() {
            // this.valueChild = !this.valueChild;
            console.log('parentttttt', this.name);
        }
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

