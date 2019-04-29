<template>
    <div>
        <h1>{{name}}</h1>

        <h3>{{status}}</h3>

        <h5>{{checkedAt}}</h5>

    </div>
</template>

<script>
    export default {
        name: "Suppliers",
        props: {
            // msg: String
        },
        data: function () {
            return {
                name: 'fournisseur A',
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date().toLocaleString() // date de la dernière mise à jour du stock

            }
        }

    }
</script>

<style scoped>

</style>