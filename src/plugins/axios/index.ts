import { PUBLIC_LOCAL_URL } from '$env/static/public'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { get } from 'svelte/store'
import { authInterceptor } from '../../interceptors/auth.interceptor'
import { authStore } from '../../store/authStore'

export const headers = {
  'X-RapidAPI-Key': get(authStore).apiKey,
  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
}

const options = {
  baseURL: PUBLIC_LOCAL_URL,
  headers: headers,
}

export const getFetchConfig = () => {
  const apiKey = get(authStore).apiKey
  return {
    baseUrl: PUBLIC_LOCAL_URL,
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  }
}

const apiClient: AxiosInstance = axios.create(options)

apiClient.interceptors.request.use(authInterceptor)

export default apiClient
