
<template>
  <div class="inputContainer">
        <input class="inputBox" v-model="$store.state.inputValue" type="text" placeholder="What do you want to do?">
        <button @click="$store.commit('addTask',$store.state.inputValue)"><i class="ri-check-line"></i></button>
        <i class="ri-eraser-fill clear" @click="$store.commit('clearAll')"></i>
    </div>
</template>


<script>
</script>


<style scoped>
 .clear{
        color: rgb(68, 62, 62);
        font-size:25px ;
        padding: 5px;
        cursor: pointer;
        transition: .2s;
    }
    .clear:hover{
        transform: scale(1.1);
    }
    .clear:active{
        transform: scale(1);
    }
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
        font-size: 30px;
        cursor: pointer;
        color: #352f44; 
        transition: .2s;
    }
    .inputContainer button:hover{
        transform: scale(1.1);
    }
    .inputContainer button:active{
        transform: scale(0.9);
    }
    .inputContainer .tabs{
        color: black;
        cursor: pointer;
    }
</style>
