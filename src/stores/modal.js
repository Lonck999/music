import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const hiddenClass = computed(() => {
    return isOpen.value ? '' : 'hidden'
  })

  return { isOpen, hiddenClass }
})
