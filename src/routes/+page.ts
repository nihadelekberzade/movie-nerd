import { PUBLIC_LOCAL_URL } from '$env/static/public'
import { getFetchConfig } from '../plugins/axios/index.js'
import { setUpcomingMovies } from '../store/movieStore.js'

export async function load({ fetch }) {
  const data = await fetch(
    PUBLIC_LOCAL_URL + '/titles/x/upcoming',
    getFetchConfig()
  )
    .then((r) => r.json())
    .then((r) => r)
  setUpcomingMovies(data)
}
