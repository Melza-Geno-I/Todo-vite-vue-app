<template>
     <div class="taskContainer">
            <TaskComponent  :todoTasks="todoItems"></TaskComponent>
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