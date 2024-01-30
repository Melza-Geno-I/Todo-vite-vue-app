import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    inputValue:null,
    tasks:[
      {
        id:1,
        task:"task 1",
        status:'Pending'
      },
      {
        id:2,
        task:"task 2",
        status:'Completed'
      },
    ]
  },
  getters:{
    taskIndex: (state)=> (taskId)=>{
      return state.tasks.findIndex(task => task.id === taskId)
    } 
  },
  mutations:{
      addTask(state, inputValue){
        if(!inputValue){
          alert('No task Entered!')
          return;
      }
        let task = {
            id: new Date().getTime(),
            task: inputValue,
            status:'Pending'
        }
        state.tasks.push(task);
        store.commit('sortTasks');
        state.inputValue=''
    },
    toggleStatus(state, id){
        let taskIndex = store.getters.taskIndex(id);
        let taskStatus = state.tasks[taskIndex].status;
        if(taskIndex != -1 ){
          state.tasks[taskIndex].status = taskStatus === "Pending" ? "Completed": "Pending";
        }
        store.commit('sortTasks');

    },
    deleteTask(state, id){
      let taskIndex = store.getters.taskIndex(id);
      if(taskIndex != -1 && confirm("Do you want to remove this task?")){
        state.tasks.splice(taskIndex,1);
      }
      store.commit('sortTasks');
    },
    sortTasks(state){
      let sortedTask = []
      let pendingTask = state.tasks.filter(task => task.status !== "Completed");
      let completedTask = state.tasks.filter(task => task.status === "Completed");

      pendingTask.forEach((task)=>{
        sortedTask.push(task);
      });

      completedTask.forEach((task)=>{
          sortedTask.push(task);
      });
      
      state.tasks = sortedTask;
    }
  }
})

import './assets/main.css'

new Vue({
  store: store,
  render: (h) => h(App)
}).$mount('#app')