import { writable } from 'svelte/store'

export const authStore = writable({
  apiKey: '1b7b073e30mshcee6ae10b182b61p1d5bb3jsnc59abd18faa4',
} as IAuthStore)

export interface IAuthStore {
  apiKey: string
}

export const setApiKey = (token: string) => {
  console.log('token', token)
  authStore.update((store) => {
    store.apiKey = token
    return store
  })
}
