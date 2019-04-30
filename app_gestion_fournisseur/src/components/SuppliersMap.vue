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
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"

                />
            </GmapMap>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SuppliersMap",
        props: {
            msg: String
        },
        data: function () {

            return {
                suppliers: [
                    {
                        id: 1,
                        name: 'fournisseur 1',
                        position: {
                        lat: 10,
                        lng: 10
                        }
                        },{
                        id: 2,
                        name: 'fournisseur 2',
                        position: {
                        lat: 11,
                        lng: 9.6
                        } }
                ]
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
        width: 800px;
        height: 600px;
        margin-bottom: 50px;
    }

</style>