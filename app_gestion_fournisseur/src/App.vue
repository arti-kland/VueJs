<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
      <button  v-on:click="onSuppliersListClick" rel="noopener">Liste des fournisseurs</button>
      <button  v-on:click="onMapClick" rel="noopener">Carte des fournisseurs</button>
          <SuppliersList></SuppliersList>
          <SuppliersMap></SuppliersMap>
    </div>
  </div>
</template>

<script>
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";


export default {
  name: 'app',
  components: {
    SuppliersList,
    SuppliersMap
  },methods: {
    onSuppliersListClick: function(){
      window.alert('Vous avez click sur list fournisseur')
    },
    onMapClick: function(){
      window.alert('Vous avez click sur list fournisseur')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
