<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

export interface Props {
    show: boolean,
    linksArr: []
}

interface Link {
    path: string;
    title: string;
}

const props = defineProps<{
    show: false,
    linksArr: Link[]
}>()

async function pushToRoute(pathName: string) {
    router.push(pathName)
}


</script>

<template>
    <div v-if="props.show" :class="[{ 'fade-in': props.show, 'fade-out': !props.show }, 'mobile-menu']">
        <div class="menu-content">
            <div class="links">
                <span class="link" v-for="link, index in linksArr" :key="index" @click="pushToRoute(link.path)">{{
                    link.title }}</span>
                <u-button :type="'outline'" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.mobile-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    margin-top: 20.93vw;
    top: 0;
    left: 0;
    z-index: 2999;
    padding: 5.814vw;
    background-color: white;
    opacity: 0;
    transform: translateY(-100%);
    padding: 11.628vw;
}

.links {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 11.628vw;
}

.link {
    font-size: 6.977vw;
    font-weight: var(--medium);
}

.fade-in {
    animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-out {
    animation: slide-out 0.5s forwards;
}

@keyframes slide-out {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}
</style>