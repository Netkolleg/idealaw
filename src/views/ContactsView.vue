<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router'
import { computed } from 'vue'

import metaImage from '../assets/meta-images/contacts-image.jpg'

const router = useRouter()

useHead({
    title: 'Контакты – Idea Group',
    meta: [
        { name: 'description', content: 'Свяжитесь с нами для получения дополнительной информации.' },
        { property: 'og:title', content: 'Контакты – Idea Group' },
        { property: 'og:description', content: `г. Бишкек, ул. Манаса 41а. Бизнес-центр "Адмирал". Номера: 0502204402, 0504204402. Понедельник-пятница с 9:00 до 18:00` },
        { property: 'og:image', content: computed(() => `${metaImage}`) },
        { property: 'og:url', content: computed(() => `${router.currentRoute}`) },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Idea Group – Юридическая компания' },
    ]
});
</script>

<template>
    <u-navheader :title="'Контакты'" :type="'child-page'" />
    <u-footer :type="'main'" :needHeading="false" />
</template>

<style scoped>
.footer-main {
    margin: 2.60vw 3.13vw 2.60vw 3.13vw;
}
</style>
