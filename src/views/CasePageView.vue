<script setup lang="ts">
import { reactive, onBeforeMount, computed } from 'vue'
import { cases } from '../collections'
import DOMPurify from 'dompurify';
import { usePreviousRoute } from '../router/index';

interface Case {
    id: number | null,
    path: string,
    title: string,
    description: string,
    info: string
}

const state = reactive<{
    inputHTML: string | undefined,
    case: Case | null,
}>({
    inputHTML: '',
    case: {
        id: null,
        path: '',
        title: '',
        description: '',
        info: ''
    }
})

const props = defineProps<{
    id: number | null
}>()

onBeforeMount(() => {
    state.case = Object.values(cases).find(el => el.id === Number(props.id)) ?? null

    state.inputHTML = state.case?.info
})

const previousRoute = usePreviousRoute()

const safeHTML = computed(() => DOMPurify.sanitize(state.inputHTML))
</script>

<template>
    <u-navheader :title="state.case?.title" :type="'child-page'" :previousRoute="previousRoute" />
    <div class="page-content">
        <h2>{{ state.case?.title }}</h2>
        <div v-html="safeHTML"></div>
    </div>
    <u-footer :type="'child-page'" />
</template>

<style>
.page-content {
    display: flex;
    flex-flow: column wrap;
    gap: 2.083vw;
    margin: 0vw 3.13vw 2.60vw 3.13vw;
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
    gap: 1.563vw;
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
</style>