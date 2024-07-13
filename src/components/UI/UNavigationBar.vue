<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

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

</script>

<template>
    <header class="header">
        <div class="logo">
            <img src="../../assets/logo.svg" alt="IdeaLaw Logo">
        </div>
        <div class="links">
            <span class="link" v-for="link, index in linksArr" :key="index" @click="pushToRoute(link.path)">{{
                link.title }}</span>
            <u-button :type="'outline'" />
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    margin: 2.08vw 3.13vw;
    background-color: white;
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
</style>