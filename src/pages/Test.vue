<template>
    <div>
        {{methodName()}}
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
    data() {return { dataName: 'sunine'}},
    computed:{
        computedName() {
            console.log('_data.name', this._data.dataName);
            return this.dataName + 'test page';
        }
    },
    methods:{
        methodName() {console.log(this.dataName);}
    }
}
</script>
<style scoped>
.active{
    color:aquamarine;
    font-size:32px;
}
</style>