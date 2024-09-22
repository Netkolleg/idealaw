<script setup lang="ts">
import { reactive, onBeforeMount, computed } from 'vue'
import { allServices } from '../collections'
import DOMPurify from 'dompurify';
import { usePreviousRoute } from '../router/index';

interface Service {
    id: number | null,
    path: string
    name: string
    info: string
}

const state = reactive<{
    inputHTML: string | undefined,
    service: Service | null
}>({
    inputHTML: '',
    service: {
        id: null,
        path: '',
        name: '',
        info: ''
    }
})

const props = defineProps<{
    id: number | null,
    type: string | string[]
}>()

onBeforeMount(() => {
    const tmpObj = Object.values(allServices).find(val => val.name === props.type)
    if (tmpObj) {
        state.service = tmpObj.services.find(el => el.id === Number(props.id)) ?? null
        state.inputHTML = state.service?.info
    }
})

const previousRoute = usePreviousRoute()

const safeHTML = computed(() => DOMPurify.sanitize(state.inputHTML))
</script>

<template>
    <u-navheader :title="state.service?.name" :type="'child-page'" :previousRoute="previousRoute" />
    <div class="page-content">
        <h2>{{ state.service?.name }}</h2>
        <div class="page-container" v-html="safeHTML"></div>
    </div>
    <u-footer :type="'child-page'" />
</template>

<style>
.page-content {
    display: flex;
    flex-flow: column wrap;
    gap: 2.083vw;
    margin: 0vw 3.13vw 3.13vw 3.13vw;
    color: var(--c-black);
    min-height: 31.25vw;
}

.page-content h2:nth-of-type(1) {
    font-size: 2.604vw;
    font-weight: var(--bold);
    /* margin-bottom: 1.563vw; */
}

.page-content p {
    font-size: 1.563vw;
    font-weight: var(--medium);
    /* margin-bottom: 1.042vw; */
}

.page-container {
    display: flex;
    flex-flow: column wrap;
    gap: 2.5vw;
}

.page-container h2,
.page-container h3 {
    font-size: 2.083vw !important;
    font-weight: var(--bold);
    margin-bottom: 1.042vw;
}

.page-container p,
.page-container li {
    font-size: 1.563vw;
    font-weight: var(--regular);
}

.page-container ul {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.5vw;
    padding-left: 2vw;
    margin-top: 1vw;
}

@media screen and (max-width: 431px) {
    .page-content {
        gap: 3.488vw;
        margin: 5.814vw 5.814vw 5.814vw 5.814vw;
        min-height: 81.395vw;
    }

    .page-content h2:nth-of-type(1) {
        font-size: 5.116vw;
        font-weight: var(--bold);
        /* margin-bottom: 1.563vw; */
    }

    .page-content p {
        font-size: 3.5vw;
        font-weight: var(--medium);
        /* margin-bottom: 1.042vw; */
    }

    .page-container {
        display: flex;
        flex-flow: column wrap;
        gap: 4vw;
    }

    .page-container h2,
    .page-container h3 {
        font-size: 4.716vw !important;
        font-weight: var(--bold);
        margin-bottom: 3.042vw;
    }

    .page-container ul {
        display: flex;
        flex-flow: column nowrap;
        gap: 3vw;
        padding-left: 4vw;
        margin-top: 3.5vw;
    }

    .page-container p,
    .page-container li {
        font-size: 3.5vw;
    }
}
</style>