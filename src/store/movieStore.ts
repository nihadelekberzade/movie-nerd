import { PUBLIC_LOCAL_URL } from '$env/static/public'
import { writable } from 'svelte/store'
import type { IMovie } from '../interfaces/IMovie'
import type { IMoviesReturnType } from '../interfaces/IMoviesReturnType'
import apiClient, { headers } from '../plugins/axios'

export const movieStore = writable({
  upcomingMovies: null,
} as IMovieStore)

export interface IMovieStore {
  upcomingMovies: null | IMoviesReturnType
}

export const fetchUpcomingTitles = async () => {
  console.log('fetchUpcomingTitles')

  let data: IMoviesReturnType = await apiClient
    .get('/titles/x/upcoming', {
      baseURL: PUBLIC_LOCAL_URL,
      headers: headers,
    })
    .then((response) => response.data)
  console.log('res', data.next)

  movieStore.update((store) => {
    store.upcomingMovies = data
    return store
  })
}

export const setUpcomingMovies = (data: IMoviesReturnType) => {
  movieStore.update((store) => {
    store.upcomingMovies = data
    return store
  })
}

export const fetchTitle = async (id: string) => {
  let data: IMovie = await apiClient
    .get(`/titles/${id}`)
    .then((response) => response.data)
  return data
}
export const fetchTitleRating = async (id: string) => {
  let data: IMovie = await apiClient
    .get(`/titles/${id}/ratings`)
    .then((response) => response.data)
  return data
}
