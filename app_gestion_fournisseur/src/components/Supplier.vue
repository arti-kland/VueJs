<template>
    <div>
        <h1>{{name}}</h1>

        <h3 v-bind:style="changeColor()">{{status}}</h3>

        <h5>{{checkedAt}}</h5>

    </div>
</template>

<script>
    export default {
        name: "Supplier",
        props: {
            // msg: String
        },
        data: function () {
            return {
                name: 'fournisseur A',
                status: true, // est ce qu'il y a du stock
                color: 'green',
                checkedAt: new Date().toLocaleString() // date de la dernière mise à jour du stock
            }
        },
        methods: {
            changeColor: function() {
                if (this.status == false) {
                    return {color: '#00ff00'}
                }else {
                    return {color: '#FF0060'}
                }
            }
        }
    }
</script>

<style scoped>

</style>