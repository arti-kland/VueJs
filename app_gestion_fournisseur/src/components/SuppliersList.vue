<template>
    <div class="container">
        <h1>Liste des fournisseur</h1>

        <div>
            <button type="button" v-on:click="stockOk">Stock Ok</button>
            <button type="button" v-on:click="stockKo">Stock Ko</button>
            <button type="button" v-on:click="stockAll">Stock All</button>
        </div>

        <div class="encart" v-for="supplier in filtredDatas" :key="supplier.id">
            <Supplier v-bind:id="supplier.id" v-bind:name="supplier.name" v-bind:status="supplier.status"
                      v-bind:checkedAt="supplier.checkedAt"></Supplier>
        </div>
    </div>
</template>

<script>
    import Supplier from './Supplier'
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'


    export default {
        name: 'Suppliers',
        data : function() {
            return {
                filter: 'all'
            }
        },
        components: {
            Supplier
        },
        props: {
            msg: String,
        },
        computed: {
            ...mapState([
                'suppliers',
            ]),
            ...mapGetters([
                'filteredByStockOk',
                'filteredByStockKo'
            ]),
            filtredDatas: function() {
                if (this.filter==='all') {
                    return this.suppliers
                }
                if (this.filter === 'Ok') {
                    return this.filteredByStockOk
                }
                if (this.filter === 'Ko'){
                    return this.filteredByStockKo
                }

            }
        },
        mounted() {
            this.$store.dispatch('LOAD_SUPPLIERS_LIST')
        },
        methods: {
            stockOk: function () {
                this.filter = 'Ok'
            },
            stockAll: function () {
                this.filter = 'all'
            },
            stockKo: function () {
                this.filter = 'Ko'
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

    .encart {
        width: 800px;
        border: 3px solid mediumseagreen;
        margin-top: 20px;

    }

</style>