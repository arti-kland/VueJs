<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png"/>
        <div>
            <h1>Que voulez vous faire ?</h1>
            <button class="space">
                <router-link to="/list">Liste des fournisseurs</router-link>
            </button>

            <button class="space">
                <router-link to="/map">Carte fournisseurs</router-link>
            </button>

        </div>
        <router-view></router-view>
    </div>

</template>

<script>

    export default {
        name: 'app',
        components: {}
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

    .space {
        margin: 10px;
      }
</style>
