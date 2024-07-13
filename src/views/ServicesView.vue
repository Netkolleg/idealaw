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
    tab: string
    civilServices: Service[]
    criminalServices: Service[]
}>({
    tab: 'civil',
    civilServices: [],
    criminalServices: []
})

onBeforeMount(() => {
    state.civilServices = allServices.civil.services || []
    state.criminalServices = allServices.criminal.services || []
})

function switchTab(name: string) {
    state.tab = name
}

function pushToRoute(pathName: string, routeParams: string) {
    router.push({ path: `${pathName + routeParams}` })
}
</script>

<template>
    <div class="services-wrapper">
        <u-navheader :title="'Услуги'" :type="'child-page'" />
        <div class="services-section">
            <div class="segmented-control-wrapper">
                <div class="segmented-control">
                    <button v-for="(category, index) in [allServices.civil, allServices.criminal]" :key="index"
                        @click="switchTab(category.name)"
                        :class="[{ 'tab-active': state.tab === category.name }, 'segmented-tab']">
                        {{ category.title }}
                    </button>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div v-if="state.tab === 'civil'" class="services-content">
                    <div v-for="(service, index) in state.civilServices" :key="index">
                        <u-service-item @click="pushToRoute('service/', `civil/${service.path}`)"
                            :serviceInfo="service" />
                    </div>
                </div>
                <div v-else class="services-content">
                    <div v-for="(service, index) in state.criminalServices" :key="index">
                        <u-service-item @click="pushToRoute('service/', `criminal/${service.path}`)"
                            :serviceInfo="service" />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.services-wrapper {
    margin: 2.60vw 3.13vw;
}

.services-section {
    max-width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 2.60vw;
}

.services-content {
    display: flex;
    flex-flow: row wrap;
    gap: 0.52vw;
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
    width: 13.52vw;
    font-weight: var(--medium);
    font-size: 1.30vw;
    color: var(--gray-additional);
    border-radius: 50vw;
    outline: 2px transparent solid;
    cursor: pointer;
    transition: transform 0.4s ease, color 0.4s ease;
}

.tab-active {
    width: 13.50vw;
    color: var(--c-black);
    outline: 2px var(--c-black) solid;
    border-radius: 50vw;
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
