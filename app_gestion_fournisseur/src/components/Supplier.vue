<template>
    <div>
        <h1>{{name}}</h1>

        <h3 class="red" v-if="!status">Reste du stock = No</h3>
        <h3 class="green" v-if="status">Reste du stock = Yes</h3>

        <h5>Dernier relevée du stock : {{checkedAt}}</h5>

    </div>
</template>

<script>
    export default {
        name: "Supplier",
        props: {
            id:String,
            name: String,
            status: Boolean,
            checkedAt: String
        }
    }
</script>

<style scoped>

    .red{
        color: red;
    }

    .green{
        color: yellowgreen;
    }

</style>