import type { IMovie } from './IMovie'

export interface IMoviesReturnType {
  entries: number
  next: string
  page: number
  results: IMovie[]
}
