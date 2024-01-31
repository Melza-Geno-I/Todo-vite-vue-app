<template>
     <div class="taskContainer">
            <TaskComponent></TaskComponent>
    </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';
export default{
    name:'TaskListComponent',
    components:{
        TaskComponent,
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