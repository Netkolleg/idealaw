<script setup lang="ts">
import { computed } from 'vue'
import WelcomeView from './sections/WelcomeView.vue'
import InformationSectionView from './sections/InformationSectionView.vue'
import ServicesSectionView from './sections/ServicesSectionView.vue'
import CasesCarouselSection from './sections/CasesCarouselSection.vue'

import { allServices } from '@/collections'
import { cases } from '@/collections'
import metaImage from '../assets/meta-images/main-image.jpg'

import { useHead } from '@vueuse/head';
import router from '@/router'

useHead({
  title: 'Главная страница – Idea Group',
  meta: [
    { name: 'description', content: 'Юридическая проблема? Есть идея! Мы придумаем как ее решить.' },
    { property: 'og:title', content: 'Главная страница – Idea Group' },
    { property: 'og:description', content: 'Юридическая проблема? Есть идея! Мы придумаем как ее решить.' },
    { property: 'og:image', content: computed(() => `${metaImage}`) },
    { property: 'og:url', content: computed(() => `${router.currentRoute}`) },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Idea Group – Юридическая компания' },
  ]
});
</script>

<template>
  <u-navbar />
  <WelcomeView />
  <InformationSectionView :name="['proven-knowledge']" />
  <ServicesSectionView :services="allServices" />
  <InformationSectionView :name="['comprehensive-approach']" />
  <CasesCarouselSection :cases="cases" />
  <InformationSectionView :name="['our-advantages']" />
  <u-footer :type="'main'" />
</template>