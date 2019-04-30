<template>

    <div>
        <h1>Carte des fournisseurs</h1>
        <div class="container">
            <GmapMap
                    class="sizeMap"
                    :center="{lat:10, lng:10}"
                    :zoom="7"
                    map-type-id="terrain"
            >
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in suppliers"
                        :position="{lat:parseFloat(m.latitude),
                                    lng:parseFloat(m.longitude)}"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"

                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    export default {
        name: "SuppliersMap",
        props: {
            msg: String
        },
        data: function () {

            return {
                suppliers: [],
                loading: true,
                error: false
            }
        },
        created () {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    this.suppliers = response.data;
                    console.log(this.suppliers)
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
                .finally(() => this.loading = false)
        }
    }

</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sizeMap {
        width: 800px;
        height: 600px;
        margin-bottom: 50px;
    }

</style>