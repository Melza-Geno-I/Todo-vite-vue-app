<template>
  <div id="app">
    <div class="container">
      <h1>TODO List APP</h1>
      <InputComponent></InputComponent>
      <TaskListComponent></TaskListComponent>
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
