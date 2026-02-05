<script>

export default {

    props: {
        
        title: {
            type: String,
            required: true
        },
        icon: {
            type: Image,
            requried: true
        },
        link: {
            type: String,
            requried: true
        }


    }



}

</script>

<template>

    <div>
    
       <h3>{{ link }}</h3>
    
       <h1>{{ title }}</h1>

       <img :src= icon>


    </div>

 


</template>

<style scoped>

    div{
        
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: aqua;
        align-items: center;
        margin: 0;
    }
    img{
        border-radius: 100%;
        width: 70px;
        height: 70px;
        margin: 10px;
        margin-right: 30px;
        
    }
    h3{
        margin: 10px;
        margin-left: 30px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif


    }
    h1{
        margin: 10px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

    }



</style>