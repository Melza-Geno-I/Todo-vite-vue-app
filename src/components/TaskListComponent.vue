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

</style>