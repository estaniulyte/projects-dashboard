import { defineStore } from 'pinia'

import { ref } from '@vue/composition-api'
import { useLocalStorage } from '@vueuse/core'

export const useProjectsStore = defineStore('projects', {
  state: () => {
    return {
      projects: ref(useLocalStorage('projects', null)),
    }
  },
  actions: {
    set (field, value) {
      this[field] = value
    }
  }
})
