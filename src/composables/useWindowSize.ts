import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export interface UseWindowSizeOptions {
  initialWidth?: number
  initialHeight?: number
  listenOrientation?: boolean
  includeScrollbar?: boolean
  type?: 'inner' | 'outer'
}

export function useWindowSize(options?: UseWindowSizeOptions): {
  width: Ref<number>
  height: Ref<number>
} {
  const {
    initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0,
    initialHeight = typeof window !== 'undefined' ? window.innerHeight : 0,
    listenOrientation = true,
    includeScrollbar = true,
    type = 'inner'
  } = options || {}

  const width = ref<number>(initialWidth)
  const height = ref<number>(initialHeight)

  const handleResize = () => {
    if (type === 'inner') {
      width.value = includeScrollbar ? window.innerWidth : document.documentElement.clientWidth
      height.value = includeScrollbar ? window.innerHeight : document.documentElement.clientHeight
    } else {
      width.value = window.outerWidth
      height.value = window.outerHeight
    }
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    if (listenOrientation) {
      window.addEventListener('orientationchange', handleResize)
    }
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (listenOrientation) {
      window.removeEventListener('orientationchange', handleResize)
    }
  })

  return { width, height }
}
