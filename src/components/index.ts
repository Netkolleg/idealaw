import type { App } from 'vue'
import UNavbar from '@/components/UI/UNavigationBar.vue'
import UButton from '@/components/UI/UButton.vue'

const components = [
  {
    name: 'u-navbar',
    component: UNavbar
  },
  {
    name: 'u-button',
    component: UButton
  }
]

export function registerGlobalComponents(app: App) {
  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
}
