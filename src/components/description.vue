<script>

export default{
    props: {
        jobtitle: {
            Type: String,
            required: true
        },
        description: {
            Type: String,
            required: true
        },
        requirements: {
            Type: String,
            required: true
        },
        offer: {
            Type: String,
            required: true
        }
    }
}

</script>

<template>

    <h1>{{ jobtitle }}</h1>
    <br>
    <p> {{ description }}</p>
    <br>
    <h2>Requirements:</h2>
    <p>{{ requirements }}</p>
    <br>
    <h2>What we offer</h2>
    <p>{{ offer }}</p>

</template>

<style scoped>

    h2 {
        font-style: italic;
    }

</style>