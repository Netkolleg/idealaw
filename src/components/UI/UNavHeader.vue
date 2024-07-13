<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const state = reactive<{
    currentPath: string
}>({
    currentPath: ''
})

export interface Props {
    title: string,
    type: string[]
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    type: () => ['sections', 'child-page']
})

onBeforeMount(async () => {
    state.currentPath = route.path
})

async function pushToRoute(pathName: string, routeParams?: string) {
    if (routeParams) {
        router.push({ path: `${pathName + routeParams}` })
    } else if (pathName !== 'back') {
        router.push({ path: pathName })
    } else {
        router.go(-1)
    }
}

</script>

<template>
    <div v-if="props.type.includes('sections')" class="navheader">
        <span></span>
        <h2>{{ props.title }}</h2>
        <span class="all-btn" @click="pushToRoute('/services')">Все<img src="../../assets/icons/arrow.svg"
                alt="Arrow Icon"></span>
    </div>
    <div v-if="props.type.includes('child-page')" class="page-navheader">
        <h2 class="back-btn" @click="pushToRoute('back')">{{ props.title }}<img src="../../assets/icons/back.svg"
                alt="Arrow Icon"></h2>
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
    margin: 3.13vw 1.5vw;
}

.back-btn {
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    gap: 1.30vw;
    font-weight: var(--medium);
    font-size: 1.56vw;
    cursor: pointer;
}

.back-btn img {
    width: 1.56vw;
    height: 1.56vw;
}
</style>