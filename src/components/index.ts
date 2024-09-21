import { type App } from 'vue'
import UNavbar from '@/components/UI/UNavigationBar.vue'
import UButton from '@/components/UI/UButton.vue'
import UServiceItem from '@/components/UI/UServiceItem.vue'
import UCaseItem from '@/components/UI/UCaseItem.vue'
import UNavHeader from './UI/UNavHeader.vue'
import UCarousel from './UI/UCarousel.vue'
import UMap from './UI/UMap.vue'
import UFooter from './UI/UFooter.vue'

const components = [
  {
    name: 'u-navbar',
    component: UNavbar
  },
  {
    name: 'u-button',
    component: UButton
  },
  {
    name: 'u-service-item',
    component: UServiceItem
  },
  {
    name: 'u-case-item',
    component: UCaseItem
  },
  {
    name: 'u-navheader',
    component: UNavHeader
  },
  {
    name: 'u-carousel',
    component: UCarousel
  },
  {
    name: 'u-map',
    component: UMap
  },
  {
    name: 'u-footer',
    component: UFooter
  }
]

export function registerGlobalComponents(app: App) {
  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
}
