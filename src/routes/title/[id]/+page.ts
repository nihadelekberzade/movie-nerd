import { PUBLIC_LOCAL_URL } from '$env/static/public'
import { getFetchConfig } from '../../../plugins/axios'

export const load = async ({ params, fetch }) => {
  const url = `${PUBLIC_LOCAL_URL}/titles/${params.id}`
  const ratingUrl = `${PUBLIC_LOCAL_URL}/titles/${params.id}/ratings`
  const config = getFetchConfig()
  let movie = null
  let rating = null
  try {
    movie = await fetch(url, config)
      .then((r) => r.json())
      .then((r) => r.results)
  } catch (error) {
    console.log(error)
  }
  try {
    rating = await fetch(ratingUrl, config)
      .then((r) => r.json())
      .then((r) => r.results)
  } catch (error) {
    console.log(error)
  }

  return { movie, rating }
}
