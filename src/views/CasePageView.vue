<script setup lang="ts">
import { reactive, onBeforeMount, computed } from 'vue'
import { cases } from '../collections'
import DOMPurify from 'dompurify';
import { usePreviousRoute } from '../router/index';
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router'

import metaImage from '../assets/meta-images/cases-image.jpg'

const router = useRouter()

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
const title = computed(() => state.case?.title || '')
const description = computed(() => state.case?.description || '')

useHead({
    title: computed(() => `${title.value} – Idea Group`),
    meta: [
        { name: 'description', content: computed(() => `${description.value}`) },
        { property: 'og:title', content: computed(() => `${title.value} – Idea Group`) },
        { property: 'og:description', content: computed(() => `${description.value}`) },
        { property: 'og:image', content: computed(() => `${metaImage}`) },
        { property: 'og:url', content: computed(() => `${router.currentRoute}`) },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Idea Group – Юридическая компания' },
    ]
});
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