<script setup lang="ts">
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

</script>

<template>
    <header class="header">
        <div class="logo">
            <img src="../../assets/logo.svg" alt="IdeaLaw Logo">
        </div>
        <div class="links">
            <span class="link" v-for="link, index in linksArr" :key="index">{{ link.title }}</span>
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
}
</style>