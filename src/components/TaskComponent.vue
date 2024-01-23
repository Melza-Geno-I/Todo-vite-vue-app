<template>
    <ul class="todoTasks">
        <div v-for="(element,index) in todoTasks" :key="index">
        <li class="todoTask" >
                <h3>{{ element.task}}</h3>
                <button @click="toggleStatus( element.status, index)" :class="{is:true, completed: element.status==='Completed'}">{{ element.status }}</button>
                <i class="ri-close-circle-fill" @click="deletetask(element.id)"></i>
            </li>
        </div>
    </ul>
         
       
</template>

<script>
export default{
    name:'TaskComponent',
    props:['todoTasks'],
    methods:{
        toggleStatus(status,index){
           console.log('toggle clicked')
            status = status==="Pending"? "Completed" : "Pending"
            this.$emit("updateStatus",status,index);
        },
        deletetask(id){
            // let taskID = 
            this.$emit('deleteTask',id);
        }
    }
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