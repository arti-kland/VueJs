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
    import { mapState} from 'vuex'
    export default {
        name: "SuppliersMap",
        props: {
            msg: String
        },
        computed: mapState([
            'suppliers'
        ]),
    mounted: function () {
        this.$store.dispatch('LOAD_SUPPLIERS_LIST')
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