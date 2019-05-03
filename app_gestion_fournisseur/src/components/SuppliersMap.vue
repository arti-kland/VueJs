<template>

    <div>
        <h1>Carte des fournisseurs</h1>
        <div class="container">
            <GmapMap
                    class="sizeMap"
                    :center="{ lat:currentPosition.lat , lng:currentPosition.lng}"
                    :zoom="17"
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
    import { mapState} from 'vuex'
    export default {
        name: "SuppliersMap",
        props: {
            msg: String
        },
        computed: mapState([
            'suppliers'
        ]),
        data : function() {
        return {
            currentPosition : { lat:0, lng:0}
        }
        },
        mounted: function () {
            this.$store.dispatch('LOAD_SUPPLIERS_LIST');
            this.geolocation()
        },
        methods: {
            geolocation: function () {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.currentPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
            }
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
        width: 1200px;
        height: 600px;
        margin-bottom: 50px;
    }

</style>