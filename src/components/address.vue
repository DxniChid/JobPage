<script>

    export default{
        props: {
            location: {
                Type: String,
                required: true
            },
            postalCode: {
                Type: Number,
                required: true
            },
            canton: {
                Type: String,
                required: true
            },
            companyName: {
                Type: String,
                required: true
            },
            locationIcon: {
                Type: Image,
                required: false
            },
            buildingIcon: {
                Type: Image,
                required: false
            }
        }
    }

</script>

<template>

  <span id="location"><img :src=locationIcon /> <label>{{ location }}, {{ postalCode }} | {{ canton }}</label></span>
    <span id="company"><img :src=buildingIcon /> <label>{{ companyName }}</label></span>

</template>

<style scoped>
    img{
        height: 20px;
        width: 20px;
        
    }
    span{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        gap: 10px;
        
    } 

</style>