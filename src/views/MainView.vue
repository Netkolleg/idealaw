<script setup lang="ts">
import WelcomeView from './sections/WelcomeView.vue'
import InformationSectionView from './sections/InformationSectionView.vue'
import ServicesSectionView from './sections/ServicesSectionView.vue'
import CasesCarouselSection from './sections/CasesCarouselSection.vue'

import { allServices } from '@/collections'
import { cases } from '@/collections'
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