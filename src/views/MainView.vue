<script setup lang="ts">
import { computed, ref } from 'vue'
import WelcomeView from './sections/WelcomeView.vue'
import InformationSectionView from './sections/InformationSectionView.vue'
import ServicesSectionView from './sections/ServicesSectionView.vue'
import CasesCarouselSection from './sections/CasesCarouselSection.vue'

import { allServices } from '@/collections'
import { cases } from '@/collections'
import metaImage from '../assets/meta-images/main-image.jpg'

import { useHead } from '@vueuse/head';
import router from '@/router'

import vIntersect from '../observer'

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

const welcomeVisible = ref<boolean>(false);
const servicesVisible = ref<boolean>(false);
const info1Visible = ref<boolean>(false);
const info2Visible = ref<boolean>(false);
const info3Visible = ref<boolean>(false);
const casesVisible = ref<boolean>(false);
const footerVisible = ref<boolean>(false);

</script>

<template>
  <u-navbar />
  <div v-intersect="() => welcomeVisible = true">
    <WelcomeView :show="welcomeVisible" />
  </div>
  <div v-intersect="() => info1Visible = true">
    <InformationSectionView :section1Show="info1Visible" :name="['proven-knowledge']" />
  </div>
  <div v-intersect="() => servicesVisible = true">
    <ServicesSectionView :show="servicesVisible" :services="allServices" />
  </div>
  <div v-intersect="() => info2Visible = true">
    <InformationSectionView :section2Show="info2Visible" :name="['comprehensive-approach']" />
  </div>
  <div v-intersect="() => casesVisible = true">
    <CasesCarouselSection :show="casesVisible" :cases="cases" />
  </div>
  <div v-intersect="() => info3Visible = true">
    <InformationSectionView :section3Show="info3Visible" :name="['our-advantages']" />
  </div>
  <u-footer :type="'main'" />
</template>