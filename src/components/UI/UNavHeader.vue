<script setup lang="ts">
import { reactive, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useWindowSize } from '@/composables/useWindowSize';

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 431)
const router = useRouter()

const state = reactive<{
    currentPath: string,
    previousPath: string
}>({
    currentPath: '',
    previousPath: ''
})

export interface Props {
    title: string,
    type: string[],
    path: string,
    previousRoute: string | null
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    type: () => ['sections', 'child-page'],
    path: '',
    previousRoute: ''
})

onBeforeMount(() => {
    state.currentPath = props.title
    if (props.previousRoute && props.previousRoute !== '/') {
        if (props.previousRoute === '/services') {
            state.previousPath = 'Услуги'
        } else if (props.previousRoute === '/cases') {
            state.previousPath = 'Дела'
        }
    }
})

async function pushToRoute(path: string, routeParams?: string) {
    if (routeParams && !path) {
        router.push({ path: `${path + routeParams}` })
    } else if (path !== 'back' && path !== '') {
        router.push({ path: path })
    } else {
        router.go(-1)
    }
}
</script>

<template>
    <div v-if="props.type.includes('sections')" class="navheader fadeInDown">
        <span v-if="!isMobile"></span>
        <h2>{{ props.title }}</h2>
        <span class="all-btn" @click="pushToRoute(props.path)">Все<img src="../../assets/icons/arrow.svg"
                alt="Arrow Icon"></span>
    </div>
    <div v-if="props.type.includes('child-page')" class="page-navheader fadeInDown">
        <div class="back-btn">
            <img @click="pushToRoute('back')" src="../../assets/icons/back.svg" alt="Arrow Icon">
            <div class="breadcrumbs">
                <span class="previous" v-if="state.previousPath" @click="pushToRoute('back')">{{ state.previousPath
                    }}</span>
                <span class="previous" v-if="state.previousPath">/</span>
                <span>{{ state.currentPath }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navheader {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    color: var(--c-black);
}

.navheader h2 {
    font-weight: var(--bold);
    font-size: 3.91vw;
    margin-left: 5.3vw;
}

.all-btn {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 0.78vw;
    font-weight: var(--medium);
    font-size: 1.56vw;
    cursor: pointer;
}

.all-btn img {
    width: 1.56vw;
    height: 1.56vw;
}

.page-navheader {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 3.13vw 3.13vw;
}

.back-btn {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 1.30vw;
}

.back-btn img {
    width: 1.56vw;
    height: 1.56vw;
    cursor: pointer;
}

.breadcrumbs {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 0.5vw;
    font-weight: var(--medium);
    font-size: 1.56vw;
}

.breadcrumbs span:nth-child(1) {
    cursor: pointer;
}

.previous {
    color: var(--gray-additional);
}

@media screen and (max-width: 431px) {
    .navheader h2 {
        font-size: 9.302vw;
        margin-left: 0;
    }

    .all-btn {
        gap: 2.326vw;
        font-size: 4.884vw;
    }

    .all-btn img {
        width: 4.884vw;
        height: 4.884vw;
    }

    .page-navheader {
        align-items: center;
        margin: 5.814vw;
    }

    .back-btn {
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: 5.814vw;
    }

    .back-btn img {
        width: 4.884vw;
        height: 4.884vw;
    }

    .breadcrumbs {
        gap: 1vw;
        font-size: 3.488vw;
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fadeInDown {
    animation: fadeInDown 1s ease-in-out forwards;
}
</style>