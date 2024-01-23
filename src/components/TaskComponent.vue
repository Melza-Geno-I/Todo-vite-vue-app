<template>
    <ul class="todoTasks">
        <div v-for="(element,index) in this.$store.state.tasks" :key="index">
        <li class="todoTask" >
                <h3>{{ element.task}}</h3>
                <button @click="$store.commit('toggleStatus', element.id)" :class="{is:true, completed: element.status==='Completed'}">{{ element.status }}</button>
                <i class="ri-close-circle-fill" @click="$store.commit('deleteTask',element.id)"></i>
            </li>
        </div>
    </ul>
         
       
</template>

<script>
export default{
    name:'TaskComponent',
}
</script>

<style scoped>
    .todoTasks{
        color: black;
        display: flex;
        align-items: right;
        flex-direction: column;
    }
    .todoTask{
                display: flex;
                align-items: center;
                justify-content: center;
                border-top: 1px solid rgb(175, 175, 175);
                padding: 15px;
                gap: 30px;
            }
    .todoTask h3{
                width: 250px;
                /* border: 1px solid red; */
                text-align: left;
    }
    .todoTask .is{
        width: 120px;
        height: 35px;
        border-radius: 20px;
        background-color:#E32636;
        color: white;
        border: none;
        cursor: pointer;
    }
    .todoTask i{
        font-size: 25px;
        color:  #5c5470; 
        cursor: pointer;

    }
    .todoTask .is.completed{
        background-color: #42b883;
    }
</style>