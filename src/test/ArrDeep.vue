<template>
<div>
    <div v-for="(item,index) in obj" :key="item.name">
            {{item.name}}
        <div v-for="(temp,tempIdx) in item.suggest" :key="temp.id">
            {{temp.name}}
            <span @click="removeName(index,tempIdx)">删除</span>
        </div>
        <hr>
        <hr>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            obj: [{
                name: 'sqw',
                suggest: [
                    {name: 'one', id: '1111'}
                ]
            },
                {
                    name: 'sun',
                    suggest: [
                        {name: 'sun-one', id: '3333'},
                        {name: 'sun-two', id: '222'}
                    ]
                }]
        };
    },
    methods: {
        removeName(index, tempIdx) {
            this.obj[index].suggest.splice(tempIdx, 1);
            // eslint-disable-next-line
            console.log('objjjjj', this.obj[index].suggest);
        }
    }
};
</script>

