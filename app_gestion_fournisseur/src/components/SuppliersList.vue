<template>
    <div class="container">
        <h1>Liste des fournisseur</h1>
        <div class="encart" v-for="supplier in suppliers" :key="supplier.id">
        <Supplier  v-bind:id="supplier.id" v-bind:name="supplier.name" v-bind:status="supplier.status" v-bind:checkedAt="supplier.checkedAt" ></Supplier>
        </div>
    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import { format, render, cancel, register } from 'timeago.js';
    export default {
        name: "Suppliers",
        components: {
            Supplier
        },
        props: {
            msg: String,
        },
        data: function () {
            return {
            suppliers: [{
                id: 1,
                name: 'Fournisseur 1',
                status: true,
                checkedAt: format(new Date().toLocaleString())
            },
                {
                    id: 2,
                    name: 'Fournisseur 2',
                    status: false,
                    checkedAt: format(new Date().toLocaleString())
                }]
            }
        }

    }
</script>


<style scoped>
 .container {
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
    .encart{
         width: 800px;
        border:  3px solid mediumseagreen;
        margin-top: 20px;

    }

</style>