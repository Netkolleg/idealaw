import { type App } from 'vue'
import UNavbar from '@/components/UI/UNavigationBar.vue'
import UButton from '@/components/UI/UButton.vue'
import UServiceItem from '@/components/UI/UServiceItem.vue'
import UNavHeader from './UI/UNavHeader.vue'

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
    name: 'u-navheader',
    component: UNavHeader
  }
]

export function registerGlobalComponents(app: App) {
  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
}
