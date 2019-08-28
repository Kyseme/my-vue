<template>
    <div>
        <span>{{obj.name}}</span>
        <button type="button" @click="handleChild">child click</button>
    </div>
</template>
<script>
export default {
    props:{
        obj: Object
    },
    methods:{
        handleChild(){
            this.obj.name = "child chillll";
        }
    }
}
</script>