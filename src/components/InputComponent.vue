
<template>
  <div class="inputContainer">
        <input class="inputBox" v-model="inputText" type="text" placeholder="What do you want to do?">
        <button @click="addTasks"><i class="ri-add-circle-fill"></i></button>
    </div>
</template>


<script>
export default{
    props:['tasks'],
    data(){
        return{
            inputText:''
        }
    },
    methods:{
        addTasks(){
            let task = {
                id: new Date(),
                task: this.inputText,
                status:'Pending'
            }
           this.$emit('addtask',task);
    }
}
   
}

</script>


<style scoped>
 .inputContainer{
        margin: 2% 5%;
        background-color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        .inputBox{
            background-color:  rgb(242, 242, 242);
            height: 50px;
            width: 360px;
            border: none;
            outline: none;
            border-radius: 25px;
            font-size: 15px;
            padding: 10px;
            margin-bottom: 8px;
        }
        .inputBox:focus{
            background-color: rgba(218, 218, 218, 0.407);

        }
    }
    .inputContainer button{
        background-color: transparent;
        border: none;
        font-size: 40px;
        cursor: pointer;
        color: #352f44; 
    }
    .inputContainer button:active{
        transform: scale(0.9);
    }
</style>
