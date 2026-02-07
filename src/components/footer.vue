<script>
    export default{
        
        props: {
            contact:{
                type: String,
                required: true
            },
            adress:{
                type: String,
                required: true
            }


        }



    }

</script>

<template>

    <h4>{{ adress }}</h4>
    <p>{{ adress }}</p>
    <p>{{ adress }}</p>
    <p>{{ adress }}</p>

    <p>{{ contact }}</p>
    <p>{{ contact }}</p>


</template>