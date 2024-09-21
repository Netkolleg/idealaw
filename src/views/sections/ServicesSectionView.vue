<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Service {
    id: number | null,
    path: string
    name: string
    info: string
}

interface ServiceCategory {
    title: string
    name: string
    services: Service[]
}

const state = reactive<{
    tab: string
    civilServices: Service[]
    criminalServices: Service[],
    otherServices: Service[]
}>({
    tab: 'civil',
    civilServices: [],
    criminalServices: [],
    otherServices: []
})

const props = defineProps<{
    services: {
        civil: ServiceCategory
        criminal: ServiceCategory,
        other: ServiceCategory
    }
}>()

onBeforeMount(() => {
    if (props.services) {
        state.civilServices = props.services.civil.services.slice(0, 9) || []
        state.criminalServices = props.services.criminal.services.slice(0, 9) || []
        state.otherServices = props.services.other.services.slice(0, 9) || []
    }
})

function switchTab(name: string) {
    state.tab = name
}

function pushToRoute(pathName: string, routeParams: { type: string, path: string }, id: number | null) {
    router.push({ name: pathName, params: { type: routeParams.type, path: routeParams.path }, query: { id: id } })
}
</script>

<template>
    <div class="services-section">
        <u-navheader :title="'Услуги'" :type="'sections'" :path="'services'" />
        <div class="segmented-control-wrapper">
            <div class="segmented-control">
                <button
                    v-for="(category, index) in [props.services.civil, props.services.criminal, props.services.other]"
                    :key="index" @click="switchTab(category.name)"
                    :class="[{ 'tab-active': state.tab === category.name }, 'segmented-tab']">
                    {{ category.title }}
                </button>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div v-if="state.tab === 'civil'" class="services-content">
                <div v-for="(service, index) in state.civilServices" :key="index">
                    <u-service-item @click="pushToRoute('service', { type: 'civil', path: service.path }, service.id)"
                        :serviceInfo="service" />
                </div>
            </div>
            <div v-else-if="state.tab === 'criminal'" class="services-content">
                <div v-for="(service, index) in state.criminalServices" :key="index">
                    <u-service-item
                        @click="pushToRoute('service', { type: 'criminal', path: service.path }, service.id)"
                        :serviceInfo="service" />
                </div>
            </div>
            <div v-else class="services-content">
                <div v-for="(service, index) in state.otherServices" :key="index">
                    <u-service-item @click="pushToRoute('service', { type: 'other', path: service.path }, service.id)"
                        :serviceInfo="service" />
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.services-section {
    max-width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 2.60vw;
    margin: 5.21vw 3.13vw;
}

.services-content {
    display: flex;
    flex-flow: row wrap;
    gap: 0.52vw;
    min-height: 26.04vw;
}

.segmented-control-wrapper {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.segmented-control {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    min-width: 26.04vw;
    height: 3.59vw;
    background-color: white;
    border: 1px var(--gray-border) solid;
    border-radius: 50vw;
}

.segmented-tab {
    width: 13.54vw;
    font-weight: var(--medium);
    font-size: 1.30vw;
    color: var(--gray-additional);
    border-radius: 50vw;
    outline: 2px transparent solid;
    cursor: pointer;
    transition: transform 0.4s ease, color 0.4s ease;
}

.tab-active {
    width: 13.54vw;
    color: var(--c-black);
    outline: 2px var(--c-black) solid;
    background-color: white;
    transition: transform 0.4s ease, color 0.4s ease;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>