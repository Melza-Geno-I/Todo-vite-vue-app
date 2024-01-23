<template>
  <div id="app">
    <div class="container">
      <h1>TODO List</h1>
      <InputComponent :tasks="tasks" @addtask="addTask"></InputComponent>
      <TaskListComponent :todoItems="tasks" @status="toggleStatusValue" @deleteTask="deleteitem"></TaskListComponent>
    </div>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent.vue';
import TaskListComponent from './components/TaskListComponent.vue';
export default{
  name:'App',
  components:{
    InputComponent,
    TaskListComponent
  },
  data(){
    return{
        tasks:[
          {
            id:1,
            task:"task 1",
            status:'Completed'
          },
          {
            id:2,
            task:"task 2",
            status:'Pending'
          },
      ]
    }
  },
  methods:{
    addTask(task){
      this.tasks.push(task);
      console.log(this.tasks);
    },
    deleteitem(id){
      let index = this.tasks.findIndex( task => task.id === id)
        if(index!=-1 && confirm('Do you want to remove this task?')){
          this.tasks.splice(index,1);
        }
    },
    toggleStatusValue(status,index){
      console.log(index)
      this.tasks[index].status=status;
    },
    sortTasks(){
      let sortTasks=[]
        let PendingTask=this.Tasks.status==="Pending";
        let CompletedTask=this.Task.status==="Completed";

        sortTasks+=PendingTask;
        sortTasks+=CompletedTask;
        tasks=sortTasks;
    }
  }
}
</script>



<style scoped>
#app{
  display: flex;
  align-items: center;
}
.container{
 
  margin:  5%;
  text-align: center;
  width:600px;
  height: 800px;
  border-radius: 75px;
  background-color:white;
  .innerContainer{
      height: 150px;
      border-radius: 75px 75px 0 0;
  }
}
.container h1{
  margin: 20px  ;
  color: black;
  font-size: xx-large;
  font-weight: bolder;
}
</style>
