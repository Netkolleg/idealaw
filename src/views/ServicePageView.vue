<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { allServices } from '../collections'

const router = useRouter()

interface Service {
    path: string
    name: string
    info: string
}

const state = reactive<{
    service: Service | null,
}>({
    service: {
        path: '',
        name: '',
        info: ''
    }
})

const props = defineProps<{
    path: string | string[],
    type: string | string[]
}>()

onBeforeMount(() => {
    const tmpObj = Object.values(allServices).find(val => val.name === props.type)
    if (tmpObj) {
        state.service = tmpObj.services.find(el => el.path === props.path) ?? null
    }
})

function pushToRoute(pathName: string, routeParams: string) {
    router.push({ path: `${pathName + routeParams}` })
}
</script>

<template>
    <div class="services-content">
        {{ state.service }}
    </div>
</template>

<style scoped></style>