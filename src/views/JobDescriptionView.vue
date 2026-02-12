<script setup>

import JobDescription from '../components/description.vue'

</script>

<template>
    <div id="box">

    <JobDescription jobtitle="Lorem Ipsum" description="Soem sugus", requirements="Sugus" offer="Pizza"/>
    
    </div>
</template>

<style scoped>

    #box{
        display:flex;
        justify-content: center;
        flex-direction: column;
        background-color: #f6f5f4;
        padding-inline-start: 1%;
        margin-inline: 5%;
        border-radius: 30px;
        
    }

</style>


