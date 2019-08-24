<template>
    <div>
        {{getName}}
    </div>
</template>
<script>
export default {
    props: {
        propName: {
            type: String,
            default: 'sqw'
        }
    },
    data() {
        return { name: 'sunine'}
    },
    computed:{
        getName() {
            console.log('get name', this.name);
            console.log('_data.name', this._data.name);
        }
    },
    methods:{
        methodName() {
            console.log(this.name);
        }
        // getName() {
        //     console.log('hell', this.name);
            
        // }
    }
}
</script>