import type { InternalAxiosRequestConfig } from 'axios'
import { get } from 'svelte/store'
import { authStore } from '../store/authStore'

export const authInterceptor = (requestConfig: InternalAxiosRequestConfig) => {
  requestConfig.headers['X-RapidAPI-Key'] = get(authStore).apiKey
  return requestConfig
}
