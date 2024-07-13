<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'

import WelcomeView from './sections/WelcomeView.vue'
import InformationSectionView from './sections/InformationSectionView.vue'
import ServicesSectionView from './sections/ServicesSectionView.vue'
import { allServices } from '@/collections'
</script>

<template>
  <u-navbar />
  <WelcomeView />
  <InformationSectionView :name="['proven-knowledge']" />
  <ServicesSectionView :services="allServices" />
  <InformationSectionView :name="['comprehensive-approach']" />
</template>