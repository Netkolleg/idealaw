<script setup lang="ts">
import { cases } from '@/collections'
import { reactive, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head';

import metaImage from '../assets/meta-images/cases-image.jpg'

const router = useRouter()

useHead({
    title: 'Юридическое портфолио – Idea Group',
    meta: [
        { name: 'description', content: 'Юридическое портфолио нашей компании.' },
        { property: 'og:title', content: 'Юридическое портфолио – Idea Group' },
        { property: 'og:description', content: 'Юридическое портфолио нашей компании.' },
        { property: 'og:image', content: computed(() => `${metaImage}`) },
        { property: 'og:url', content: computed(() => `${router.currentRoute}`) },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Idea Group – Юридическая компания' },
    ]
});

interface Cases {
    id: number,
    path: string,
    title: string,
    description: string,
    info: string
}

const state = reactive<{
    cases: Cases[]
}>({
    cases: []
})

onBeforeMount(() => {
    state.cases = cases
    console.log(state.cases)
})
</script>

<template>
    <u-navheader :title="'Дела'" :type="'child-page'" />
    <div class="cases-wrapper">
        <div class="cases-section">
            <div v-for="(caseItem, index) in state.cases" :key="index">
                <u-case-item class="fadeInDownInfo" :caseInfo="caseItem" :width="46" />
            </div>
        </div>
    </div>
    <u-footer :type="'child-page'" />
</template>

<style scoped>
.cases-section {
    display: flex;
    flex-flow: row wrap;
    margin: 3.13vw 2.60vw;
    gap: 0.5vw;
}

/* Text animation */
@keyframes fadeInDownInfo {
    from {
        opacity: 0;
        transform: translateY(-40%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fadeInDownInfo {
    animation: fadeInDownInfo 1s ease-in-out forwards;
}

@keyframes fadeInDownInfoDelay {
    from {
        opacity: 0;
        transform: translateY(-50%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fadeInDownInfoDelay {
    animation: fadeInDownInfoDelay 2s ease-in-out forwards;
}
</style>
