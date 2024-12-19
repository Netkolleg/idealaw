<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useWindowSize } from '@/composables/useWindowSize';
import menu from '../../assets/icons/mobile/menu.svg'
import xmark from '../../assets/icons/mobile/x-mark.svg'

const { width } = useWindowSize()
const router = useRouter()

const isMobile = computed(() => width.value < 431)

const state = reactive<{
    showMenu: boolean,
}>({
    showMenu: false
})

const linksArr = {
    services: {
        title: 'Услуги',
        path: 'services'
    },
    cases: {
        title: 'Кейсы',
        path: 'cases'
    },
    contacts: {
        title: 'Контакты',
        path: 'contacts'
    }
}

async function pushToRoute(pathName: string) {
    router.push(pathName)
}

const toggleMenu = (show?: boolean) => {
    if (show) {
        state.showMenu = show
    } else {
        state.showMenu = !state.showMenu
    }
}


</script>

<template>
    <header :class="[{ 'header-fixed': state.showMenu }, 'header']">
        <div class="logo fadeInDown">
            <img src="../../assets/logo.svg" alt="IdeaLaw Logo">
        </div>
        <div v-if="!isMobile" class="links fadeInDown">
            <span class="link" v-for="link, index in linksArr" :key="index" @click="pushToRoute(link.path)">{{
                link.title }}</span>
            <u-button :type="'outline'" />
        </div>
        <div @click="toggleMenu()" v-else>
            <img class="menu-btn" :src="!state.showMenu ? menu : xmark" alt="Menu Icon">
        </div>
    </header>
    <u-mobile-menu :show="state.showMenu" :linksArr="linksArr" @showMenu="toggleMenu" />
</template>

<style scoped>
.header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 7.552vw;
    padding: 2.08vw 3.13vw;
    background-color: white;
    z-index: 2999;
}

.header-fixed {
    width: 100%;
    height: 20.93vw;
    padding: 5.814vw;
    position: fixed;
    z-index: 3000;
    top: 0;
}

.logo img {
    width: 8.85vw;
    height: auto;
}

.links {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 2.60vw;
}

.link {
    font-weight: var(--medium);
    font-size: 1.04vw;
    color: var(--c-black);
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.link:hover {
    color: #B2B2B2;
    transition: 0.3s ease-in-out;
}

.menu-btn img {
    width: 5.814vw;
    height: auto;
}

/* Mobile Layout */
@media screen and (max-width: 431px) {
    .header {
        height: 20.93vw;
        padding: 5.814vw;
    }

    .logo img {
        width: 30.233vw;
        height: auto;
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