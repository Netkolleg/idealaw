export default {
  mounted(el: any, binding: any) {
    const callback = ([entry]: any) => {
      if (entry.isIntersecting) {
        binding.value(entry) // Вызов переданной функции при пересечении
      }
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Процент пересечения
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)

    // Сохраняем ссылку на наблюдателя, чтобы в будущем его отключить
    el._observer = observer
  },
  unmounted(el: any) {
    if (el._observer) {
      el._observer.disconnect()
    }
  }
}
