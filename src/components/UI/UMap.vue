<script setup lang="ts">
import { onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';
import marker from '../../assets/icons/marker.svg'
import "@maptiler/leaflet-maptilersdk";

const mapContainer = ref<HTMLDivElement | null>(null);

export interface Props {
    coords: {
        long: number,
        lat: number
    },
    type: string[]
}

const props = withDefaults(defineProps<Props>(), {
    coords: () => ({
        long: 42.872634489350204,
        lat: 74.58843723813735,
    }),
    type: () => ['large', 'small']
})

onMounted(() => {
    if (mapContainer.value) {
        const customMarker = L.icon({
            iconUrl: marker,
            iconSize: [62, 78]
        })

        const map = L.map(mapContainer.value).setView([props.coords.long, props.coords.lat], 18);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 18,
        // }).addTo(map);

        const mtLayer = new L.MaptilerLayer({
            apiKey: "ztiohpIYBKrIEGLQN2CW",
        }).addTo(map);

        L.marker([props.coords.long, props.coords.lat], { icon: customMarker }).addTo(map)
    }
});
</script>

<template>
    <div :class="[props.type.includes('large') && props.type ? 'large' : 'small', 'map-container']" ref="mapContainer">
    </div>
</template>

<style>
.map-container {
    border-radius: 2.60vw;
}

.small {
    width: 27.76vmax;
    height: 18.229vmax;
    border-radius: 1.563vw;
}

.large {
    height: 46.88vmax;
    width: 46.88vmax;
}

.leaflet-marker-icon {
    width: 3.23vw !important;
    height: 4.06vw !important;
}

.leaflet-container {
    filter: grayscale(100%);
}
</style>