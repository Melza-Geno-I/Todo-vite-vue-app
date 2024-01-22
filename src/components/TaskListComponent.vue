<template>
     <div class="taskContainer">
            <TaskComponent  :todoTasks="todoItems" @updateStatus="statusUpdate"></TaskComponent>
    </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';
export default{
    name:'TaskListComponent',
    components:{
        TaskComponent,
    },
    props:{
        todoItems:{
                    type:Array,
                    default:[]
                }
            },
            methods:{
                statusUpdate(status,id){
                    this.$emit('status',status,id)
                }
            }
        
}


</script>

<style scoped>
.taskContainer{
    /* border: 1px solid red; */
    width: 500px;
    height: 600px;
    overflow-y: auto;
}
</style>