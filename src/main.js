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
        status:'Pending',
        dateTime : new Date().toLocaleString('en-us', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        }).replace(/,([^,]*)$/, ' at$1') 
      },
      {
        id:2,
        task:"task 2",
        status:'Completed',
        dateTime : new Date().toLocaleString('en-us', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        }).replace(/,([^,]*)$/, ' at$1') 

      },
    ],
    allTask:[],
  },
  
  getters:{
    taskIndex: (state)=> (taskId)=>{
      return state.tasks.findIndex(task => task.id === taskId)
    },
    allTasks:(state) => {
      state.allTask = state.tasks;
    },
    pendingTasks: (state, getters) => {
       return state.tasks.filter(task => task.status === 'Pending'); 
    },
    completedTasks: (state) => {
      return state.tasks.filter(task => task.status === 'Completed')
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
            status:'Pending',
             dateTime : new Date().toLocaleString('en-us', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            }).replace(/,([^,]*)$/, ' at$1')    
        }
        state.tasks.push(task);
        store.commit('sortTasks');
        state.allTask = state.tasks;
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
      state.allTask = state.tasks;

    },
    sortTasks(state){
      let sortedTask = []
      
      store.getters.pendingTasks.forEach((task)=>{
        sortedTask.push(task);
      });

      store.getters.completedTasks.forEach((task)=>{
          sortedTask.push(task);
      });
      
      state.tasks = sortedTask;
    },
    clearAll(state){
      state.tasks=[];
      state.allTask = state.tasks;

    },
    pending(state){
      state.pendingTask = store.getters.pendingTasks;
    },
    completed(state){
      state.completedTask = store.getters.completedTasks;
    },
    displayAll(state){
      state.tasks = state.allTask;
    }
  }
})

import './assets/main.css'

new Vue({
  store: store,
  render: (h) => h(App)
}).$mount('#app')